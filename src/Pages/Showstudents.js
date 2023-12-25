import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Showstudents = () => {


    const [students, setStudents] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    async function getstudentsData() {
        const result = await axios.get("http://localhost:8001/students");
        setStudents(result.data)
    }
    useEffect(() => {
        getstudentsData();
    },[])

    const filterData = students.filter((stu)=>{
        return stu.fname.toLowerCase().includes(searchTerm.toLowerCase()) || stu.lname.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <>
            <h1>Show Details</h1>
            <div className="row">
                <label htmlFor="search" className="form-label col-3 fs-4 text-primary">Enter Student Name :- </label>
                <div className="col-8">
                    <input type="search" className="form-control" value={searchTerm}
                        onChange={(e)=> setsearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <br/>
           
            <table className="table table-striped">
                <thead >
                    <tr className="table table-dark">
                        <th scope="col">ROLL No</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Course</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    filterData.map(stu=>{
                        return(
                            <tr key={stu.id}>
                                <td>{stu.rollno}</td>
                                <td>{stu.fname}</td>
                                <td>{stu.lname}</td>
                                <td>{stu.email}</td>
                                <td>{stu.course}</td>
                                <td>{stu.date}</td>
                                <td>{stu.gender}</td>
                                <td>{stu.state}</td>
                                <td>{stu.city}</td>
                                <td>{stu.address}</td>
                                <td>{stu.pincode}</td>
                                <td>
                                    <NavLink to={`/students/update/${stu.rollno}`}><button className="btn btn-warning ">UPDATE</button></NavLink> || &nbsp;
                                    <NavLink to={`/students/delete/${stu.rollno}`}><button className="btn btn-danger">DELETE</button></NavLink>
                                </td>
                            </tr>
                        )
                    }) 
                    }
                </tbody>
            </table>
        </>
    )
}
export default Showstudents;
