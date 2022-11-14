import React, { useState } from "react";
import Link from "next/link";

export default function Membership({ handleSubmit, member }) {
  return (
    <div className="section">
      <h1 className="sectionTitle">View your account</h1>
      <div className="membership">
        <div className="tableSection">
          <form onSubmit={handleSubmit} className="form">
            <div className="input">
              <input
                type="search"
                placeholder="Type your NIN to view your account"
                required
                minLength={10}
                name="userNIN"
              />
            </div>

            <div className="searchBtn">
              <a className="btn" onClick={handleSubmit}>
                Search
              </a>
            </div>
          </form>
        </div>
        {member && (
          <div>
            Member is present
            <h3>
              Name: <span>{member.firstName}</span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
