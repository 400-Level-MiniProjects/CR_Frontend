import React from 'react'
import details from '../images/details.png'
import '../App.css'


const AdvisorDetails = () => {
    return (
        <>
           <section className=' w-4/5 m-auto flex font-sans h-big'>
                <div className=' w-3/6'>
                    <img src={details} alt="" className='w-full h-full'/>
                </div>
                <div className='w-3/6 flex flex-col justify-center items-center'>
                    <h1 className=' capitalize font-semibold text-3xl mb-5'>advisor's details</h1>

                    <div className=''>
                        <form action="" className='flex flex-col'>
                            <select name="" className=' h-16 w-96 mx-0 my-3 rounded-xl py-0 px-2 font-medium text-lg shadow-shine'>
                                <option value="none">Session</option>
                                <option value="2017/2018">2017/2018</option>
                                <option value="2018/2019">2018/2019</option>
                                <option value="2019/2020">2019/2020</option>
                                <option value="2020/2021">2020/2021</option>
                                <option value="2021/2022">2021/2022</option>
                            </select>
        
                            <select name="" className=' h-16 w-96 mx-0 my-3 rounded-xl py-0 px-2 font-medium text-lg shadow-shine'>
                                <option value="none">Department</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Business Administration">Business Administration</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Medicine and Surgery">Medicine and Surgery</option>
                                <option value="Medical Laboratory Science">Medical Laboratory Science</option>
                            </select>
            
                            <select name="" className=' h-16 w-96 mx-0 my-3 rounded-xl py-0 px-2 font-medium text-lg shadow-shine'>
                                <option value="none">Level</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="600">600</option>
                            </select>
                            
                            <input type="button" value="Continue" className=' h-16 w-96 text-white mx-0 my-3 rounded-xl py-0 px-2 font-medium text-lg bg-blues'/>
                        </form>
                    </div>
                    
                </div>
            </section> 
        </>
    )
}

export default AdvisorDetails
