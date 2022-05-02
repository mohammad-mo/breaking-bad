import { Link } from 'react-router-dom'
import useTitle from '../Hooks/useTitle'

const NotFound = () => {
  useTitle('Not Found')

  return (
    <div className='notfound-container'>
      <h2 className='header'>Oops!</h2>
      <p>Page not found!</p>
      <Link to={{ pathname: '/' }}>
        <button>Back To Home</button>
      </Link>
    </div>
  )
}

export default NotFound
