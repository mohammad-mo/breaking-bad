import React from 'react'

import EpisodeListItem from './EpisodeListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const EpisodeList = ({ episodes }) => {
  return (
    <motion.section
      className='cards-episode'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {React.Children.toArray(
        episodes.map((item) => <EpisodeListItem item={item} />),
      )}
    </motion.section>
  )
}

export default EpisodeList
