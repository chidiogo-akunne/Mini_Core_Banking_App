import React from "react";
import { Link } from "react-router-dom";

export default function MenuItems() {
  return (
    <ul className="admin-nav-menu-item">
      <li>
        <i className="mdi mdi-view-dashboard" />
        <Link to="/admin"> Dashboard</Link>
      </li>
      <li>
        <i className="mdi mdi-account-group" />
        <Link to="/admin/openaccount">Open Account</Link>
      </li>
      <li>
        <i className="mdi mdi-account-group" />
        <Link to="/admin/closeaccount">Close Account</Link>
      </li>
      <li>
        <i className="mdi mdi-chart-timeline-variant" />
        <Link to="/admin-signup">Add new Admin</Link>
      </li>
      <li>
        <i className="mdi mdi-wrench" />
        <Link to="/">Settings</Link>
      </li>
      <li>
        <i className="mdi mdi-wrench" />
        <Link to="/admin-login">Logout</Link>
      </li>
    </ul>
  );
}
