import { useState, useEffect  } from  'react'
// import validateInfo from './validateinfo'

const useForm = validate => {
    const [values, setValues] = useState({
        degrees: ['B. Sc'],
        semester: ['First Semester', 'Second Semester'],
        sessions: ['2021 / 2022', '2020 / 2021', '2019 / 2020', '2018 / 2019', '2017 / 2018', '2016 / 2017'],
        level: [100, 200, 300, 400, 500, 600]

        // degrees:'',
        // semester:'',
        // sessions:'',
        // level:''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values))
    }

    return {handleChange, values, handleSubmit, errors, }
}

export default useForm;