import React from 'react'
import '../App.css'
import courses from '../courses'
import ApproveCourses from '../components/approveCourses'

const approveCourseforreg = () => {
    return (
        <>
            <section className=' min-h-screen flex flex-col items-center font-serif'>
                <h1 className='capitalize font-medium text-3xl'>approve courses for registeration</h1>
                <h2 className=' capitalize font-bold text-2xl mb-14'>courses for 400 level first semester</h2>
                
                <div className=" w-4/5 text-center">
                    {/* {courses.map(course =>{
                        <ApproveCourses course={course}/>
                    })} */}
                    <table className=' w-full'>
                        <thead>
                            <tr className="head">
                                <th>S/N</th>
                                <th>Course Code</th>		
                                <th>Course Title</th>
                                <th>Course Unit</th>
                                <th>Pick</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map(course =>(
                                <ApproveCourses course={course}/>
                            ))}
                        </tbody>
                        
                        
                        
                        
                    </table>    
                </div>

                <input className="buts" type="button" value="Approve"/>
            </section>
        </>
    )
}

export default approveCourseforreg
