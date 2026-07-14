import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewVolunteer = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-volunteers").then(

            (response) => {
                changeData(response.data)
            }

        ).catch(

            (error) => {
                console.log(error)
            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2 style={{ color: "#2E7D32", textAlign: "center", fontFamily: "Poppins" }}>
                                🤝 View Volunteers</h2>

                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Volunteer ID</th>
                                            <th scope="col">Full Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Date of Birth</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Blood Group</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Year of Study</th>
                                            <th scope="col">Camp Name</th>
                                            <th scope="col">Hours Completed</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Unit Number</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {data.map(

                                            (data, index) => {
                                                return (
                                                    <tr>
                                                        <td>{data.id}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.email}</td>
                                                        <td>{data.phone}</td>
                                                        <td>{data.dob}</td>
                                                        <td>{data.gender}</td>
                                                        <td>{data.bloodGroup}</td>
                                                        <td>{data.dept}</td>
                                                        <td>{data.year}</td>
                                                        <td>{data.campName}</td>
                                                        <td>{data.hours}</td>
                                                        <td>{data.address}</td>
                                                        <td>{data.unitNo}</td>


                                                    </tr>
                                                )
                                            }

                                        )}

                                    </tbody>
                                </table>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewVolunteer