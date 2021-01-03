import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelIcon from '@material-ui/icons/Label';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/MailSlice';

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar_compose'
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title='Inbox'
        number={30}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title='Starred' number={5} />
      <SidebarOption Icon={AccessTimeIcon} title='Starred' number={10} />
      <SidebarOption Icon={LabelImportantIcon} title='Snoozed' number={2} />
      <SidebarOption Icon={NearMeIcon} title='Sent' number={3} />
      <SidebarOption Icon={NoteIcon} title='Drafts' number={2} />
      <SidebarOption Icon={LabelIcon} title='Unwanted' number={1} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={3} />

      <div className='sidebar_footer'>
        <div className='sidebar_footerIcons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
