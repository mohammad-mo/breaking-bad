import React from 'react'

import DeathListItem from './DeathListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// eslint-disable-next-line react-hooks/exhaustive-deps
const DeathList = ({ deaths }) => {
  return (
    <motion.section
      className='cards-death'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {React.Children.toArray(
        deaths.map((item) => <DeathListItem item={item} />),
      )}
    </motion.section>
  )
}

export default DeathList
