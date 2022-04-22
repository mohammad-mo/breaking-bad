import React from 'react'

import QuoteListItem from './QuoteListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const QuoteList = ({ quotes }) => {
  return (
    <motion.section
      className='cards-quote'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {React.Children.toArray(
        quotes.map((item) => <QuoteListItem item={item} />),
      )}
    </motion.section>
  )
}

export default QuoteList
