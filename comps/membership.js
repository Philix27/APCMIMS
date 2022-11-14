import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Payer } from "../paystack/index";

export default function Membership({
  handleSubmit,
  member,
  searchValue,
  handleChange,
}) {
  const router = useRouter();
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
                // value={searchValue}
                onChange={handleChange}
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
          <div className="userInfo">
            <div>
              <h3>Name</h3>
              <hr />
              <p>{member.firstName}</p>
            </div>
            <div>
              <h3>Email</h3>
              <hr />
              <p>{member.email}</p>
            </div>
            <div>
              <h3>NIN</h3>
              <hr />
              <p>{member.nin}1233211</p>
            </div>
            {member.isRegistered ? (
              <div
                // onClick={() => router.push(`/admin/${member._id}`)}
                className="clickable"
              >
                <h3>Approved</h3>
                <hr />
                <Link
                  href={`/admin/${member._id}`}
                  target="_blank"
                  className="btn"
                >
                  View Profile
                </Link>
                {/* <p className="green">View Profile</p> */}
              </div>
            ) : (
              <div
                // onClick={() => router.push(`/payment`)}
                className="clickable"
              >
                <h3>Not Approved</h3>
                <hr />
                {/* <p className="red">Get Approved</p> */}
                <Link
                  href="https://paystack.com/pay/9z90w2jv7z"
                  target="_blank"
                  className="btn"
                >
                  Get Approved
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
