import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Bikes from './pages/Bikes';
import Home from './pages/Home';
import Video from './pages/Video';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}> 
        <Route index element={<Home/>}></Route>
        <Route path='/video' element={<Video/>}> </Route>
        <Route path='/bikes' element={<Bikes/>}> </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
