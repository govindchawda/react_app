import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateType } from './components/StateType';
import StateDemo from './components/StateDemo';
import { ToDo } from './components/ToDo';
import Counter from './components/Counter';
import { About } from './components/About'; 
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';
import Crid from './components/Crid';
import { Todo2 } from './components/Todo2';
import Crud from './Crud';
import Crud2 from './components/Crud2';
import Crud3 from './components/Crud3';
import ApiFetchTable from './components/ApiFetchTable';
import ApiFetchCard from './components/ApiFetchCard';
import ApiAxiosTable from './components/ApiAxiosTable';
import ApiAxiosCard from './components/ApiAxiosCard';
import ApiAxiosCardDefault from './components/ApiAxiosCardDefault';
import Calcuter from './components/Calcuter';
import ApiAxiosCardDefault2 from './components/ApiAxiosCardDefault2';
import TestCrud from './components/TestCrud';
import LocalStorage from './components/LocalStorage';
import HomeLogo from './components/HomeLogo';
import Crudd from './components/Crudd';
import MokeApi from './components/MokeApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Home/> */}
    {/* <About/>
    <Portfolio/>   
    <Portfolio/>    */}
    {/* <ToDo /> */}
    {/* <StateDemo/> */}
      {/* <StateType/> */}
      {/* <Counter/> */}
      {/* <Crid/> */}
      {/* <Todo2/> */}
      {/* <Crud/> */}
      {/* <Crud2/> */}
      {/* <Crud3/> */}
      {/* <ApiFetchTable/> */}
      {/* <ApiFetchCard/> */}
      {/* <ApiAxiosTable/> */}
      {/* <ApiAxiosCard/> */}
      {/* <ApiAxiosCardDefault/> */}
      {/* <ApiAxiosCardDefault2/> */}
      {/* <LocalStorage/> */}
      {/* <TestCrud/> */}
      {/* <Calcuter/> */}
      {/* <HomeLogo/> */}
      {/* <Crudd/> */}
      {/* <MokeApi/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
