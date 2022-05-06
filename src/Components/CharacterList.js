import React, { useContext, useEffect } from 'react'

// Components
import CharacterListItem from './CharacterListItem'
import Loading from '../Components/loading'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// Context
import BreakingBadContext from '../Context/Context'
import { getData } from '../Context/Actions'

const CharacterList = () => {
  const { characters, dispatch } = useContext(BreakingBadContext)

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
      className={characters.length ? 'cards' : ''}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {characters.length ? (
        React.Children.toArray(
          characters.map((item) => <CharacterListItem item={item} />),
        )
      ) : (
        <Loading />
      )}
    </motion.section>
  )
}

export default CharacterList
