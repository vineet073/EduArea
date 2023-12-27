import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom'
import {  fetchFullCourseDetails } from '../services/AuthApi/CourseApi';
import { setCompletedLectures, setCourseEntireData, setCourseSectionData, setTotalNoOfLectures } from '../slices/viewCourseSlice';
import VideoDetailSideBar from '../components/Core/ViewCourse/VideoDetailSideBar';
import CourseReviewModal from '../components/Core/ViewCourse/CourseReviewModal';

const ViewCourse = () => {
    const {courseID}=useParams();
    const {token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();
    const[reviewModal,setReviewModal]=useState(false);

    async function viewCourseDetails(){
        const courseData=await fetchFullCourseDetails(courseID,token);
        console.log("course data:",courseData);
        dispatch(setCourseSectionData(courseData?.courseDetails?.courseContent));
        dispatch(setCourseEntireData(courseData?.courseDetails));
        dispatch(setCompletedLectures(courseData?.completedVideos));

        let lectures=0;
        courseData?.courseDetails?.courseContent?.forEach((sec)=>{
            lectures+=sec.subSection.length;
        })

        dispatch(setTotalNoOfLectures(lectures));
        console.log("completed lectures:",courseData?.completedVideos);
    }

    useEffect(()=>{
        viewCourseDetails();
    },[]);

  return (
    <div>
        <div className='flex min-h-[calc(100vh-3.5rem)] relative'>
            <VideoDetailSideBar setReviewModal={setReviewModal}/>
            <div className=' flex overflow-auto'>
                <div className='mx-6'>
                    <Outlet/>
                </div>
            </div>
        </div>

        {reviewModal && <CourseReviewModal setReviewModal={setReviewModal}/>}
    </div>
    )
}

export default ViewCourse

