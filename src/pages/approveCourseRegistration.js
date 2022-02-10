import React from 'react'

import '../App.css'
import approve from '../approve'
import AppCourse from '../components/appCourse'
import Eapprovecourses from './empty_approvecourses'

const approveCourseRegistration = () => {
    if (!approve || approve.length ===0) {
        return (
            <Eapprovecourses/>
        )
    }
    return (
        <>
            <section id="approval">
                <h1>approve courses registeration</h1>
                <h2>400 level first semester</h2>
            
                <div class="table">
                    <table className='w-full'>
                        <thead>
                            <tr class="head">
                                <th>S/N</th>
                                <th>Matric Number</th>		
                                <th>Registered Courses</th>
                                <th>Total Unit</th>
                                <th>Approve?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approve.map(approval =>(
                                <AppCourse approval={approval}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default approveCourseRegistration
