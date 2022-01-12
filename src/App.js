// import "./App.css";
// // import StudentDetails from "./components/studentdetails/studentdetails";

// import RegCourses from './components/regcourses/regcourses.jsx'
// import NotReg from './components/notregcourses/notregcourses'
// import EapproveCourses from './components/eapprovecourses/eapprovecourses'
// import Studentdetails from "./components/studentdetails/studentdetails";
// import WithCarryover from './components/withcarryover/withcarryover'
// import NoCarryOver from './components/nocarryover/nocarryover'


// this is to make all the pages show in the app.js file...
// function App() {
//   return (
//     <div className="bg-white">
//         <p className="text-center">
//           Welcome to <code>CR FRONTEND</code> make changes and save to reload.
//          they are not rsponsive for now...
//         </p>

//         {/*  <StudentDetails/> */}
//         <RegCourses/>
//         <NotReg/>
//         <EapproveCourses/>
//         <Studentdetails/>
//         <WithCarryover/>
//         <NoCarryOver/>
//     </div>
//   );
// }

// export default App;

import './App.css';
import render from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import noRegCourses from './pages/no_regcourses';
import RegCourses from './pages/reg_courses';
import StudentDetails from './pages/student_details';
import WithCarryover from './pages/with_carryover';
import NoCarryover from './pages/no_carryover';
import EmptyApproveCourses from './pages/empty_approvecourses';


render(
  <BrowserRouter>
    <Routes>
         <Route path='/' exact component={RegCourses} />
         <Route path='/no_regcourses' exact component={noRegCourses} />
         <Route path='/student_details' exact component={StudentDetails} />
         <Route path='/with_carryover' exact component={WithCarryover} />
         <Route path='/no_carryover' exact component={NoCarryover} />
         <Route path='/empty_approvecourses' exact component={EmptyApproveCourses} />
    </Routes>
  </BrowserRouter>
)


// the other solution i tried that did not work.
// function App() {
//   return (
//     <Routes> 
//       {/* <Router> */}
//         <Route path='/' exact component={RegCourses} />
//         <Route path='/no_regcourses' exact component={noRegCourses} />
//         <Route path='/student_details' exact component={StudentDetails} />
//         <Route path='/with_carryover' exact component={WithCarryover} />
//         <Route path='/no_carryover' exact component={NoCarryover} />
//         <Route path='/empty_approvecourses' exact component={EmptyApproveCourses} />
//       {/* </Router> */}
//     </Routes>
//   );
// }

// export default App;
