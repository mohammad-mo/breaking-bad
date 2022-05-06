import React, { useContext, useEffect } from 'react'

// Components
import DeathListItem from './DeathListItem'
import Loading from './loading'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// Context
import BreakingBadContext from '../Context/Context'
import { getData } from '../Context/Actions'

const DeathList = () => {
  const { deaths, dispatch } = useContext(BreakingBadContext)

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
      className={deaths.length ? 'cards-death' : ''}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {deaths.length ? (
        React.Children.toArray(
          deaths.map((item) => <DeathListItem item={item} />),
        )
      ) : (
        <Loading />
      )}
    </motion.section>
  )
}

export default DeathList
