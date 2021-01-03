import { createSlice } from '@reduxjs/toolkit';

export const MailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
} = MailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;
export default MailSlice.reducer;
