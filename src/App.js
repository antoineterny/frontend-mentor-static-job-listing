import React, { useState } from "react"
import "./App.scss"
import data from "./data.json"
import Criteria from "./components/Criteria"
import JobDisplay from "./components/JobDisplay"

function App() {
  const [jobs, setJobs] = useState(data)
  const [crit, setCrit] = useState([])
  return (
    <div className="App">
      <Criteria crit={crit} setCrit={setCrit} /> 
      {jobs.map(job => (
        <JobDisplay
          job={job}
          key={job.id}
          jobs={jobs}
          setJobs={setJobs}
          crit={crit}
          setCrit={setCrit}
        />
      ))}
    </div>
  )
}

export default App
