import { Route, Routes, Navigate, useLocation } from 'react-router-dom'

// Components
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import ErrorBoundary from './Components/ErrorBoundary'
import Characters from './Pages/Characters'
import Quotes from './Pages/Quotes'
import Episodes from './Pages/Episodes'
import Deaths from './Pages/Deaths'
import NotFound from './Pages/NotFound'

// Style
import './Styles/app.scss'

// Animation
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()

  return (
    <>
      <ErrorBoundary>
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path='/characters' element={<Characters />} />
            <Route path='/' element={<Navigate to='/characters' />} />
            <Route path='/quotes' element={<Quotes />} />
            <Route path='/episodes' element={<Episodes />} />
            <Route path='/deaths' element={<Deaths />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </ErrorBoundary>
    </>
  )
}

export default App
