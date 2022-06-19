import React from "react";
import {
  FaChevronDown,
  FaClock,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar_generic">
      <li>
        <span>
          <FaClock />
        </span>
        All Updates
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
        Today
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
        Next 7 days
      </li>
    </ul>

    <div className= "sidebar_middle">
        <span> <FaChevronDown /></span>
        <h2>Projects</h2>
    </div>

    <ul className="sidebar_projects"> Projects will be here!</ul>
    Add project Component here 
  </div>
);
