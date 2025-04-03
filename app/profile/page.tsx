import React from "react";

export default function Profile() {
  // throw new Error("Profile not found in the database or server");
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>My Profile</h1>
      <div style={{ marginBottom: "20px" }}></div>
      <div>
        <h2>John Doe</h2>
        <p>Email: john.doe@example.com</p>
        <p>Location: New York, USA</p>
        <p>
          Bio: A passionate developer with experience in building web
          applications using modern technologies.
          <div style={{ marginTop: "20px" }}>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </p>
      </div>
    </div>
  );
}
