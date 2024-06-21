import axios from 'axios'
import { useEffect, useState } from 'react'

export function Home() {
	const [username, setUsername] = useState('')
	const [isLogIn, setIsLogIn] = useState(false)

	useEffect(() => {
		const checkLogin = async () => {
			try {
				const token = localStorage.getItem('accessToken')
				if (token) {
					const config = {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
					const response = await axios.get(
						'http://127.0.0.1:8000/api/user/',
						config
					)
					setIsLogIn(true)
					setUsername(response.data.username)
				} else {
					setIsLogIn(false)
					setUsername('')
				}
			} catch (error) {
				setIsLogIn(false)
				setUsername('')
			}
		}
		checkLogin()
	}, [])

	const logout = async () => {
		try {
			const accessToken = localStorage.getItem('accessToken')
			const refreshToken = localStorage.getItem('refreshToken')

			if (accessToken && refreshToken) {
				const config = {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
				await axios.post(
					'http://127.0.0.1:8000/api/logout/',
					{ refresh: refreshToken },
					config
				)
				localStorage.removeItem('accessToken')
				localStorage.removeItem('refreshToken')
				setIsLogIn(false)
				setUsername('')
			}
		} catch (error) {
			console.error('Failed to logout', error.response?.data || error.message)
		}
	}
	return (
		<div className='h-screen w-screen flex flex-col justify-center items-center'>
			{isLogIn ? <h2>Hi, {username}.</h2> : <h2>Please Login</h2>}
			{isLogIn && (
				<button
					onClick={logout}
					className='bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded'
				>
					Logout
				</button>
			)}
		</div>
	)
}
