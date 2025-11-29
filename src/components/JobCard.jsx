import * as React from "react";
import "../styles/global.css";

export const JobCtaHeightContext = React.createContext();

export default function JobCard({
    number,
    job,
    youAre,
    struggle,
    solution,
    quote

}) {
  return (
    <div className="stance-job-card elevated bg-white">
      <h1 className="stance-job-title">{number}</h1>
      <h2>{job}</h2>
      <p className="stance-card">
        <span className="stance-job-bold">You are:</span> {youAre}
      </p>
      <p className="stance-card">
        <span className="stance-job-bold">The Struggle:</span> {struggle}
      </p>
      <p className="stance-card">
        <span className="stance-job-bold">The Stance Solution:</span> {solution}
      </p>
      <hr className="stance-job-line"></hr>
      <p className="stance-card-i">
        <i>&ldquo;{quote}&rdquo;</i>
      </p>
    </div>
  );
}

