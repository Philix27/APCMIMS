import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const _path = router.pathname;
  const show = "show";
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="navbar ">
        {/* <Link href="/">
          <img className="logo" src="/images/logo.png" />
        </Link> */}

        <label className="brand">APCMIMS</label>
        {/* <label className="brand">APCMIMS</label> */}

        <ul className={showNav ? "show" : ""}>
          <li
            className={_path == "/" ? "active" : ""}
            onClick={() => setShowNav(!showNav)}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == "/reg" ? "active" : ""}
          >
            <Link href="/reg">
              <a>Registration</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == "/contact" ? "active" : ""}
          >
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == "/login" ? "active" : ""}
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li
            onClick={() => setShowNav(!showNav)}
            className={_path == "/admin" ? "active" : ""}
          >
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </li>
        </ul>
        <label className="icon">
          <FaBars onClick={() => setShowNav(!showNav)} />
        </label>
      </div>
    </>
  );
}
