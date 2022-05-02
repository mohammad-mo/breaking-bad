import QuoteList from '../Components/QuoteList'
import useTitle from '../Hooks/useTitle'

const Quotes = ({ quotes }) => {
  useTitle('Quotes')
  return <QuoteList quotes={quotes} />
}

export default Quotes
