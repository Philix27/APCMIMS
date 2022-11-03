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
          <Link href="/">
            <a>
              {/* <h3>APCMIMS</h3> */}
              <img
                className="logo"
                src="/images/logo.png"
                width={90}
                height={45}
              />
            </a>
          </Link>
          {/* <Image className={styles.logo} src="/images/logo.png" width={90} height={45}/> */}
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
                  _path == "/contact"
                    ? "active_list_item"
                    : "nav_start_list_item"
                }
              >
                <Link href="/contact">
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
                  _path == "/registration"
                    ? "active_list_item"
                    : "nav_start_list_item"
                }
              >
                <Link href="/registration">
                  <a className="link">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
