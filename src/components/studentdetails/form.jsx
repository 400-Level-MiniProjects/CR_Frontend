import React from 'react'

import useForm from './useform'

import validateInfo from './validateinfo';

const Form = () => {
    const {handleChange, values, handleSubmit, errors } = useForm(validateInfo);


    return (
       <div className="form-content-right">
           <form className='form' onSubmit={handleSubmit}>
               <h1>Student Details</h1>
               <div className="form-input">
                   <label htmlFor="degree" className="form-label">
                        <select name="degree">
                            <option value="degree">Degrees</option>
                            <option value={values.degrees} onChange={handleChange}>B. Sc</option>
                        </select>
                        {errors.degrees && <p>{errors.degrees}</p>}
                   </label>
                   <br/>
                   <label htmlFor="session" className="form-label">
                        <select name="session" value={values.sessions} onChange={handleChange}>
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
                        <select name="semester" value={values.semester} onChange={handleChange}>
                            <option value="semester">Semester</option>
                            <option value={values.semester} onChange={handleChange}>First Semester</option>
                            <option value={values.semester} onChange={handleChange}>Second Semester</option>
                        </select>
                   </label>
                   <br/>
                   <label htmlFor="level" className="form-label">
                        <select name="level" value={values.level} onChange={handleChange}>
                            <option value="level">Level</option>
                            <option value={values.level} onChange={handleChange}>100</option>
                            <option value={values.level} onChange={handleChange}>200</option>
                            <option value={values.level} onChange={handleChange}>300</option>
                            <option value={values.level} onChange={handleChange}>400</option>
                            <option value={values.level} onChange={handleChange}>500</option>
                            <option value={values.level} onChange={handleChange}>600</option>
                        </select>
                   </label>
                   <br/>
                   <button>Continue</button>
               </div>
           </form>
       </div>
    )
}

export default Form
