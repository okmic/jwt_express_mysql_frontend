import { FC } from "react"
import { useDispatch } from "react-redux"
import { useInput } from "../hooks/useInput"
import {fetchLogin, fetchReginstration } from "../redux/auth.fetch"

const LoginForm: FC = () => {
    const email = useInput("")
    const password = useInput("")
    const dispath = useDispatch()

    return (
        <div>
            <input type="email" {...email} placeholder="email" />
            <input type="password" {...password} placeholder="password" />
            <button onClick={() =>  fetchLogin(
                email.value,
                password.value,
                dispath
                )}>Login</button>
            <button onClick={() => fetchReginstration(
                email.value,
                password.value,
                dispath
                )}>Registration</button>
        </div>
    )
}

export default LoginForm