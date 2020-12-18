import React from 'react'

import PageContent from '../PageContent'
import LayoutWidthContainer from '../LayoutWidthContainer'
import HeroSection from '../HeroSection'
import Link from '../Link'
import PromoSection from '../PromoSection'

import styles from './styles.module.css'

const DownloadPage: React.FC = () => (
  <>
    <PageContent>
      <HeroSection className={styles.heroContainer}>
        <h1 className={styles.heroHeading}>
          Cynux Security OS <br></br>
           Downloads
        </h1>
      </HeroSection>
      <LayoutWidthContainer>
        <div className={styles.features}>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/git-icon.svg"
              alt="Git compatible"
            />
            <h3 className={styles.featureName}>Cynux Security ISO</h3>
            <div className={styles.featureDescription}>
            For Professional Use.<br></br>
            Security Tools Included.<br></br>
            GNOME desktop.<br></br>
            Beta version <br></br>
             <Link
                href="https://sourceforge.net/projects/cynuxsecurity/files/rel0.1/cynuxsecurity-2020.12.18-x86_64.iso/download"
                className={styles.featureName}
                target="_blank"
               >
                Download
             </Link>
            </div>
          </div>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/storage-icon.svg"
              alt="Storage agnostic"
            />
            <h3 className={styles.featureName}>Cynux Security MATE ISO</h3>
            <div className={styles.featureDescription}>
            For Professional Use.<br></br>
            Security Tools Included.<br></br>
            MATE desktop.<br></br>
             <Link
                href="link"
                className={styles.featureName}
                target="_blank"
               >
                Coming Soon
             </Link>
            </div>
          </div>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/repro.svg"
              alt="Reproducibility"
            />
            <h3 className={styles.featureName}>Cynux Security XFCE ISO</h3>
            <div className={styles.featureDescription}>
            For Professional Use.<br></br>
            Security Tools Included.<br></br>
            XFCE desktop.<br></br>
             <Link
                href="link"
                className={styles.featureName}
                target="_blank"
               >
                Coming Soon
             </Link>
            </div>
          </div>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/branching.svg"
              alt="Low-friction branching"
            />
            <h3 className={styles.featureName}>Cynux Security KDE ISO</h3>
            <div className={styles.featureDescription}>
            For Professional Use.<br></br>
            Security Tools Included.<br></br>
            KDE desktop.<br></br>
             <Link
                href="link"
                className={styles.featureName}
                target="_blank"
               >
                Coming Soon
             </Link>
            </div>
          </div>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/storage-icon.svg"
              alt=""
            />
            <h3 className={styles.featureName}>Cynux Security OVA Image</h3>
            <div className={styles.featureDescription}>
            For Professional Use.<br></br>
            Security Tools Included.<br></br>
            Virtual Box Support.<br></br>
             <Link
                href="link"
                className={styles.featureName}
                target="_blank"
               >
                Coming Soon
             </Link>
            </div>
          </div>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/ml-pipe.svg"
              alt="ML pipelines framework"
            />
            <h3 className={styles.featureName}>Cynux Security VDK Image</h3>
            <div className={styles.featureDescription}>
            For Professional Use.<br></br>
            Security Tools Included.<br></br>
            VMWare Support.<br></br>
             <Link
                href="link"
                className={styles.featureName}
                target="_blank"
               >
                Coming Soon
             </Link>
            </div>
          </div>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/languages-icon.svg"
              alt="Language & framework agnostic"
            />
            <h3 className={styles.featureName}>
              Cynux Security NetInstaller
            </h3>
            <div className={styles.featureDescription}>
            For Professional Use.<br></br>
            Security Tools Included.<br></br>
            NetInstaller.<br></br>
             <Link
                href="link"
                className={styles.featureName}
                target="_blank"
               >
                Coming Soon
             </Link>
            </div>
          </div>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/cluster.svg"
              alt="HDFS, Hive & Apache Spark"
            />
            <h3 className={styles.featureName}>Cynux Home ISO</h3>
            <div className={styles.featureDescription}>
            For Home Use.<br></br>
            Workstation.<br></br>
            ISO File.<br></br>
             <Link
                href="link"
                className={styles.featureName}
                target="_blank"
               >
                Coming Soon
             </Link>
            </div>
          </div>
          <div className={styles.feature}>
            <img
              className={styles.featureIcon}
              src="/img/features/icons/failures.svg"
              alt="Failure tracking"
            />
            <h3 className={styles.featureName}>Cynux Home OVA Image</h3>
            <div className={styles.featureDescription}>
            For Home Use.<br></br>
            Workstation.<br></br>
            Virtual Box Support<br></br>
             <Link
                href="link"
                className={styles.featureName}
                target="_blank"
               >
                Coming Soon
             </Link>
            </div>
          </div>
        </div>
      </LayoutWidthContainer>
    </PageContent>
    <PromoSection
      title="Ready to give it a try?"
      buttons={[
        <Link href="/download" key="download">
          Download
        </Link>
      ]}
    />
  </>
)

export default DownloadPage
