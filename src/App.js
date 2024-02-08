import React, { Suspense } from 'react'
import AllRoutes from "../src/AllRoutes/AllRoutes"
import Loader from './Component/Loader/Loader'

const App = () => {
  return (
    <>
      <Suspense fallback={<><Loader /></>}>
        <AllRoutes />
      </Suspense>
    </>
  )
}

export default App