import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return <div className='font-Nunito text-lg font-medium'>{routeElements}</div>
}

export default App
