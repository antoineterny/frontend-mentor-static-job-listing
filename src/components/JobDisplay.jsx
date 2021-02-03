import React from "react"
import "./JobDisplay.scss"

const JobDisplay = ({ job, jobs, setJobs, addCriterion }) => (
  <div className="JobDisplay" key={job.id}>
    <img src={job.logo} alt="" />
    <div className="description">
      <h5>
        {job.company} {job.new && <span className="new">new</span>}{" "}
        {job.featured && <span className="featured">featured</span>}
      </h5>
      <h4>{job.position}</h4>
      <p>
        {job.postedAt}
        <span>•</span>
        {job.contract}
        <span>•</span>
        {job.location}
      </p>
    </div>
    <div className="tablets">
      <div
        className="tablet"
        onClick={() => {
          // setJobs(jobs.filter(j => j.role.includes(job.role)))
          addCriterion(["role", job.role])
        }}
      >
        {job.role}
      </div>
      <div
        className="tablet"
        onClick={() => {
          // setJobs(jobs.filter(j => j.level.includes(job.level)))
          addCriterion(["level", job.level])
        }}
      >
        {job.level}
      </div>
      {job.languages.map(lang => (
        <div
          key={job.id + lang}
          className="filter-tablet"
          onClick={() => {
            // setJobs(jobs.filter(j => j.languages.includes(lang)))
            addCriterion(["languages", lang])
          }}
        >
          {lang}
        </div>
      ))}
      {job.tools.map(tool => (
        <div
          key={job.id + tool}
          className="filter-tablet"
          onClick={() => {
            // setJobs(jobs.filter(j => j.tools.includes(tool)))
            addCriterion(["tools", tool])
          }}
        >
          {tool}
        </div>
      ))}
    </div>
  </div>
)

export default JobDisplay
