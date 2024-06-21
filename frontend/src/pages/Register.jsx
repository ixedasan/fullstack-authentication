import { useNavigate } from 'react-router-dom'
import { FormComponent } from '../components/FormComponent'
import { useFormHandler } from '../hooks/useFormHandler'

export function Register() {
	const navigate = useNavigate()
	const { formData, isLoading, success, error, handleChange, handleSubmit } =
		useFormHandler(
			{
				username: '',
				email: '',
				password1: '',
				password2: '',
			},
			'http://127.0.0.1:8000/api/register/'
		)

	const onSubmit = async e => {
		try {
			await handleSubmit(e)
			navigate('/login')
		} catch {
			// Do nothing
		}
	}

	return (
		<FormComponent
			title='Register'
			formFields={[
				{ label: 'Username', type: 'text', name: 'username', required: true },
				{ label: 'Email', type: 'email', name: 'email', required: true },
				{
					label: 'Password',
					type: 'password',
					name: 'password1',
					required: true,
				},
				{
					label: 'Confirm Password',
					type: 'password',
					name: 'password2',
					required: true,
				},
			]}
			formData={formData}
			isLoading={isLoading}
			success={success}
			error={error}
			handleChange={handleChange}
			handleSubmit={onSubmit}
			buttonText='Register'
		/>
	)
}
