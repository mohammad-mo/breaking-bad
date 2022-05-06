// Components
import CharacterList from '../Components/CharacterList'

import useTitle from '../Hooks/useTitle'

const Characters = () => {
  useTitle('Characters')

  return <CharacterList />
}

export default Characters
