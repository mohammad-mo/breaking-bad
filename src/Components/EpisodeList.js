import React, { useEffect } from 'react'

// Components
import EpisodeListItem from './EpisodeListItem'
import Loading from './loading'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchdataRequest } from '../redux/actions'

const EpisodeList = () => {
  const dispatch = useDispatch()
  const episodes = useSelector((state) => state.data.episodes)

  useEffect(() => {
    dispatch(fetchdataRequest())
    // eslint-disable-next-line
  }, [])

  return (
    <motion.section
      className={episodes ? 'cards-episode' : ''}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {episodes ? (
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
