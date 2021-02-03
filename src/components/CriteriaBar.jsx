import React from "react"
import './CriteriaBar.scss'

const CriteriaBar = ({ criteria, removeCriterion, clearCriteria }) => (
  <div className="CriteriaBar card" >
    <div className="criteriatabs">
      {criteria.map(crit => (
        <div className="criteriatab tablet tablet-remove" key={crit} onClick={() => removeCriterion(crit)}>
          {crit[1]}
        </div>
      ))}
    </div>
    <div className="clear-button" onClick={clearCriteria}>Clear</div>
  </div>
)

export default CriteriaBar
