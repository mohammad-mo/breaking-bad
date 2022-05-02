import CharacterList from '../Components/CharacterList'
import useTitle from '../Hooks/useTitle'

const Characters = ({ characters }) => {
  useTitle('Characters')
  return <CharacterList characters={characters} />
}

export default Characters
