import React, { useContext, useEffect } from 'react'
import Context from '../Context/Context'
import { getData } from '../Context/Actions'
import Loading from './loading'

import QuoteListItem from './QuoteListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const QuoteList = () => 
{
  const { quotes, dispatch, loading } = useContext(Context)

  useEffect(async () =>
  {
    dispatch({ type: 'SET_LOADING' })
    const getCharacters = async () =>
    {
      const data = await getData()
      dispatch({ type: 'GET_DATA', payload: data })
    }
    getCharacters()

  }, [dispatch])

  if (loading)
  {
    return <Loading />
  }

  return (
    <motion.section
      className="cards-quote"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {React.Children.toArray(quotes.map((item) => (
        <QuoteListItem item={item} />
      )))}
    </motion.section>
  )
}

export default QuoteList
