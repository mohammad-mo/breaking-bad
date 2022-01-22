import React from 'react'
import CharacterListItem from './CharacterListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const CharacterList = ({ items }) => 
{
  return (
    <motion.section
      className="cards"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {items.map((item) => (
        <CharacterListItem item={item} key={item.char_id} />
      ))}
    </motion.section>
  )
}

export default CharacterList
