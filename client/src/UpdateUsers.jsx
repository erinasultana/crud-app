import React from 'react';

function UpdateUsers  ()  {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center   align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor=" ">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-2">
            <label htmlFor=" ">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-2">
            <label htmlFor=" ">Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}


export default UpdateUsers;