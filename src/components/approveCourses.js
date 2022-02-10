import React from 'react'
import '../App.css'


const approveCourses = ({course}) => {
    
    return (
        <tr>
            <td className=' h-10'>{course.id}</td>
            <td className='h-10'>{course.courseCode}</td>		
            <td className='w-400 h-10'>{course.courseTitle}</td>
            <td className=' h-10'>{course.courseUnit}</td>
            <td className=' h-10'><div className="check"><input type="checkbox" name="" id="" /></div></td>
        </tr>
    )
}

export default approveCourses
