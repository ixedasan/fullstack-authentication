import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './pages/Layout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function App() {
	return (
		<div className='bg-gray-100'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Route>
			</Routes>
		</div>
	)
}
