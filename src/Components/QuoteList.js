import React, { useEffect } from 'react'

// Components
import QuoteListItem from './QuoteListItem'
import Loading from './loading'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchdataRequest } from '../redux/actions'

const QuoteList = () => {
  const dispatch = useDispatch()
  const quotes = useSelector((state) => state.data.quotes)

  useEffect(() => {
    dispatch(fetchdataRequest())
    // eslint-disable-next-line
  }, [])

  return (
    <motion.section
      className={quotes ? 'cards-quote' : ''}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {quotes ? (
        React.Children.toArray(
          quotes.map((item) => <QuoteListItem item={item} />),
        )
      ) : (
        <Loading />
      )}
    </motion.section>
  )
}

export default QuoteList
