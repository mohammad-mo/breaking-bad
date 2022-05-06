// Components
import QuoteList from '../Components/QuoteList'

import useTitle from '../Hooks/useTitle'

const Quotes = () => {
  useTitle('Quotes')

  return <QuoteList />
}

export default Quotes
