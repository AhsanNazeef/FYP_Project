import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { InputChange, FormSubmit } from '../../utils/TypeScript'
import { login } from '../../redux/actions/authAction'


const LoginPass = () => {
  const initialState = { email: '', password: '' }
  const [userLogin, setUserLogin] = useState(initialState)
  const { email, password } = userLogin

  const [typePass, setTypePass] = useState(false)

  const dispatch = useDispatch()

  const handleChangeInput = (e: InputChange) => {
    const {value, name} = e.target
    setUserLogin({...userLogin, [name]:value})
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(login(userLogin))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="email" className="form-label">
          Email 
        </label>

        <input type="text" className="form-control" id="account"
        name="account" value={email} onChange={handleChangeInput} />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">Password</label>

        <div className="pass">
          <input type={typePass ? "text" : "password"} 
          className="form-control" 
          id="password"
          name="password" value={password} 
          onChange={handleChangeInput} 
          />

          <small onClick={() => setTypePass(!typePass)}>
            {typePass ? 'Hide' : 'Show'}
          </small>
        </div>
      </div>

      <button type="submit" className="btn btn-dark w-100 mt-1"
      disabled={(email && password) ? false : true}>
        Login
      </button>
    </form>
  )
}

export default LoginPass
