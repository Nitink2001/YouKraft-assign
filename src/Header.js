import React from 'react';
import './Header.css';
import {  TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import Login from './Login';
import { Link } from "react-router-dom";

function Header() {
  return (
        <div className="header">
            <div className="header__search">
                <TextField className="header__searchInput" 
                type="text"
                id="standard-size-small"
                variant="outlined"
                size="small"
                placeholder="Search for products"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
            </div>
            <Link to="/login">
              <div className="header__nav">
                <div className="header__signin">
                  <p>Sign In</p>
                </div>
              </div>
            </Link>
        </div>
  )
}

export default Header;