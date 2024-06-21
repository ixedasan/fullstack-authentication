import axios from 'axios'
import { useState } from 'react'

export const useFormHandler = (initialFormData, url) => {
	const [formData, setFormData] = useState(initialFormData)
	const [isLoading, setIsLoading] = useState(false)
	const [success, setSuccess] = useState(null)
	const [error, setError] = useState(null)

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)
		setError(null)

		try {
			const response = await axios.post(url, formData)
			setSuccess('Operation successful')
			return response.data
		} catch (error) {
			let errorMessage = 'An unexpected error occurred. Please try again.'
			if (error.response && error.response.data) {
				const errorData = error.response.data
				const errors = []
				Object.keys(errorData).forEach(key => {
					const errorMessages = errorData[key]
					if (Array.isArray(errorMessages)) {
						errors.push(...errorMessages)
					} else {
						errors.push(errorMessages)
					}
				})
				errorMessage = errors.join(' ')
			}
			setError(errorMessage)
			throw error
		} finally {
			setIsLoading(false)
			setTimeout(() => setSuccess(null), 3000)
		}
	}

	return {
		formData,
		isLoading,
		success,
		error,
		handleChange,
		handleSubmit,
	}
}
