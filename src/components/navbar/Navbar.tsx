import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Navbar.css';
import { CgProfile } from 'react-icons/cg'
import { SearchBar } from '../SearchBar';

export const Navbar = () => {
    
    const navigate = useNavigate();
    const [current, setCurrent] = useState("home");

    useEffect(() => {
        // console.log("Current Page:", current);
    }, []);

    return (
        <div className="navbar-container">
            <div className='navbar-item-container navbar-logo-item'>
              <div 
                className='navbar-logo'
                onClick={() => navigate('/')}
              >
                Z-Audio
              </div>
            </div>

            <div className='navbar-right'>
              <div className='navbar-item-container'>
                <div className='navbar-searchbar'>
                  <SearchBar />
                </div>
              </div>
              <div className='navbar-item-container'>
                <div 
                  className='navbar-products navbar-item'
                  onClick={() => navigate('/products')}
                >
                  Products
                </div>
              </div>
              <div className='navbar-item-container'>
                <div 
                  className='navbar-company navbar-item'
                  onClick={() => navigate('/about')}
                >
                  Company
                </div>
              </div>
              <div className='navbar-item-container'>
                <div 
                  className='navbar-profile navbar-item'
                  onClick={() => navigate('/profile')}
                >
                  <CgProfile />
                  Sign In
                </div>
              </div>
            </div>
        </div>
    )
}
