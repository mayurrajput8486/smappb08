import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const DeleteStudents = () => {
    const {studentId} = useParams();
    const [students,setStudents] = useState({});
    const navigate = useNavigate ();
    async function fetchData () {
        const result = await axios.get(`http://localhost:8001/students/get/${studentId}`);
        setStudents(result.data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    function deleteStudentData () {
        axios.delete(`http://localhost:8001/students/delete/${studentId}`);
        alert("Data Deleted Successfully")
        navigate('/show')
    }
  return (
    <div>
        <h1 className='mt-5'>Delete Student Data</h1>
        <form onSubmit={()=>deleteStudentData()}>
            <h2 className='mt-4 mb-4'>Do You Really Want to Delete <span className='text-danger'>{students.fname} -{students.rollno}</span> </h2>
            <input type='submit' value='YES' className='btn btn-outline-danger me-2 fs-3 p-2'/>
            <NavLink to={'/show'}><button className='btn btn-outline-warning fs-3 p-2'>NO</button></NavLink>

        </form>
    </div>
  )
}

export default DeleteStudents