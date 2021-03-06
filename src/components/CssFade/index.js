import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'

const CssFade = ({ isTransitioning, children, isIn }) => (
  <div
    className={cx(styles.fade, {
      [styles.isTransitioning]: isTransitioning,
      [styles.isIn]: isIn,
    })}
  >
    {children}
  </div>
)

export default CssFade
