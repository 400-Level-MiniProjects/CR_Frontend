import './App.css';
import { Routes, Route } from 'react-router-dom';
import NoRegCourses from './pages/no_regcourses';
import RegCourses from './pages/reg_courses';
import StudentDetails from './pages/student_details';
import WithCarryover from './pages/with_carryover';
import NoCarryover from './pages/no_carryover';
import EmptyApproveCourses from './pages/empty_approvecourses';
import AdvisorDetails from './pages/AdvisorDetails';

function App() {
  return (
    <Routes>
         <Route path='/' exact element={<RegCourses/>} />
         <Route path='/no_reg_courses' exact element={<NoRegCourses/>} />
         <Route path='/student_details' exact element={<StudentDetails/>} />
         <Route path='/with_carryover' exact element={<WithCarryover/>} />
         <Route path='/no_carryover' exact element={<NoCarryover/>} />
         <Route path='/empty_approve_courses' exact element={<EmptyApproveCourses/>} />
         <Route path='/advisorDetails' exact element={<AdvisorDetails/>} />
    </Routes>
  );
}

export default App;
