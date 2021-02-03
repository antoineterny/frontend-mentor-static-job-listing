import React, { useState, useEffect } from "react"
import "./App.scss"
import data from "./data.json"
import CriteriaBar from "./components/CriteriaBar"
import JobDisplay from "./components/JobDisplay"

function App() {
  const [jobs, setJobs] = useState(data)
  const [criteria, setCriteria] = useState([])
  const addCriterion = crit => {
    let updatedCriteria = [...criteria]
    updatedCriteria.forEach(c => {
      if (c[0] === crit[0]) {
        console.log(c[0], "===", crit[0])
        updatedCriteria.splice(updatedCriteria.indexOf(c), 1)
      }
    })
    updatedCriteria.push(crit)
    setCriteria(updatedCriteria)
  }
  const removeCriterion = crit => {
    setCriteria(criteria.filter(c => c !== crit))
  }
  const clearCriteria = () => setCriteria([])

  useEffect(() => {
    let filteredJobs = [...data]
    filteredJobs.forEach(job => {
      criteria.forEach(crit => {
        filteredJobs = filteredJobs.filter(job => job[crit[0]].includes(crit[1]))
      })
    })
    setJobs(filteredJobs)
  }, [criteria])

  return (
    <div className="App">
      <CriteriaBar
        criteria={criteria}
        // addCriterion={addCriterion}
        removeCriterion={removeCriterion}
        clearCriteria={clearCriteria}
      />
      {jobs.map(job => (
        <JobDisplay
          job={job}
          key={job.id}
          jobs={jobs}
          setJobs={setJobs}
          addCriterion={addCriterion}
        />
      ))}
    </div>
  )
}

export default App
