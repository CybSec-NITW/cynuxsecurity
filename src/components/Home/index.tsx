import React, { useRef, useCallback } from 'react'

import HeroSection from '../HeroSection'
import SubscribeSection from '../SubscribeSection'
import PromoSection from '../PromoSection'
import Link from '../Link'
import LearnMore from './LearnMore'
import LandingHero from './LandingHero'
import Diagram from './Diagram'
import UseCases from './UseCases'
import { logEvent } from '../../utils/front/ga'

import styles from './styles.module.css'

const Home: React.FC = () => {
  const diagramSectionRef = useRef<HTMLElement>(null)
  const useCasesSectionRef = useRef<HTMLElement>(null)
  const goToSupport = useCallback(
    () => logEvent('promo', 'support'),
    []
  )
  const goToDownload = useCallback(() => logEvent('promo', 'download'), [])

  return (
    <>
      <HeroSection className={styles.heroSection}>
        <LandingHero scrollToRef={useCasesSectionRef} />
        <LearnMore scrollToRef={diagramSectionRef} />
      </HeroSection>
      <Diagram ref={diagramSectionRef} />
      <PromoSection
        title="For pentesters, by pentesters"
        buttons={[
          <Link href="/support" onClick={goToSupport} key="support">
            Support
          </Link>,
          <Link href="/download" onClick={goToDownload} key="download">
            Download
          </Link>
        ]}
      />
      <UseCases ref={useCasesSectionRef} />
      <SubscribeSection />
    </>
  )
}

export default Home
