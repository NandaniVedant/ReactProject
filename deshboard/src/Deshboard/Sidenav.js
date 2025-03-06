import React from "react";
import cherrypiklogo from './Img/cherrypiklogo.png';

const SideNav = () => {
  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block sidebar p-3">
      <img src={cherrypiklogo} className="logo" alt="logo" />
      <h2 className="logo_text text-white">Cherrypik Software</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <i className="bi bi-house-door-fill"></i> Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/ChartApi">
            <i className="bi bi-bag-fill"></i> ChartApi
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Gpay">
            <i className="bi bi-bag-fill"></i> Gpay
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/TicTack">
            <i className="bi bi-bag-fill"></i> TicTack Game
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
