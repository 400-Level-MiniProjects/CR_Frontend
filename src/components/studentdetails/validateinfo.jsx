export default function validateInfo(values){
    let errors = {}

    if(!values.degrees){
        errors.degrees = 'Degrees Required'
    }

    if(!values.sessions){
        errors.sessions = 'Session is Required'
    }

    if(!values.semester){
        errors.semester = 'semester is Required'
    }

    if(!values.level){
        errors.level = 'Level is Required'
    }


    return errors;
}