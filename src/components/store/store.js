import { configureStore } from '@reduxjs/toolkit'
import useReducer from './slices/userSlice'
import newCourseReducer from './slices/coursesWorkoutSlice'
import { databaseURL } from '../http/http'
import { localStorageMiddleware } from './slices/userSlice'
import * as api from '../http/config'

export const store = configureStore({
  reducer: {
    user: useReducer,
    newCourse: newCourseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          databaseURL,
          api,
        },
      },
    }).concat(localStorageMiddleware),
})
