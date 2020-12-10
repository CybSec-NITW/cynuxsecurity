import React from 'react'

import { IPaginatorPageInfo } from '../../Paginator'
import PageContent from '../../PageContent'
import Feed, { IBlogFeedPostList } from '../Feed'
import SubscribeSection from '../../SubscribeSection'

interface IBlogHomeProps {
  posts: IBlogFeedPostList
  pageInfo: IPaginatorPageInfo
}

const Home: React.FC<IBlogHomeProps> = ({ posts, pageInfo }) => {
  return (
    <>
      <PageContent>
        <Feed
          feedPostList={posts}
          pageInfo={pageInfo}
          header="Cynux Security Blogs"
          leadParagraph={
            <>
              We write about cynux security. From privacy and
              security to pentesting. We share our news,
              findings, interesting reads, community takeaways.
            </>
          }
        />
      </PageContent>
      <SubscribeSection />
    </>
  )
}

export default Home
