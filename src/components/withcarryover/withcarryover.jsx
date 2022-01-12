import React from 'react'
import TableData from '../withcarryover/tabledata'

function withcarryover() {
    return (
        <div class="w-full h-screen ">
            <div class="text-center w-full h-1/4 text-tprimary py-7 ">
                <h2 class="font-medium text-3xl py-5 leading-20">Course Registration</h2>
                <p class="text-2xl font-bold leading-20">Your Courses for 400 Level First Semester</p>
            </div>
            <div class="text-center">
                <TableData/>
                <div class="grid grid-cols-6 py-14 gap-20">
                    <p class="col-start-1 col-end-4"><strong>Note:</strong> You have 3 Carry-Over in your Course Registration Form</p>
                    <p class="col-end-7 col-span-2"><strong>Unit Registered:</strong> 14<br/><strong>Maximum Credit:</strong> 24</p>
                </div>
                    <button class="bg-bprimary text-white px-2 py-4 w-6/12 font-semibold rounded-lg">Continue</button>
            </div>
            
        </div>
    )
}

export default withcarryover