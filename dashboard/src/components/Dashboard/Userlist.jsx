import React,{useState,useEffect} from 'react'

const Userlist = () => {
	const [users, setUsers] = useState([]);
	const fetchUsers = async () => {
		const response = await fetch('http://localhost:1337/api/users');
		const data = await response.json();
		setUsers(data);
	};
	useEffect(() => {
		fetchUsers();
	}, []);
	console.log(users);
  return (
    <div
					className=" pt-4"
					id="about"
					role="tabpanel"
					aria-labelledby="about-tab"
				>
                    <div className="flex items-center justify-between mb-4">
                        <h1>Latest Customers</h1>
                        <div>views all</div>
                        </div>

					<ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
						{
							users.map((user) => (
								<li className="py-3 sm:py-4">
							<div className="flex items-center space-x-4">
								{/* <div className="flex-shrink-0">
									<img className="w-8 h-8 rounded-full" src="" alt="Neil image" />
								</div> */}
								<div className="flex-1 min-w-0">
									<p className="font-medium text-gray-900 truncate dark:text-white">
										{user.username}
									</p>
									<p className="text-sm text-gray-500 truncate dark:text-gray-400">
										{user.email}
									</p>
								</div>
								
							</div>
						</li>
							))


						}
						
						
						
					</ul>
				</div>
			
  )
}

export default Userlist