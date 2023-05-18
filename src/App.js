import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Bikes from './pages/Bikes';
import Home from './pages/Home';
import Video from './pages/Video';
import Login from './pages/Login';
import BikeDetail from './pages/BikeDetail';
import WishList from './pages/WishList';
import { useState } from 'react';
import Contact from './pages/Contact';
import MyBikes from './pages/MyBikes';
import About from './pages/About';

// var loadScript = function(src) {
//   var tag = document.createElement('script');
//   tag.async = false;
//   tag.src = src;
//   document.getElementsByTagName('body').appendChild(tag);
// }
// loadScript("../src/assets/js/custom.js")
// loadScript('//cdnjs.com/some/other/library.js')
function App() {
  
  const [isLoggedIn,setIsLoggedIn]= useState(false);
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6444c02b4247f20fefed38c6/1gum8tb9o';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
  




 

  return (
    
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}> 
        <Route index element={<Home/>}></Route>
        <Route path='/video' element={<Video/>}> </Route>
        <Route path='/bikes' element={<Bikes/>}>  </Route>
        <Route path='/contact' element={<Contact/>}>  </Route>
        <Route path='/about' element={<About/>}>  </Route>
        <Route path='/bikedetail' element={<BikeDetail/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/wishlist' element={<WishList/>}> </Route>
        <Route path='/mybikes' element={<MyBikes/>}> </Route>
       <Route path='/bikedetails/:id' element={<BikeDetail/>}></Route>
      
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
