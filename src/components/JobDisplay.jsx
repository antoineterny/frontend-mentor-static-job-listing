import React from "react"

const JobDisplay = ({ job }) => (
  <div className="JobDisplay" key={job.id}>
    <h2>{job.company}</h2>
    <h1>{job.position}</h1>
    <p>
      {job.postedAt}
      <span>•</span>
      {job.contract}
      <span>•</span>
      {job.location}
    </p>
  </div>
)

export default JobDisplay
