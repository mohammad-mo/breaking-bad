import React, { useContext, useEffect } from 'react'

// Components
import EpisodeListItem from './EpisodeListItem'
import Loading from './loading'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// Context
import BreakingBadContext from '../Context/Context'
import { getData } from '../Context/Actions'

const EpisodeList = () => {
  const { episodes, dispatch } = useContext(BreakingBadContext)

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
      className={episodes.length ? 'cards-episode' : ''}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {episodes.length ? (
        React.Children.toArray(
          episodes.map((item) => <EpisodeListItem item={item} />),
        )
      ) : (
        <Loading />
      )}
    </motion.section>
  )
}

export default EpisodeList
