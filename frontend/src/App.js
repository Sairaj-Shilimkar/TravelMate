import logo from './logo.svg';
import React,{createContext ,useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route, unstable_useViewTransitionState } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import Profile from './components/Profile';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Makeatrip from './components/Makeatrip';
import Modal from './components/modal';
import { Logincontext } from './context/logincontext';
import { useContext } from 'react';
import UserProfile from './components/UserProfile';
import MyFolliwngPost from './components/MyFollowingPost';
import Travelmate from './components/mainhome';
import Start from './home/Start'






function App() {
  const [userLogin, setUserLogin]=useState(false);

  return (

    <BrowserRouter>
    <div className="App">

    <Logincontext.Provider value={{setUserLogin}} >

    <Navbar login={userLogin} />
      <Routes>
      {/*<Route path='/travelmate' element={<Start/>}></Route>*/}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
        <Route path='/makeatrip' element={<Makeatrip/>}></Route>
        <Route path='/profile/:userid' element={<UserProfile/>}></Route>
        <Route path='/followingpost' element={<MyFolliwngPost/>}></Route>
      </Routes>
      <ToastContainer  theme='colored'/>
    </Logincontext.Provider>

    </div>
    </BrowserRouter>
  );
}

export default App;
