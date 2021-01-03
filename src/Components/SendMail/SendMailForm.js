import React from 'react';

import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/MailSlice';
import { db } from '../../Firebase/firebase';
import firebase from 'firebase';

export default function SendMailForm() {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);

    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className='sendMail'>
      <div className='sendMail_header'>
        <h3>New Mesage</h3>
        <CloseIcon
          className='sendMail_close'
          onClick={() => {
            dispatch(closeSendMessage());
          }}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          placeholder='to'
          name='to'
          ref={register({ required: true })}
        />
        {errors.to && <p className='sendMail_error'>To is required</p>}
        <input
          type='text'
          placeholder='subject'
          name='subject'
          className='sendMail_subject'
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className='sendMail_error'>Subject is required</p>
        )}

        <input
          type='text'
          placeholder='message...'
          className='sendMail_message'
          name='message'
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className='sendMail_error'>Message is required</p>
        )}

        <div className='sendMail_options'>
          <Button
            className='sendMail_send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
