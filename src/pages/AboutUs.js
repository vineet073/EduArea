import React from 'react'
import { HighlighText } from '../components/Common/HighlighText';
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp";
import FoundingStory from "../assets/Images/FoundingStory.png";
import { CTAButton } from '../components/Common/CTAButton';
import ContactUsSection from '../components/Core/Contact/ContactUsSection';
import Footer from '../components/Common/Footer'

const AboutUs = () => {
  return (
    <div className='text-richblack-200 w-[100vw]'>
      <div className='w-10/12 flex flex-col items-center mx-auto'>

        <div className='bg-gradient-to-b from-richblack-700 to-richblack-900 w-[100vw]'>
          <div className='flex flex-col items-center'>
                <p className='mb-10 mt-8'>About us</p>
                <h1 className='text-3xl text-center font-semibold text-white'>Driving Innovation in Online Education for a <br/><HighlighText text={"Brighter Future"}/></h1>
                <p className='w-[60vw] text-center text-sm'>Studynotion is at the forefront of driving innovation in online education. 
                We're passionate about creating a brighter future by offering cutting-edge courses,
                leveraging emerging technologies, and nurturing a vibrant learning community.</p>
          </div>

          <div className='flex gap-10 mt-8 flex-row justify-center'>
              <img src={BannerImage1} />
              <img src={BannerImage2}/>
              <img src={BannerImage3}/>
          </div>
        </div>        

        <div className='text-3xl text-center mt-16 mb-40'>
            <p><span className='text-3xl'>"</span>We are passionate about revolutionizing the way we learn. Our <br/>innovative platform <HighlighText text={"combines technology, "}/>  
            <span className='bg-gradient-to-br from-[#FF512F] to-[#F09819] bg-clip-text font-semibold  text-transparent'>expertise,</span> and community to<br/> create an 
            <span className='bg-gradient-to-br from-[#E65C00] to-[#F9D423] bg-clip-text font-semibold  text-transparent'> unparalleled educational experience.</span><span className='text-3xl'>"</span></p>
        </div>

        <div className='flex justify-between w-[80vw] mb-36'>
          <div className='w-[35vw]'>
            <h1 className='text-3xl mb-6 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text font-semibold  text-transparent'>Our Founding Story</h1>
            <p className='text-justify text-sm'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
            <br/><br/>
            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
            </p>
          </div>
          <div className='mr-14'>
            <img src={FoundingStory} className='w-[35vw]'></img>
          </div>
        </div>

        <div className='w-[80vw] flex gap-32'>
          <div>
            <h1 className='text-3xl bg-gradient-to-br from-[#E65C00] to-[#F9D423] bg-clip-text font-semibold  text-transparent'>Our Vision</h1>
            <p className='text-sm text-justify'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
          </div>
          <div>
            <h1 className='text-3xl'><HighlighText text={'Our Mission'}/></h1>            
            <p className='text-sm text-justify'>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
          </div>
        </div>

        <div className='flex justify-around flex-row  bg-gradient-to-b from-richblack-800 to-richblack-700 w-[100vw] h-40 items-center mb-14 mt-14'>
          <div className='flex flex-col items-center'>
            <p className='text-white text-3xl'>5K</p>
            <p className='text-sm font-semibold'>Active Students</p>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-white text-3xl'>10+</p>
            <p className='text-sm font-semibold'>Mentors</p>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-white text-3xl'>200+</p>
            <p className='text-sm font-semibold'>Courses</p>
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-white text-3xl'>50+</p>
            <p className='text-sm font-semibold'>Awards</p>
          </div>
        </div>

        <div className='grid grid-rows-2 grid-cols-4 w-[80vw]'>
          <div className='col-span-2 flex flex-col mr-20 '>
            <h1 className='text-3xl text-richblack-5 mb-3'>World-Class Learning for <br/> <HighlighText text={'Anyone, Anywhere'}/></h1>
            <p>Studynotion partners with more than 275+ leading universities and companies 
            to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>
            <div className='w-fit items-end mt-8'><CTAButton linkto={'/'} active={true}> Learn More</CTAButton></div>
          </div>

          <div className='bg-richblack-700 p-7'>
            <h1 className='text-richblack-5 text-lg'>Cirriculum based on <br/>Industry Needs</h1>
            <p className='text-sm mt-8 mb-10'>Save time and money! The Belajar curriculum is made to be easier
             to understand and in line with industry needs.</p>
          </div>

          <div className='bg-richblack-800 p-7'>
            <h1 className='text-richblack-5 text-lg'>Our Learning <br/>Methods</h1>
            <p className='text-sm mt-8 mb-10'>The learning process uses the namely online and offline.</p>
          </div>

          <div></div>

          <div className='bg-richblack-700 p-7'>
            <h1 className='text-richblack-5 text-lg'>Certification</h1>
            <p className='text-sm mt-6 mb-10'><br/><br/>You will get a certificate that can be used as a certification during job hunting.</p>
          </div>

          <div className='bg-richblack-800 p-7'>
            <h1 className='text-richblack-5 text-lg'>Rating<br/>"Auto-Grading"</h1>
            <p className='text-sm mt-8 mb-10'>You will immediately get feedback during the learning process without having to wait 
            for an answer or response from the mentor.</p>
          </div>

          <div className='bg-richblack-700 p-7'>
            <h1 className='text-richblack-5 text-lg'>Ready to Work</h1>
            <p className='text-sm mt-5 mb-10'><br/><br/>Connected with over 150+ hiring partners, you will have the opportunity to find a job 
            after graduating from our program.</p>
          </div>
          
        </div>

        <ContactUsSection></ContactUsSection>

      </div>
        
        <Footer/>
        
    </div>
  )
}

export default AboutUs
