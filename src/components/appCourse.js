import React from 'react'
import '../App.css'

const appCourse = ({approval}) => {
    return (
          <tr>
            <td className=' h-10'>{approval.id}</td>
            <td className='h-10'>{approval.matNO}</td>		
            <td className='w-400 h-10'>{approval.numCourse}</td>
            <td className=' h-10'>{approval.courseUnit}</td>
            <td className=' h-10'><div className="check"><input type="checkbox" name="" id="" /></div></td>
          </tr>  
    )
}

export default appCourse
