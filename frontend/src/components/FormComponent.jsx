export const FormComponent = ({
	title,
	formFields,
	formData,
	isLoading,
	success,
	error,
	handleChange,
	handleSubmit,
	buttonText,
}) => (
	<div className='min-h-screen flex items-center justify-center'>
		<div className='bg-white p-6 rounded shadow-md w-full max-w-md'>
			<h2 className='text-2xl font-bold mb-6 text-center'>{title}</h2>
			{error && <div className='text-red-500 text-sm mb-4'>{error}</div>}
			{success && <div className='text-green-500 text-sm mb-4'>{success}</div>}
			<form onSubmit={handleSubmit}>
				{formFields.map(({ label, type, name, required }) => (
					<div className='mb-4' key={name}>
						<label className='block text-gray-700'>{label}</label>
						<input
							type={type}
							name={name}
							value={formData[name]}
							onChange={handleChange}
							className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
							required={required}
						/>
					</div>
				))}
				<button
					type='submit'
					disabled={isLoading}
					className='w-full bg-slate-600 text-white py-2 my-2 rounded-md hover:bg-slate-700 transition duration-300'
				>
					{isLoading ? 'Processing...' : buttonText}
				</button>
			</form>
		</div>
	</div>
)
