import React, { forwardRef } from 'react'
import Slider from 'react-slick'
import cn from 'classnames'

import LayoutWidthContainer from '../../LayoutWidthContainer'
import ShowOnly from '../../ShowOnly'
import Link from '../../Link'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'

const LearnMore: React.FC<{ href: string }> = ({ href }) => (
  <div className={styles.learnMoreContainer}>
    <Link className={styles.learnMoreLink} href={href}>
      <span>Learn&nbsp;more</span>
      <img
        className={styles.learnMoreLinkIcon}
        src="/img/learn_more_arrow.svg"
        alt=""
      />
    </Link>
  </div>
)

const ColumnOne: React.FC = () => (
  <div className={styles.column}>
    <h3 className={cn(styles.columnCaption, styles.purple)}>
      Arch Linux Standards
    </h3>
    <div className={styles.columnDescriptionContainer}>
      <p className={styles.columnDescription}>
      We follow the Arch Linux standards closely in order to keep our packages 
      clean, proper and easy to maintain. Our team works hard to 
      give the best Cynux experience.
      </p>

    </div>

  </div>
)

const ColumnTwo: React.FC = () => (
  <div className={styles.column}>
    <h3 className={cn(styles.columnCaption, styles.azure)}>
      Penetration Testing Distribution
    </h3>
    <div className={styles.columnDescriptionContainer}>
      <p className={styles.columnDescription}>
        Cynux is an Arch Linux-based penetration testing distribution for 
        penetration testers and security researchers. The repository contains 200+ 
        tools. Cynux is compatible with existing Arch installs.
      </p>
      
    </div>

  </div>
)

const ColumnThree: React.FC = () => (
  <div className={styles.column}>
    <h3 className={cn(styles.columnCaption, styles.orange)}>
      Open Source Distribution
    </h3>
    <div className={styles.columnDescriptionContainer}>
      <p className={styles.columnDescription}>
        Cynux will always be completely free. We create it, so we can have a 
        operating system that is easy to use and stable. You the user, are the main 
        focus, we do not take control away from you and respect your privacy.
      </p>
    </div>

  </div>
)

const DiagramSection: React.ForwardRefRenderFunction<HTMLElement> = (
  _,
  ref
) => (
  <section className={styles.diagramSection} ref={ref}>
    <LayoutWidthContainer>
      <h2 className={styles.title}>Cynux Security for security professionals and enthusiasts</h2>
      <p className={styles.description}>
        Cynux Security is built to help security enthusiasts and penetration testers,
        designed to perform pentesting with security tools, and give
        great interface.
      </p>

      <ShowOnly on="desktop">
        <div className={styles.desktopChartContainer}>
        </div>
        <div className={styles.columns}>
          <ColumnOne />
          <ColumnTwo />
          <ColumnThree />
        </div>
      </ShowOnly>

      <ShowOnly on="mobile">
        <div className={styles.sliderContainer}>
          <Slider
            slidesToShow={1}
            slidesToScroll={1}
            initialSlide={1}
            infinite
            speed={600}
            dots
            appendDots={(dots): JSX.Element => (
              <ul className={styles.sliderDots}>{dots}</ul>
            )}
          >
            <div className={styles.slide}>

              <ColumnOne />
            </div>
            <div className={styles.slide}>
 
              <ColumnTwo />
            </div>
            <div className={styles.slide}>

              <ColumnThree />
            </div>
          </Slider>
        </div>
      </ShowOnly>
    </LayoutWidthContainer>
  </section>
)

export default forwardRef<HTMLElement>(DiagramSection)
