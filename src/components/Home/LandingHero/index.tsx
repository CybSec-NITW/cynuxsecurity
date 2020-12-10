import React, { useEffect, useCallback, useState } from 'react'
import cn from 'classnames'

import ShowOnly from '../../ShowOnly'
import Link from '../../Link'
import DownloadButton from '../../DownloadButton'
import TwoRowsButton from '../../TwoRowsButton'
import GithubLine from './GithubLine'
import { scrollIntoLayout, ease } from '../../../utils/front/scroll'
import { logEvent } from '../../../utils/front/ga'

import styles from './styles.module.css'

interface ILandingHeroProps {
  scrollToRef: React.RefObject<HTMLElement>
}

const LandingHero: React.FC<ILandingHeroProps> = ({ scrollToRef }) => {
  const [activeCommand, setActiveCommand] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setActiveCommand(prev => (prev + 1) % 4),
      3000
    )

    return (): void => clearInterval(interval)
  }, [])

  const scrollToUseCases = useCallback(() => {
    logEvent('button', 'how-it-works')
    scrollIntoLayout(scrollToRef?.current, {
      smooth: true,
      duration: 800,
      ease: ease.inOutCube
    })
  }, [scrollToRef?.current])

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>
          Open-source
          <br />
          Cynux Security
          <br />
          for Developers & Pentesters
        </h1>
        <div className={styles.buttonsContainer}>
          <ShowOnly on="mobile">
            <Link
              className={cn(styles.actionButton, styles.getStartedButton)}
              href="/download"
            >
              Download
            </Link>
          </ShowOnly>
          <ShowOnly on="desktop">
            <DownloadButton />
          </ShowOnly>
          <TwoRowsButton
            mode="outline"
            className={`${cn(
              styles.actionButton,
              styles.watchVideo
            )} btn-with-focus btn-with-focus--white`}
            title="Watch video"
            description="How it looks"
            icon={
              <img
                className={styles.actionButtonIcon}
                src="/img/play-icon.svg"
                alt="Watch video"
              />
            }
            onClick={scrollToUseCases}
          />
        </div>

        <div className={styles.github}>
          <GithubLine />
        </div>
      </div>

      <ShowOnly on="desktop">
        <div className={styles.commands}>
          <div
            className={cn(styles.command, activeCommand === 0 && styles.active)}
          >
            <span className={styles.line}>Secure</span>
          </div>
          <div
            className={cn(styles.command, activeCommand === 1 && styles.active)}
          >
            <span className={styles.line}>
              Lightweight
            </span>
          </div>
          <div
            className={cn(styles.command, activeCommand === 2 && styles.active)}
          >
            <span className={styles.line}>
              Portable & Universal
            </span>
          </div>
          <div
            className={cn(styles.command, activeCommand === 3 && styles.active)}
          >
            <span className={styles.line}>For Developers & Pentesters</span>
          </div>
        </div>
      </ShowOnly>
    </div>
  )
}

export default LandingHero
