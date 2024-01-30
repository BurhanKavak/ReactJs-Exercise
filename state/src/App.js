import './App.css';
import Course from './Course';
import { useState } from 'react';


const getRandomCourse = () => {
  const courseArray = ['java','csharp','javascript','reactt']
  return courseArray[Math.floor(Math.random() * courseArray.length)]

}

function App() {

  const [courses, setCourses] = useState([]);


  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  }

  const courseList = courses.map((course,index) => {
    return <Course key={index} courseName={course}/>
  });
  
  return (
    <div className='App'>
      <button className='appButton' onClick={handleClick} >Kurs Ekle</button>
      <div className='courseList'>
       {courseList}
      </div>  
    </div>
    
  );
}

export default App;
