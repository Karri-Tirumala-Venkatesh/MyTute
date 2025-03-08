import './App.css';
import Signup from './components/signup';
import Login from './components/Login';
import Header from './components/header';
import JoinCourse from './components/join_course_student';
import CreateCourse from './components/create_course_teacher';
import NoCourses from './components/createfirstcourse_teacher';
import NoEnrollment from './components/joinfirst_student';
function App() {
  return (
    <div className="App">
      <Header />
      <NoEnrollment />
      {/* <NoCourses /> */}
      {/* <CreateCourse /> */}
      {/* <JoinCourse /> */}
      {/* <Login />
      <Signup /> */}
    </div>
  );
}

export default App;
