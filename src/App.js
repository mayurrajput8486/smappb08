import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Addstudents from './Pages/Addstudents'
import Errorpage from './Pages/Errorpage';
import Showstudents from './Pages/Showstudents';
import EditStudents from './Pages/EditStudents';
import DeleteStudents from './Pages/DeleteStudents';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/add' element={<Addstudents/>}></Route>
          <Route path='/show' element={<Showstudents/>}></Route>
          <Route path='/students/update/:studentId' element={<EditStudents/>}></Route>
          <Route path='/students/delete/:studentId' element={<DeleteStudents/>}></Route>
          <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
