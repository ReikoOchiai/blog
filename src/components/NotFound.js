import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry, this page does not exist..</p>
      <Link to={"/"}>Back to home page</Link>
    </div>
  );
}
