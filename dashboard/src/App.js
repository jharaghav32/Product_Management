import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
// import Strapi from './components/Strapi'
import {
BrowserRouter,
Routes,
Route
} from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TestProduct from './components/Product/Product';
import Categories from './components/Categories/Categories';
import Dashboard from './components/Dashboard/Dashboard';
import Userlist from './components/Dashboard/Userlist';
import Test from './components/Test/Test';
function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
    
    <div
			id="main-content"
			class="relative w-full h-full  bg-gray-50  dark:bg-gray-900 min-h-screen"
      >
      <Routes>
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/product' element={<TestProduct/>} />
    <Route path='/category' element={<Categories/>} />
    <Route path='/' element={<Dashboard/>} />
    <Route path='/user' element={<Userlist/>} />
    <Route path='/test' element ={<Test/>} />
    {/* <Route path='/form' element= {<Strapi/>} /> */}
    </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
