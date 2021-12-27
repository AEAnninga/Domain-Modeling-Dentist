import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import "./Day.css";
import AddForm from './addForm'
import AddAppointment from './AddAppointment'
import NewAppointment from './NewAppointment'

const Admin = () => {


    return ( 
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/add-person">Add person</Link>
                    </li>
                    <li>
                        <Link to="/admin/add-appoinment">Add appointment</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/admin/add-person" >
                    <AddForm />
                </Route>
                <Route path="/admin/add-appoinment">
                    <AddAppointment />
                    <NewAppointment />
                </Route>
            </Switch>
        </div>      
    )
};

export default Admin