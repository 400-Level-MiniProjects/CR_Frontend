import React from 'react'
import registered from '../../images/regCourses.png'

function regcourses() {
    return (
        <div class="flex w-full h-screen">
            <div class="flex justify-center w-1/2">
                <img src={registered} class="w-11/12 h-screen" alt="reg"/>
            </div>

            <div class="w-1/2 flex flex-col content-center justify-center gap-10">
                <div class="text-center w-full text-tprimary">
                    <h2 class="font-bold text-5xl py-6 leading-20">Course Registration</h2>
                    <p class="text-xl font-medium leading-20">Well done, you have registered all your courses</p>
                </div>
                <div class="w-full px-24 py-2 text-tprimary">
                    <p class="text-2xl font-normal">Number of Courses Registered: <b class="font-bold">10</b></p>
                    <p class="text-2xl font-normal">Total Credit Unit: <b class="font-bold">21</b></p>
                </div>

                <div class="text-center w-full py-3 text-tprimary">
                    <p class="font-semibold text-xl leading-10 py-5">Please wait for your Course Advisor to Approve your Courses</p>
                    <button class="bg-bprimary text-white px-2 py-5 w-9/12 font-semibold rounded-lg">Exit</button>
                </div>
            </div>
            
        </div>
    )
}

export default regcourses
