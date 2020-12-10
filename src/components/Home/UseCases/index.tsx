import React, { forwardRef } from 'react'
import YoutubeVideo from './Video'
import CollapsibleText from './CollapsibleText'

import LayoutWidthContainer from '../../LayoutWidthContainer'
import ShowOnly from '../../ShowOnly'

import styles from './styles.module.css'

const Heading1: React.FC = () => (
  <div className={styles.caseHeader}>
    <img
      className={styles.caseIcon}
      src="/img/save-reprro.svg"
      width={30}
      height={30}
      alt=""
    />
    <h3 className={styles.caseTitle}>Security</h3>
  </div>
)

const Heading2: React.FC = () => (
  <div className={styles.caseHeader}>
    <img
      className={styles.caseIcon}
      src="/img/git-icon.svg"
      width={30}
      height={30}
      alt=""
    />
    <h3 className={styles.caseTitle}>Privacy</h3>
  </div>
)

const Heading3: React.FC = () => (
  <div className={styles.caseHeader}>
    <img
      className={styles.caseIcon}
      src="/img/share.svg"
      width={30}
      height={31}
      alt=""
    />
    <h3 className={styles.caseTitle}>
    Software Development
    </h3>
  </div>
)

const Description1: React.FC = () => (
  <div className={styles.caseDescription}>
    A complete arsenal of security tools that can be deployed on all 
    your devices and in the cloud.
  </div>
)

const Description2: React.FC = () => (
  <div className={styles.caseDescription}>
    A secure and hardened system ready to securely surf the web and privately 
    communicate with, plus many useful zero-knowledge services where encryption 
    is done right.
  </div>
)

const Description3: React.FC = () => (
  <div className={styles.caseDescription}>
    A full development stack with the best editors, languages and technologies 
    available out of the box.
  </div>
)

const UseCases: React.ForwardRefRenderFunction<HTMLElement> = (_, ref) => {
  return (
    <section className={styles.container} ref={ref}>
      <LayoutWidthContainer>
        <h2 className={styles.heading}>Use cases</h2>
        <div className={styles.wrapper}>
          <div className={styles.videoContainer}>
            <YoutubeVideo id={`-link-`} />
          </div>

          <div className={styles.rightColumn}>
            <ShowOnly on="desktop">
              <div className={styles.cases}>
                <div className={styles.case}>
                  <Heading1 />
                  <Description1 />
                </div>
                <div className={styles.case}>
                  <Heading2 />
                  <Description2 />
                </div>
                <div className={styles.case}>
                  <Heading3 />
                  <Description3 />
                </div>
              </div>
            </ShowOnly>

            <ShowOnly on="mobile">
              <div className={styles.cases}>
                <div className={styles.case}>
                  <CollapsibleText header={<Heading1 />}>
                    <Description1 />
                  </CollapsibleText>
                </div>
                <div className={styles.case}>
                  <CollapsibleText header={<Heading2 />}>
                    <Description2 />
                  </CollapsibleText>
                </div>
                <div className={styles.case}>
                  <CollapsibleText header={<Heading3 />}>
                    <Description3 />
                  </CollapsibleText>
                </div>
              </div>
            </ShowOnly>
          </div>
        </div>
      </LayoutWidthContainer>
    </section>
  )
}

export default forwardRef<HTMLElement>(UseCases)
