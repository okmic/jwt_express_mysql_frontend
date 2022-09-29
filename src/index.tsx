import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'
import { incrementByAmount } from './redux/auth.slice'
import { RootState, store } from './redux/store'



function App() {

  const count = useSelector((state: RootState) => state.auth.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <h5 onClick={() => dispatch(incrementByAmount(1))}>onClick</h5>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <App />
  </Provider>

)
