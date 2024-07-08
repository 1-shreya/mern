import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Museums() {
  const [museums, setUsers] = useState([]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rouded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>category</th>
              <th>datecreated </th>
              <th>creatorname </th>
            </tr>
          </thead>
          <tbody>
            <th>
              <button>Edit</button>
              <button>Delete</button>
            </th>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Museums;
