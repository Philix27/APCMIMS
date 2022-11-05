import React from "react";
import Link from "next/link";

export default function AdminPage({ activeIndex }) {
  return (
    <div className="admin">
      <div className="grid">
        <Link href="/admin/members">
          <div className="card">
            <h3>Members</h3>
            <hr />
            <p>View and search through all registered members.</p>
          </div>
        </Link>
        <div className="card">
          <h3>Members</h3>
          <hr />
          <p>View and search through all registered members.</p>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}
