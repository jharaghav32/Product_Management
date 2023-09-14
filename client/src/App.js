import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Home from './components/Home/Home'
import Categories from './components/admin/categories/Categories'
import Category from './components/Category/Category'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Header from './components/Header/Header'
import NewsLetter from './components/Footer/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import Appcontext from './util/context'
import Login from './components/Login'
import Cart from './components/Cart/Cart'
import Success from './components/Success'
import Cancel from './components/Cancel'
import Register from './components/Register'
import Admin from './components/admin/Admin'
import Sizes from './components/admin/sizes/Sizes'
import TestProduct from './components/admin/TestProduct'
import Dashboard from './components/admin/Dashboard'

function App() {
    const[jwt,setJwt] = useState(null);
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            setJwt(token)
        }else{
            setJwt(null)
        }
    },[])

    return (
        <BrowserRouter>
        <Appcontext>

        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/header" element={<Header/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
                {/* <Route path="/login" element={<Login/>}/> */}
                <Route path="/register" element={<Register/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path ="/admin/size" element={<Sizes/>}/>
                <Route path="/test" element={<TestProduct/>}/>
                <Route path="/test/dashboard" element={<Dashboard/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/cancel" element = {<Cancel/>}/>
            </Routes>
            <Footer/>
        </Appcontext>
        </BrowserRouter>

    )
}

export default App;
