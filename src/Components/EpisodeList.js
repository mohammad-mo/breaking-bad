import React, { useContext, useEffect } from 'react'
import Context from '../Context/Context'
import { getData } from '../Context/Actions'
import Loading from './loading'

import EpisodeListItem from './EpisodeListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const EpisodeList = () => 
{
    const { episodes, dispatch, loading } = useContext(Context)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () =>
    {
      dispatch({ type: 'SET_LOADING' })
      const getCharacters = async () =>
      {
        const data = await getData()
        dispatch({ type: 'GET_DATA', payload: data })
      }
      await getCharacters()

    }, [dispatch])

    if (loading)
    {
      return <Loading />
    }

    return (
      <motion.section
        className="cards-episode"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {React.Children.toArray(episodes.map((item) => (
          <EpisodeListItem item={item} />
        )))}
      </motion.section>
    )
}
 
export default EpisodeList