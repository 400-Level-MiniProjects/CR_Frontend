import React from 'react'

import useForm from './useform'

import validateInfo from './validateinfo';

const Form = () => {
    const {handleChange, values, handleSubmit, errors } = useForm(validateInfo);


    return (
       <div className="form-content-right">
           <form className='form' onSubmit={handleSubmit} class="text-center w-full text-tprimary">
               <h1 class="font-bold text-5xl py-6 leading-20">Student Details</h1>
               <div className="form-input" class="grid gap-1">
                   <label htmlFor="degree" className="form-label">
                        <select name="degree" class="border border-grey text-black px-2 py-4 w-9/12 font-semibold rounded-lg">
                            <option value="degree">Degrees</option>
                            <option value={values.degrees} onChange={handleChange}>B. Sc</option>
                        </select>
                        {errors.degrees && <p>{errors.degrees}</p>}
                   </label>
                   <br/>
                   <label htmlFor="session" className="form-label">
                        <select name="session" onChange={handleChange} class="border border-grey text-black px-2 py-4 w-9/12 font-semibold rounded-lg">
                            <option value="session">Session</option>
                            <option value={values.sessions} onChange={handleChange}>2021 / 2022</option>
                            <option value={values.sessions} onChange={handleChange}>2020 / 2021</option>
                            <option value={values.sessions} onChange={handleChange}>2019 / 2020</option>
                            <option value={values.sessions} onChange={handleChange}>2018 / 2019</option>
                            <option value={values.sessions} onChange={handleChange}>2017 / 2018</option>
                            <option value={values.sessions} onChange={handleChange}>2016 / 2017</option>
                        </select>
                   </label>
                   <br/>
                   <label htmlFor="semester" className="form-label">
                        <select name="semester" onChange={handleChange} class="border border-grey text-black px-2 py-4 w-9/12 font-semibold rounded-lg">
                            <option value="semester">Semester</option>
                            <option value={values.semester} onChange={handleChange}>First Semester</option>
                            <option value={values.semester} onChange={handleChange}>Second Semester</option>
                        </select>
                   </label>
                   <br/>
                   <label htmlFor="level" className="form-label">
                        <select name="level" onChange={handleChange} class="border border-grey text-black px-2 py-4 w-9/12 font-semibold rounded-lg">
                            <option value="level">Level</option>
                            <option value={values.level} onChange={handleChange}>100</option>
                            <option value={values.level} onChange={handleChange}>200</option>
                            <option value={values.level} onChange={handleChange}>300</option>
                            <option value={values.level} onChange={handleChange}>400</option>
                            <option value={values.level} onChange={handleChange}>500</option>
                            <option value={values.level} onChange={handleChange}>600</option>
                        </select>
                   </label>
                   <div class="text-center w-full py-10 text-tprimary">
                       <button class="bg-bprimary text-white px-2 py-5 w-9/12 font-semibold rounded-lg">Continue</button>
                   </div>
               </div>
           </form>
       </div>
    )
}

export default Form
