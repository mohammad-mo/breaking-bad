import EpisodeList from '../Components/EpisodeList'
import useTitle from '../Hooks/useTitle'

const Episodes = ({ episodes }) => {
  useTitle('Episodes')
  return <EpisodeList episodes={episodes} />
}

export default Episodes
