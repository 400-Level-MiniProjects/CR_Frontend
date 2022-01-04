import React from 'react'
import eApproveCourses from '../../images/emptyReg.png'

function eapprovecourses() {
    return (
        <div class="w-full h-screen ">
            <div class="text-center w-full h-1/4 text-tprimary py-7 ">
                <h2 class="font-bold text-4xl py-4 leading-20">Approve Course Registration</h2>
                <p class="text-xl font-medium leading-20">Oops you dont have any student's form to approve</p>
            </div>
            <div class="h-3/4 flex flex-col items-center justify-center py-14 gap-6 ">
                <img src={eApproveCourses} class="w-5/12 h-3/12" alt="reg"/>
                <button class="bg-bprimary text-white px-2 py-4 w-6/12 font-semibold rounded-lg">Refresh</button>
            </div>
            
        </div>
    )
}

export default eapprovecourses