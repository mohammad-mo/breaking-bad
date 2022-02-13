import React, { useContext, useEffect } from 'react'
import Context from '../Context/Context'
import { getData } from '../Context/Actions'
import Loading from './loading'

import DeathListItem from './DeathListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const DeathList = () => 
{
    const { deaths, dispatch, loading } = useContext(Context)

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
        className="cards-death"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {React.Children.toArray(deaths.map((item) => (
          <DeathListItem item={item} />
        )))}
      </motion.section>
    )
}
 
export default DeathList