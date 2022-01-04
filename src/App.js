import "./App.css";
// import StudentDetails from "./components/studentdetails/studentdetails";

import RegCourses from './components/regcourses/regcourses.jsx'
import NotReg from './components/notregcourses/notregcourses'
import EapproveCourses from './components/eapprovecourses/eapprovecourses'

function App() {
  return (
    <div className="bg-white">
        <p class="text-center">
          Welcome to <code>CR FRONTEND</code> make changes and save to reload.
         they are not rsponsive for now...
        </p>

        {/*  <StudentDetails/> */}
        <RegCourses/>
        <NotReg/>
        <EapproveCourses/>
    </div>
  );
}

export default App;
