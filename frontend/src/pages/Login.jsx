import { useNavigate } from 'react-router-dom'
import { FormComponent } from '../components/FormComponent'
import { useFormHandler } from '../hooks/useFormHandler'

export function Login() {
	const navigate = useNavigate()
	const { formData, isLoading, success, error, handleChange, handleSubmit } =
		useFormHandler(
			{
				email: '',
				password: '',
			},
			'http://127.0.0.1:8000/api/login/'
		)

	const onSubmit = async e => {
		try {
			const data = await handleSubmit(e)
			localStorage.setItem('accessToken', data.tokens.access)
			localStorage.setItem('refreshToken', data.tokens.refresh)
			navigate('/')
		} catch {
			// Do nothing
		}
	}

	return (
		<FormComponent
			title='Login'
			formFields={[
				{ label: 'Email', type: 'email', name: 'email', required: true },
				{
					label: 'Password',
					type: 'password',
					name: 'password',
					required: true,
				},
			]}
			formData={formData}
			isLoading={isLoading}
			success={success}
			error={error}
			handleChange={handleChange}
			handleSubmit={onSubmit}
			buttonText='Login'
		/>
	)
}
