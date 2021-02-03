import React from "react"

const CriteriaBar = ({ criteria, removeCriterion, clearCriteria }) => (
  <div className="CriteriaBar">
    <div className="criteriatabs">
      {criteria.map(crit => (
        <div className="criteriatab" key={crit} onClick={() => removeCriterion(crit)}>
          {crit[1]}
        </div>
      ))}
    </div>
    {criteria.length > 0 && <button onClick={clearCriteria}>Clear</button>}
  </div>
)

export default CriteriaBar
