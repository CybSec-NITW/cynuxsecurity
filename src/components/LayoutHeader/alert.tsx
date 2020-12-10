import cn from 'classnames'
import React from 'react'


import styles from './styles.module.css'

const LayoutAlert: React.FC<{ collapsed: boolean }> = ({ collapsed }) => (
  <div className={cn(styles.alert, collapsed && styles.collapsed)}>
    <span role="img" aria-label="rocket">
      🚀
    </span>{' '}
    Join Cynux Security beta program!{' '}
  </div>
)

export default LayoutAlert
