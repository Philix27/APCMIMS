import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const _path = router.pathname;
  return (
    <>
      <div className="navbar">
        <input type="checkbox" id="check" className="check" />
        <div className="bars">
          <label htmlFor="check">
            <FaBars />
          </label>
        </div>

        <div className="nav_start">
          <div>
            <Link href="/">
              <a className="logo">
                <h3>APCMIMS</h3>
              </a>
            </Link>
          </div>
          <div className="nav_bg">
            <ul className="nav_start_list">
              <li
                className={
                  _path == "/" ? "active_list_item" : "nav_start_list_item"
                }
              >
                <Link href="/">
                  <a className="link">Home</a>
                </Link>
              </li>
              <li
                className={
                  _path == "/reg" ? "active_list_item" : "nav_start_list_item"
                }
              >
                <Link href="/reg">
                  <a className="link">Registration</a>
                </Link>
              </li>
              <li
                className={
                  _path == "/members"
                    ? "active_list_item"
                    : "nav_start_list_item"
                }
              >
                <Link href="/members">
                  <a className="link">Members</a>
                </Link>
              </li>

              <li
                className={
                  _path == "/contact"
                    ? "active_list_item"
                    : "nav_start_list_item"
                }
              >
                <Link href="/contact">
                  <a className="link">Contact Us</a>
                </Link>
              </li>
              <li
                className={
                  _path == "/" ? "active_list_item" : "nav_start_list_item"
                }
              >
                <Link href="/">
                  <a className="link">Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
