import { Checkbox, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './EmailList.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section/Section';
import EmailRows from './EmailRows/EmailRows';
import { db } from '../../Firebase/firebase';

export default function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className='emailList'>
      <div className='emailList_settings'>
        <div className='emailList_settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList_settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className='emailList_section'>
        <Section Icon={InboxIcon} title='Primary' color='#D93025' selected />
        <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='#188038' />
      </div>

      <div className='emailList_list'>
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRows
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />

        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />

        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
        <EmailRows
          title='Test'
          subjet='test Email'
          description='Test Successful'
          time='10 PM'
        />
      </div>
    </div>
  );
}
