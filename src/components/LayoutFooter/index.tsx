import React from 'react'
import cn from 'classnames'
import includes from 'lodash/includes'

import { LayoutModifiers, ILayoutModifiable } from '../MainLayout'
import LayoutWidthContainer from '../LayoutWidthContainer'
import Link from '../Link'
import IconSet from '../IconSet'

import { getFirstPage } from '../../utils/shared/sidebar'

import styles from './styles.module.css'

const docsPage = getFirstPage()

const LayoutFooter: React.FC<Required<ILayoutModifiable>> = ({ modifiers }) => (
  <footer className={styles.wrapper}>
    <LayoutWidthContainer
      className={cn(styles.container)}
      wide={includes(modifiers, LayoutModifiers.Wide)}
    >

      <div className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Product</h2>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link href="/" className={styles.link}>
                Overview
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/download" className={styles.link}>
                Download
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>Help</h2>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link href="/support" className={styles.link}>
                Support
              </Link>
            </li>
            <li className={styles.linkItem}>

              <Link href="/community" className={styles.link}>
                Community
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href={docsPage} className={styles.link}>
                Documentation
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>Company</h2>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link href="/#" className={styles.link}>
                Blog
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link
                href="https://cybsec.in/"
                className={styles.link}
                target="_blank"
              >
                CybSecNITW
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/#privacy" className={styles.link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>Social</h2>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link
                href="https://twitter.com/cynuxsecurity"
                className={styles.link}
                target="_blank"
              >
                <IconSet className={styles.icon} name="twitter" />
                Twitter
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link
                href="https://github.com/CybSec-NITW/cynuxsecurity"
                className={styles.link}
                target="_blank"
              >
                <IconSet className={styles.icon} name="github" />
                GitHub
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/chat" className={styles.link}>
                <IconSet className={styles.icon} name="discord" />
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </LayoutWidthContainer>
  </footer>
)

export default LayoutFooter
