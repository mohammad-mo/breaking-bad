// Components
import EpisodeList from '../Components/EpisodeList'

import useTitle from '../Hooks/useTitle'

const Episodes = () => {
  useTitle('Episodes')

  return <EpisodeList />
}

export default Episodes
