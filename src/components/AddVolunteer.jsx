import axios from 'axios'
import React, { useState } from 'react'

const AddVolunteer = () => {

    const [input, changeInput] = useState(
        {
            id: "",
            name: "",
            email: "",
            phone: "",
            dob: "",
            gender: "",
            bloodGroup: "",
            dept: "",
            year: "",
            campName: "",
            hours: "",
            address: "",
            unitNo: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-volunteer", input).then(

            (response) => {
                console.log(response.data)
                alert("Volunteer added successfully")
            }

        ).catch(

            (error) => {
                console.log(error.response)
                alert("Failed to add volunteer")
            }
        )
    }


    return (

        <div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2 style={{ color: "#2E7D32", textAlign: "center", fontFamily: "Poppins" }}>
                                🤝 Add Volunteers
                            </h2>

                            <div className="row g-3">

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Volunteer Id</label>
                                    <input type="text" className="form-control" name="id" value={input.id} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Phone</label>
                                    <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" name="dob" value={input.dob} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Blood Group</label>
                                    <select
                                        className="form-control" name="bloodGroup" value={input.bloodGroup}  onChange={inputHandler}>
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Department</label>
                                    <input type="text" className="form-control" name="dept" value={input.dept} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Year of Study</label>
                                    <input type="text" className="form-control" name="year" value={input.year} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Camp Name</label>
                                    <input type="text" className="form-control" name="campName" value={input.campName} onChange={inputHandler}/>
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Hours Completed</label>
                                    <input type="text" className="form-control" name="hours" value={input.hours} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label className="form-label">Unit Number</label>
                                    <input type="text" className="form-control" name="unitNo" value={input.unitNo} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary" onClick={readValue}>ADD</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddVolunteer