import { useState, useEffect } from 'react'
import loginService from '../services/login'
import menuService from '../services/menus'

export default function Admin () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState('')

    const handleLogin = async (event) => {
		event.preventDefault()

		try {
			const user = await loginService.login({
				username,
				password,
			})

			window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))

			menuService.setToken(user.token)
			setUser(user)
			setUsername('')
			setPassword('')
		} catch (exception) {
			setNotification('verkeerde gebruikersnaam of wachtwoord')
			setTimeout(() => {
				setNotification('')
			}, 5000)
		}
	}

    const loginForm = () => (
        <form className="space-y-2" onSubmit={handleLogin}>
            <span className="mr-2">username</span>
            <input 
                type="string" 
                id="username" 
                name="username" 
                value={username}
                onChange={({ target }) => setUsername(target.value)}
            />
            <br/>
            <span className="mr-2">wachtwoord</span>
            <input 
                type="password" 
                id="password"
                name="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            <br/>
            <button className=" bg-slate-800">Log in</button>
            <div className='text-red-400'>{notification}</div>
        </form>
    )

    return <main>
        <div className="p-20">
            {user === null ? loginForm() : <div></div>}
        </div>
    </main>
}