import React from 'react';
import { BrowserRouter, Route, NavLink, Switch, Router } from 'react-router-dom';
import HomePage from './Home/Home';
import SearchPage from './Search/SearchPage';
import LoginPage from './Login/login';

import ToDoConatiner from './Containers/toDoContainer';

function Menu() {
    return <BrowserRouter> <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                {/* <div className="navbar-header">
                    <a className="navbar-brand" href="#">Test Project</a>
                </div> */}
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" style={{padding:'10px'}}><NavLink to="/login">Login</NavLink> </li>
                    <li  className="nav-item"  style={{padding:'10px'}}><NavLink to="/search">Search</NavLink></li>
                    <li  className="nav-item"  style={{padding:'10px'}}> <NavLink to="/home">Home</NavLink></li>
                    <li  className="nav-item"  style={{padding:'10px'}}> <NavLink to="/todo">Todo</NavLink></li>
                </ul>
            </div>
        </nav>

        {/* <Route path="/" component={HomePage}>
                <Route path='/home' component={HomePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/about" component={LoginPage} />
            </Route> */}
        <Switch>
            <Route exact path="/"  component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/todo" component={ToDoConatiner} />
            <Route path="/home" render={() => { return <HomePage len={5} msg2="home page" /> }} />
            {/* <Route exact   path="/" render={()=>{ return <LoginPage />}} />
            <Route path="/search" render={()=> {return <SearchPage />}} />
            <Route path="/home" render={()=> {return <HomePage />}} /> */}
        </Switch>


    </div>
    </BrowserRouter>

}

export default Menu;