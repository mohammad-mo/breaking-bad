import React from 'react'
import QuoteListItem from './QuoteListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const QuoteList = ({ items }) => 
{
  return (
    <motion.section
      className="cards-quote"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {items.map((item) => (
        <QuoteListItem item={item} key={item.quote_id} />
      ))}
    </motion.section>
  )
}

export default QuoteList
