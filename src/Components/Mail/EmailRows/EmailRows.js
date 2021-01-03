import React from 'react';
import './EmailRows.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { Checkbox, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../../features/MailSlice';

function EmailRows({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push('/mail');
  };

  return (
    <div onClick={openMail} className='emailrow'>
      <div className='emailrow_options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className='emailrow_title'>{title}</h3>

      <div className='emailrow_message'>
        <h4>
          {subject}
          {''} <span className='emailrow_description'>- {description}</span>
        </h4>
      </div>

      <p className='emailrow_time'>{time}</p>
    </div>
  );
}

export default EmailRows;
