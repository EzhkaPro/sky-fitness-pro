import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courseList: [],
  currentCourse: {},
  workoutList: [],
  selectedWorkout: '',
  progress: [],
}

export const newCourseSlice = createSlice({
  name: 'newCourseSlice',
  initialState,
  reducers: {
    setCourseList: (state, action) => {
      state.courseList = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }))
    },
    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload
    },
    setWorkoutList: (state, action) => {
      state.workoutList = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key],
      }))
    },
    setSelectedWorkout: (state, action) => {
      state.selectedWorkout = action.payload
    },
    setLesson(state, { payload }) {
      state.lesson = payload
    },
  },
})

export const {
  setCourseList,
  setCurrentCourse,
  setWorkoutList,
  setSelectedWorkout,
  setLesson
} = newCourseSlice.actions

export default newCourseSlice?.reducer
