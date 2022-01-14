import React from 'react'
import Form from './form'
import details from '../../images/details.png'

const studentdetails = () => {
    return (
        <div class="flex w-full h-screen">
            <div class="flex justify-center w-1/2">
                <img src={details} class="w-11/12 h-screen" alt="reg"/>
            </div>

            <div class="w-1/2 flex flex-col content-center justify-center gap-10">
                <Form/>
            </div>
            
        </div>
    )
}

export default studentdetails
