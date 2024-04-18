import {getDatabase, ref, set} from "firebase/database";

export async function getAllCourses() {
  const response = await fetch(
    'https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/courses.json',
    {
      method: 'GET',
    },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}

export async function getMyCourses(id) {
  try{
  const response = await fetch(
    `https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/users/${id}/courses.json`,
    {
      method: 'GET',
    },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}
catch(err){
throw new Error( err.message)
}}
export async function getAllWorkouts() {
  const response = await fetch(
    'https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/workouts.json',
    {
      method: 'GET',
    },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()
  
  return newData
}

export async function getAllUsers() {
  const response = await fetch(
    'https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/users.json',
    {
      method: 'GET',
    },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}

export async function getLesson(id) {
  const response = await fetch(
      `https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/workouts/${id}.json`,
      {
        method: 'GET',
      },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}

export async function getLessonsUser(courseId) {
  const user = localStorage.userUid
  const response = await fetch(
      `https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/users/${user}/courses/${courseId}.json`,
      {
        method: 'GET',
      },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}

export function postCourse(lessonId, lessonName, progress, courseId) {
  const db = getDatabase()
  const user = localStorage.userUid

  set(ref(db, `users/${user}/courses/${courseId}/` + lessonId ), {
    name: lessonName,
    progress
  })

}

export function postCourseNoProgress(courseId) {
  const db = getDatabase()
  const user = localStorage.userUid

  set(ref(db, `users/${user}/courses/` + courseId), {
    id: courseId,
  })
}

export async function getNoLessonsUser(courseId) {
  const user = localStorage.userUid
  const response = await fetch(
      `https://sky-fitness-pro-3a520-default-rtdb.europe-west1.firebasedatabase.app/users/${user}/courses/${courseId}.json`,
      {
        method: 'GET',
      },
  )
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const newData = await response.json()

  return newData
}