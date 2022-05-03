

import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ContextProvider } from './Context/Context';
import Homepage from './Pages/Homepage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import YoutubeVideo from './Pages/YoutubeVideo';
import InstaReels from './Pages/InstaReels';
import Shop from './Pages/Shop';
import Navbar from './components/Navbar';
import EachVideo from './Pages/EachVideo';
import Alert from './components/Alert';

import { ToastContainer, toast } from 'react-toastify';

function App() {
  
  return (  
    <BrowserRouter>
     <ContextProvider>
        <Navbar/>
        <hr/>
        <div className='App'>
      
      <ToastContainer />
    </div>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/Login" element={<LoginPage/>}/>
          <Route exact path="/Signup" element={<SignupPage/>}/>
          <Route exact path="/YoutubeVideos" element={<YoutubeVideo/>}/>
          <Route exact path="/InstaReels" element={<InstaReels/>}/>
          <Route exact path="/Shop" element={<Shop/>}/>
          <Route exact path="/EachVideo" element={<EachVideo/>}/>
          
        </Routes>
      </ContextProvider>
    </BrowserRouter> 
  );
}

export default App;
