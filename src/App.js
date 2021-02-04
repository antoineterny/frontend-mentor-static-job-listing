import React, { useState, useEffect } from "react"
import "./App.scss"
import data from "./data.json"
import CriteriaBar from "./components/CriteriaBar"
import JobDisplay from "./components/JobDisplay"

function App() {
  const [jobs, setJobs] = useState(data)
  const [criteria, setCriteria] = useState([])
  const addCriterion = newCrit => {
    let updatedCriteria = [...criteria]
    updatedCriteria.forEach(existingCrit => {
      if (existingCrit[1] === newCrit[1]) {
        updatedCriteria.splice(updatedCriteria.indexOf(existingCrit), 1)
      }
    })
    updatedCriteria.push(newCrit)
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
        {criteria.length > 0 && (
          <CriteriaBar
            criteria={criteria}
            removeCriterion={removeCriterion}
            clearCriteria={clearCriteria}
          />
        )}

      {jobs.map(job => (
        <JobDisplay job={job} key={job.id} addCriterion={addCriterion} />
      ))}
    </div>
  )
}

export default App
