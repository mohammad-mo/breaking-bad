import React from 'react'

import CharacterListItem from './CharacterListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const CharacterList = ({ characters }) => {
  return (
    <motion.section
      className='cards'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {React.Children.toArray(
        characters.map((item) => <CharacterListItem item={item} />),
      )}
    </motion.section>
  )
}

export default CharacterList
