import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HomePage from './Home/Home';
// import SearchPage from './Search/SearchPage';
// import LoginPage from './Login/login';
import  Menu from './menu';


function App() {
  return (
    <div className="App">

     <Menu />
     {/* welcome */}
     {/* <HomePage msg="welcome to 1st header component" msg2="msg 1" len={5}></HomePage>
     <HomePage msg="welcome to 2nd header component" msg2="msg 2" len={1}></HomePage>
     <HomePage msg="welcome to 3rd header component" msg2="msg 3" len={6}></HomePage>
     <SearchPage initialvalue={1} name="abc"></SearchPage>
     <LoginPage></LoginPage> */}
   
    </div>
  );
}

export default App;
