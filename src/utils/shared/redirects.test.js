const url = require('url')
const {
  buildSidebarRedirects,
  processRedirectString,
  getRedirect
} = require('./redirects')

describe('buildRedirectsList', () => {
  it('builds correct redirects list', () => {
    const list = [
      {
        source: false,
        path: '/a',
        children: [
          {
            path: '/a/b',
            source: 'some-file'
          }
        ]
      }
    ]

    expect(buildSidebarRedirects(list)).toEqual(['^/a/?$ /a/b 307'])
  })
})

describe('processRedirectString', () => {
  it('reads the regex, replacement and code', () => {
    const { regex, replace, code } = processRedirectString('^/foo /bar 418')

    expect(regex).toBeInstanceOf(RegExp)
    expect(regex.source).toEqual('^\\/foo')
    expect(replace).toEqual('/bar')
    expect(code).toEqual(418)
  })

  it('defaults to 301 response code', () => {
    const { code } = processRedirectString('^/x /y')

    expect(code).toEqual(301)
  })

  it('detects whether redirecting a full URL or just a path', () => {
    const { matchPathname: matchPathnameFalse } = processRedirectString(
      '^https://example.com/foo /x'
    )
    expect(matchPathnameFalse).toEqual(false)

    const { matchPathname } = processRedirectString('^/path /y')
    expect(matchPathname).toEqual(true)
  })
})

describe('getRedirects', () => {
  it('enforces HTTPS and removes www simultaneously', () => {
    const mockReq = {
      headers: {
        'x-forwarded-proto': 'http'
      },
      url: '/foo/bar?baz'
    }
    expect(
      getRedirect('www.cynuxsecurity.org', '/not-used', { req: mockReq, dev: false })
    ).toEqual([301, 'https://cynuxsecurity.org/foo/bar?baz'])
  })

  const itRedirects = (source, target, code = 301) => {
    const addHost = pathOrUrl => {
      if (pathOrUrl.startsWith('/')) {
        return `https://cynuxsecurity.org${pathOrUrl}`
      }
      return pathOrUrl
    }

    it(`${source} -> ${target} (${code})`, () => {
      source = addHost(source)
      const { hostname, pathname } = url.parse(source)
      const [rCode, rLocation] = getRedirect(hostname, pathname)

      expect(rLocation).toEqual(target)
      expect(rCode).toEqual(code)

      // Detect redirect loops.
      const secondUrl = url.parse(addHost(rLocation))
      const secondRedirect = getRedirect(secondUrl.hostname, secondUrl.pathname)

      // allow second redirect only if it removes trailing slash
      if (secondRedirect.length) {
        const thirdUrl = url.parse(addHost(secondRedirect[1]))
        expect(secondUrl.host).toEqual(thirdUrl.host)
        expect(secondUrl.pathname.replace(/\/$/, '')).toEqual(secondRedirect[1])

        const thirdRedirect = getRedirect(thirdUrl.hostname, thirdUrl.pathname)
        expect(thirdRedirect).toEqual([])
      }
    })
  }

  describe('fromSubdomains', () => {
    // Remove www (when already HTTPS)
    itRedirects('https://www.cynuxsecurity.org/foo', 'https://cynuxsecurity.org/foo')

    itRedirects(
      'https://man.cynuxsecurity.org/',
      'https://cynuxsecurity.org/doc/command-reference/',
      303
    )

    itRedirects(
      'https://man.cynuxsecurity.org/foo',
      'https://cynuxsecurity.org/doc/command-reference/foo',
      303
    )

    itRedirects(
      'https://error.cynuxsecurity.org/',
      'https://cynuxsecurity.org/doc/user-guide/troubleshooting#',
      303
    )

    itRedirects(
      'https://error.cynuxsecurity.org/foo',
      'https://cynuxsecurity.org/doc/user-guide/troubleshooting#foo',
      303
    )

    itRedirects(
      'https://www.cynuxsecurity.org/some-random',
      'https://cynuxsecurity.org/some-random',
      301
    )

    itRedirects('https://www.cynuxsecurity.org', 'https://cynuxsecurity.org/', 301)

    itRedirects(
      'https://cynuxsecurity.org/some-random',
      'https://cynuxsecurity.org/some-random',
      301
    )

    itRedirects(
      'https://discuss.cynuxsecurity.org/some-random',
      'https://discuss.cynuxsecurity.org/some-random',
      301
    )

    itRedirects(
      'https://blog..org/september-19-cynuxsecurity-heartbeat-0123456789ab',
      'https://cynuxsecurity.org/blog/september-19-cynuxsecurity-heartbeat',
      301
    )

    itRedirects(
      'https://blog.cynuxsecurity.org/some-random',
      'https://cynuxsecurity.org/blog/some-random',
      301
    )

    itRedirects(
      'https://blog.cynuxsecurity.org',
      'https://cynuxsecurity.org/blog/',
      301
    )

    itRedirects(
      'https://blog.cynuxsecurity.org/september-19-cynuxsecurity-heartbeat',
      'https://cynuxsecurity.org/blog/september-19-cynuxsecurity-heartbeat',
      301
    )

    itRedirects('https://blog.cynuxsecurity.org', 'https://cynuxsecurity.org/blog/', 301)
  })

  describe('toS3', () => {
    itRedirects(
      'https://code.cynuxsecurity.org/foo/bar',
      'https://s3-us-east-2.amazonaws.com/cynuxsecurity-public/code/foo/bar',
      303
    )

    itRedirects(
      'https://data.cynuxsecurity.org/foo/bar',
      'https://s3-us-east-2.amazonaws.com/cynuxsecurity-public/data/foo/bar',
      303
    )

    itRedirects(
      'https://remote.cynuxsecurity.org/foo/bar',
      'https://s3-us-east-2.amazonaws.com/cynuxsecurity-public/remote/foo/bar',
      303
    )

    itRedirects(
      '/deb/foo',
      'https://s3-us-east-2.amazonaws.com/cynuxsecurity-s3-repo/deb/foo',
      303
    )

    itRedirects(
      '/rpm/foo',
      'https://s3-us-east-2.amazonaws.com/cynuxsecurity-s3-repo/rpm/foo',
      303
    )
  })

  describe('toDiscord', () => {
    itRedirects('/help', 'https://discord.gg/Zr7Cyw66dA', 303)

    itRedirects('/chat', 'https://discord.gg/Zr7Cyw66dA', 303)
  })

  describe('fromPaths', () => {
    itRedirects('/docs/x', '/doc/x')

    itRedirects('/documentation/x', '/doc/x')

    itRedirects('/doc/commands-reference/foo', '/doc/command-reference/foo')

    itRedirects('/doc/tutorial', '/doc/start')
    itRedirects('/doc/tutorial/', '/doc/start')
    itRedirects('/doc/tutorials', '/doc/start')
    itRedirects('/doc/tutorials/', '/doc/start')
    itRedirects('/doc/tutorials/deep', '/doc/start')
    itRedirects(
      '/doc/tutorials/versioning',
      '/doc/use-cases/versioning-data-and-model-files/tutorial'
    )

    itRedirects('/doc/tutorial/bar', '/doc/start')

    itRedirects(
      '/doc/use-cases/data-and-model-files-versioning',
      '/doc/use-cases/versioning-data-and-model-files'
    )
  })
})
