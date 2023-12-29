import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElements = useRouteElements()
  return (
    <div className='font-Nunito text-lg font-medium'>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
