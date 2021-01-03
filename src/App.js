import React, { useEffect } from 'react';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Mail from './Components/Mail/Mail';
import EmailList from './Components/Mail/EmailList';
import SendMail from './Components/SendMail/SendMailForm';
import './App.css';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/MailSlice';
import { login, selectUser } from './features/UserSlice';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase/firebase';
import Login from './Components/Auth/Login';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displaName: user.displaName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  });

  return (
    <>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className='App'>
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Switch>
                <Route exact path='/mail'>
                  <Mail />
                </Route>
                <Route exact path='/'>
                  <EmailList />
                </Route>
              </Switch>
            </div>
            {sendMessageIsOpen && <SendMail />}
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
