import React, {useState} from 'react'
import "./App.scss"
import data from './data.json'
import JobDisplay from './components/JobDisplay'

function App() {
  const [jobs, setJobs] = useState(data)
  return (
    <div className="App">
      {jobs.map(job => (
        <JobDisplay job={job}/>
      ))}
    </div>
  )
}

export default App
