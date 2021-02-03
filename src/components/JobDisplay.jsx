import React from "react"
import "./JobDisplay.scss"

const JobDisplay = ({ job, addCriterion }) => (
  <div className={job.featured ? "JobDisplay card featured" : "JobDisplay card"} key={job.id}>
    <img src={job.logo} alt="" />
    <div className="description">
      <h5>
        {job.company} {job.new && <span className="new">new!</span>}{" "}
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
      <div className="tablet" onClick={() => addCriterion(["role", job.role])}>
        {job.role}
      </div>
      <div className="tablet" onClick={() => addCriterion(["level", job.level])}>
        {job.level}
      </div>
      {job.languages.map(lang => (
        <div
          key={job.id + lang}
          className="tablet"
          onClick={() => addCriterion(["languages", lang])}
        >
          {lang}
        </div>
      ))}
      {job.tools.map(tool => (
        <div key={job.id + tool} className="tablet" onClick={() => addCriterion(["tools", tool])}>
          {tool}
        </div>
      ))}
    </div>
  </div>
)

export default JobDisplay
