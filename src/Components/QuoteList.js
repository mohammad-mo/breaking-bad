import React, { useContext, useEffect } from 'react'

// Components
import QuoteListItem from './QuoteListItem'
import Loading from './loading'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// Context
import BreakingBadContext from '../Context/Context'
import { getData } from '../Context/Actions'

const QuoteList = () => {
  const { quotes, dispatch } = useContext(BreakingBadContext)

  useEffect(() => {
    let isComponentMounted = true
    dispatch({ type: 'SET_LOADING' })
    const getDataFromApi = async () => {
      const data = await getData()
      if (isComponentMounted) {
        dispatch({ type: 'GET_DATA', payload: data })
      }
    }
    getDataFromApi()

    return () => {
      isComponentMounted = false
    }
  }, [dispatch])

  return (
    <motion.section
      className={quotes.length ? 'cards-quote' : ''}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {quotes.length ? (
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
