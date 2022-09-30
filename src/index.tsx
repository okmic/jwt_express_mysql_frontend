import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import LoginForm from './components/LoginForm'
import './index.css'
import { IUserType } from './models/Auth.responce'
import { checkAuth, fetchLogout } from './redux/auth.fetch'
import { RootState, store } from './redux/store'
import DataService from './service/Data.service'



function App() {

  const state = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const [users, setUsers] = useState<Array<IUserType>>([])

  const getUsers = async () => {
    try {
      const responce = await DataService.getUsers()
      setUsers(responce.data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth(dispatch)
    }

  }, [])

  if (state.isLoading) return <div className="App dfc"><h1>Loading...</h1></div>

  if (!state.isAith) return <div className="App dfc"><LoginForm /></div>

  return (
    <div className="App dfc">
      <div className="dfc">
        <h1>{state.isAith ? `Пользователь авторизован ${state.user.email}` : "Пользователь не авторизован"}</h1>
        <button onClick={() => fetchLogout(dispatch)}>Logout</button>
      </div>
      <div>
          <div className="dfc"><button onClick={getUsers}>Get all users</button></div>
          <div className="dfc">
            {users.map(item => <div className="dfc" key={item.id}>
                <h5>{item.id}</h5>
                <h5>{item.email}</h5>
            </div>)}
          </div>
      </div>
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
