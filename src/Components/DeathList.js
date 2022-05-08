import React, { useEffect } from 'react'

// Components
import DeathListItem from './DeathListItem'
import Loading from './loading'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchdataRequest } from '../redux/actions'

const DeathList = () => {
  const dispatch = useDispatch()
  const deaths = useSelector((state) => state.data.deaths)

  useEffect(() => {
    dispatch(fetchdataRequest())
    // eslint-disable-next-line
  }, [])

  return (
    <motion.section
      className={deaths ? 'cards-death' : ''}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {deaths ? (
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
