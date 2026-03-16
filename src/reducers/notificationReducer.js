import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    showNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

let timeoutId

export const setNotification = (message, seconds) => {
  return dispatch => {
    dispatch(showNotification(message))

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      dispatch(clearNotification())
    }, seconds * 1000)
  }
}

export const { clearNotification } = notificationSlice.actions
const { showNotification } = notificationSlice.actions
export default notificationSlice.reducer