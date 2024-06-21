import { Link, Outlet } from 'react-router-dom'

export function Layout() {
	return (
		<>
			<nav className='p-5 border shadow-sm min-w-full flex justify-center'>
				<ul className='flex items-center gap-8'>
					<Link to='/'>Home</Link>
					<Link to='/login'>Login</Link>
					<Link to='/register'>Register</Link>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}
