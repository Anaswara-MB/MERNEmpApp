import React from 'react'
import './Styles.css';
const Addemployee = () => {
  return (
    <div className="login-container">
      <form>
        <h2 className="form-heading">Employee Form</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary" className="form-label">
            Salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addemployee