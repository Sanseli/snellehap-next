import { useState, useEffect } from 'react'

export default function Admin () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

    const loginForm = () => (
        <form className="space-y-2">
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
        </form>
    )

    return <main>
        <div className="p-20">
            {loginForm()}
        </div>
    </main>
}