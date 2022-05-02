import DeathList from '../Components/DeathList'
import useTitle from '../Hooks/useTitle'

const Deaths = ({ deaths }) => {
  useTitle('Deaths')
  return <DeathList deaths={deaths} />
}

export default Deaths
