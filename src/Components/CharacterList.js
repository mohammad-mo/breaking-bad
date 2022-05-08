import React, { useEffect } from 'react'

// Components
import CharacterListItem from './CharacterListItem'
import Loading from '../Components/loading'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { fetchdataRequest } from '../redux/actions'

const CharacterList = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.data.characters)

  useEffect(() => {
    dispatch(fetchdataRequest())
    // eslint-disable-next-line
  }, [])

  return (
    <motion.section
      className={characters ? 'cards' : ''}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {characters ? (
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
