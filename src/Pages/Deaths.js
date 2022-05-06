// Components
import DeathList from '../Components/DeathList'

import useTitle from '../Hooks/useTitle'

const Deaths = () => {
  useTitle('Deaths')

  return <DeathList />
}

export default Deaths
