import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import * as userService from "../../service/user"

const UserDetail = (props) => {

    const navigate = useHistory();
    const location = useLocation();

    const mode = location?.state ? location.state.mode : 1;

    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (mode == 1) {
            return;
        }
        let userId = location.state.userId;
        userService.find(userId).then(setUserData);
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (mode == 1) {
            userService.insert(userData).then(() => { setUserData({}) });
            return;
        }
        let userId = location.state.userId;
        userService.update(userId, userData).then(() => navigate.push('/users'));
    }

    const handleDelete = (event) => {
        event.preventDefault();
        let userId = location.state.userId;
        userService.deleteRecord(userId).then(() => navigate.push('/users'));
    }

    return <div>
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={userData.name || ""}
                    onChange={handleChange} />
            </div>
            <div className="col-md-6">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" value={userData.phoneNumber || ""}
                    onChange={handleChange} />
            </div>

            <div className="col-md-6">
                <label htmlFor="aadhaar" className="form-label">Aadhaar</label>
                <input type="number" className="form-control" id="aadhaar" name="aadhaar" value={userData.aadhaar || ""}
                    onChange={handleChange} />
            </div>
            <div className="col-md-6">
                <label htmlFor="userType" className="form-label">User Type</label>
                <select id="userType" name="userType" className="form-select" value={userData.userType || ""}
                    onChange={handleChange} aria-label="Default select">
                    <option value="1"></option>
                    <option value="2">Borrower</option>
                    <option value="3">Lender</option>
                    <option value="4">Agent</option>
                </select>
            </div>

            <div className="col-12">
                <label htmlFor="address1" className="form-label">Address</label>
                <textarea type="text" className="form-control" id="address1" name="address1" placeholder="" value={userData.address1 || ""}
                    onChange={handleChange} />
            </div>
            <div className="col-12">
                <label htmlFor="address2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="address2" name="address2" placeholder="" value={userData.address2 || ""}
                    onChange={handleChange} />
            </div>
            <div className="col-md-6">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" name="city" value={userData.city || ""}
                    onChange={handleChange} />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputZip" className="form-label">Pincode</label>
                <input type="pincode" className="form-control" id="pincode" name="pincode" value={userData.pincode || ""}
                    onChange={handleChange} />
            </div>

            <div className="col-md-6">
                <label htmlFor="income" className="form-label">Monthly Income</label>
                <input type="number" className="form-control" id="income" name="income" value={userData.income || ""}
                    onChange={handleChange} />
            </div>
            <div className="col-md-6">
                <label htmlFor="referredBy" className="form-label">Referred By</label>
                <input type="text" className="form-control" id="referredBy" name="referredBy" value={userData.referredBy || ""}
                    onChange={handleChange} />
            </div>

            <div className="col-md-6">
                <label htmlFor="guarantorName" className="form-label">Guarantor Name</label>
                <input type="text" className="form-control" id="guarantorName" name="guarantorName" value={userData.guarantorName || ""}
                    onChange={handleChange} />
            </div>
            <div className="col-md-6">
                <label htmlFor="guarantorPhoneNumber" className="form-label">Guarantor PhoneNumber</label>
                <input type="number" className="form-control" id="guarantorPhoneNumber" name="guarantorPhoneNumber" value={userData.guarantorPhoneNumber || ""}
                    onChange={handleChange} />
            </div>

            <div className="col-12">
                {mode == 1 && <button type="submit" className="btn btn-primary">Add</button>}
                {mode != 1 && <div className="d-flex gap-3"><button type="submit" className="btn btn-primary">Update</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>}
            </div>
        </form>

    </div>
}

export default UserDetail;