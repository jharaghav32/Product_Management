import React,{useState} from 'react'
import { logIn } from '../Feature/Fetch'
const SignIn = () => {
	const [formdata,setformdata]=useState({
		username:'',
		password:''
	})
	const {username,password}=formdata;
	const handleChange=(e)=>{
		setformdata({...formdata,[e.target.name]:e.target.value})
	}
	const handleSubmit=async(e)=>{
		e.preventDefault();
		console.log(formdata)

		const data={
			identifier:formdata.username,
			password:formdata.password
		}
		const response = await logIn(data);
		console.log(response)
	}
  return (
    <div className="min-h-screen align-middle flex pb-[12vh]">
        <div
	className="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900"
>
	<a
		href="#"
		className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
	>
		<img src="" alt="FlowBite Logo" className="mr-4 h-11" />
		<span>Flowbite</span>
	</a>
	{/* <!-- Card --> */}
	<div
		className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800"
	>
		<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
			Sign in to platform
		</h2>
		<form className="mt-8 space-y-6" action="#">
			<div>
				<label
					for="username"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Your username</label
				>
				<input
					type="text"
					name="username"
					id="username"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Enter your username"
					required
					onChange={handleChange}
				/>
			</div>
			<div>
				<label
					for="password"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Your password</label
				>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="••••••••"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					required
					onChange={handleChange}
				/>
			</div>
		
			<button
				type="submit"
				className="bg-blue-600 w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>Login to your account</button
			>
			<div className="text-sm font-medium text-gray-500 dark:text-gray-400">
				Not registered? <a href='/signup'
					className="text-primary-700 hover:underline dark:text-primary-500"
					>Create account</a>
				
			</div>
		</form>
	</div>
</div>

    </div>
  )
}

export default SignIn