import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom';
import { fetchCourseDetails } from '../../../services/AuthApi/CourseApi';
import { setCourse, setEditCourse } from '../../../slices/courseSlice';
import RenderSteps from '../AddCourse/RenderSteps';


export default function EditCourse() {
  const dispatch = useDispatch()
  const { courseID } = useParams()
  const { course } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)

  useEffect(() => {;(async () => {
      setLoading(true)
      const result = await fetchCourseDetails(courseID)
      if (result) {
        dispatch(setEditCourse(true))
        dispatch(setCourse(result))
      }
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="grid flex-1 place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Course
      </h1>
      <div className="mx-auto max-w-[600px]">
        {course ? (
          <RenderSteps />
        ) : (
          <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
            Course not found
          </p>
        )}
      </div>
    </div>
  )
}