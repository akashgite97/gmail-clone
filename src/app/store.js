import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/MailSlice';
import UserReducer from '../features/UserSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: UserReducer,
  },
});
