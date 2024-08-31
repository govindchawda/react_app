import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLogo from './components/HomeLogo';
import Crudd from './components/Crudd';
import BannerTest from './components/BannerTest';
import MokeNav from './components/MokeNav';
import MokeCrud from './components/MokeCrud';
import MokeCrudShow from './components/MokeCrudShow';
import MokeUpdate from './components/MokeUpdate';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <HomeLogo/> */}
      <MokeNav/>
        <Routes>
        <Route path='/BNr' element={<BannerTest/>} ></Route>
        <Route path='/AddMokeUser' element={<MokeCrud/>} ></Route>
        <Route path='/ShowUser' element={<MokeCrudShow/>} ></Route>
        <Route path='/update' element={<MokeUpdate/>} ></Route>
          {/* <Route path='/Banner' element={<BannerTest/>} ></Route>
          <Route path='/Add' element={<Crudd/>} ></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
