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
      <div className="navbar ">
        <div className="nav_bg">
          <div>
            <Link href="/">
              <a>
                <img
                  className="logo"
                  src="/images/logo.png"
                  width={50}
                  height={40}
                />
              </a>
            </Link>
            <Link href="/">
              <a className="brand">
                <h3>APCMIMS</h3>
              </a>
            </Link>
          </div>
          <ul className="nav_start_list">
            <li
              className={
                _path == "/" ? "active_list_item" : "nav_start_list_item"
              }
            >
              <Link href="/" className="link">
                Home
              </Link>
            </li>
            <li
              className={
                _path == "/reg" ? "active_list_item" : "nav_start_list_item"
              }
            >
              <Link href="/reg" className="link">
                Registration
              </Link>
            </li>
            <li
              className={
                _path == "/contact" ? "active_list_item" : "nav_start_list_item"
              }
            >
              <Link href="/contact" className="link">
                Contact Us
              </Link>
            </li>
            <li
              className={
                _path == "/login" ? "active_list_item" : "nav_start_list_item"
              }
            >
              <Link href="/login" className="link">
                Login
              </Link>
            </li>
            <li
              className={
                _path == "/admin" ? "active_list_item" : "nav_start_list_item"
              }
            >
              <Link href="/admin" className="link">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
