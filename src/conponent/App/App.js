import React, { Component } from 'react';
import { Link, Route, Router } from 'react-router-dom'
import Home from '../Routes/Home';
import Contact from '../Routes/Contact';
import About from '../Routes/About';

class App extends Component {
    render() {
        return (
            
            <Router>
            <div>
            <h2>chao ban den voi lop hoc</h2>
                <nav className='navbar-expand-lg navbar-light bg-light'>
                    <ul className='navbar-nav mr-auto'>
                        <li><Link to={'/'} className='nav-link'>Home</Link></li>
                        <li><Link to={'/contact'} className='nav-link'>Contact</Link></li>
                        <li><Link to={'/about'} className='nav-link'>About</Link></li>
                    </ul>
                </nav>
                <hr/>
                <switch>
                   <Route exact path='/' Component={Home}></Route>
                   <Route exact path='/contact' Component={Contact}></Route>
                   <Route exact path='/about' Component={About}></Route>
                   
                </switch>
            </div>
            </Router>
        );
    }
}

export default App;