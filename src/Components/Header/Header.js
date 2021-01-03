import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/UserSlice';
import { auth } from '../../Firebase/firebase';

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className='header'>
      <div className='header_left'>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src='data:image/png;base64,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'
          alt='gmail'
        />
      </div>
      <div className='header_middle'>
        <SearchIcon />
        <input type='text' placeholder='Search email' />
        <ArrowDropDownIcon className='header_inputCaret' />
      </div>
      <div className='header_right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signout} src={user?.photoUrl} />
      </div>
    </div>
  );
}
