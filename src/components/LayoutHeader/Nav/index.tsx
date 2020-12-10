import React from 'react'
import cn from 'classnames'

import Link from '../../Link'
import PseudoButton from '../../PseudoButton'

import { logEvent } from '../../../utils/front/ga'
import { getFirstPage } from '../../../utils/shared/sidebar'

const docsPage = getFirstPage()

import styles from './styles.module.css'

const Nav: React.FC = () => (
  <div className={styles.wrapper}>
    <ul className={styles.linksList}>
      <li className={styles.linkItem}>
        <Link
          href="/download"
          className={styles.link}
          onClick={(): void => logEvent('menu', 'download')}
        >
          Download
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link
          href="/community"
          className={styles.link}
          onClick={(): void => logEvent('menu', 'community')}
        >
          Community
        </Link>
        <div className={styles.dropdown}>
          <div className={styles.dropdownInset}>
            <Link
              href="/community#meet"
              className={styles.dropdownLink}
              onClick={(): void => logEvent('menu', 'community')}
            >
              Meet the Community
            </Link>
            <Link
              href="/community#contribute"
              className={styles.dropdownLink}
              onClick={(): void => logEvent('menu', 'community')}
            >
              Contribute
            </Link>
            <Link
              href="/community#learn"
              className={styles.dropdownLink}
              onClick={(): void => logEvent('menu', 'community')}
            >
              Learn
            </Link>
            <Link
              href="/community#events"
              className={styles.dropdownLink}
              onClick={(): void => logEvent('menu', 'community')}
            >
              Events
            </Link>
          </div>
        </div>
      </li>
      <li className={styles.linkItem}>
        <Link
          href="/support"
          className={styles.link}
          onClick={(): void => logEvent('menu', 'support')}
        >
          Support
        </Link>
      </li>
      <li className={cn(styles.linkItem, styles.icon)}>
        <Link
          href="https://github.com/CybSec-NITW/cynuxsecurity"
          className={styles.imageLink}
        >
          <img
            src="/img/community/github.svg"
            className={styles.icon}
            alt="Github logo"
          />
        </Link>
      </li>
      <li className={cn(styles.linkItem, styles.icon)}>
        <Link href="/chat" target="_blank" className={styles.imageLink}>
          <img
            src="/img/community/discord.svg"
            className={styles.icon}
            alt="Discord logo"
          />
        </Link>
      </li>
    </ul>
    <PseudoButton
      className={`${styles.getStartedButton} btn-with-focus`}
      href="/download"
      onClick={(): void => logEvent('menu', 'download')}
    >
      Download Now
    </PseudoButton>
  </div>
)

export default Nav
