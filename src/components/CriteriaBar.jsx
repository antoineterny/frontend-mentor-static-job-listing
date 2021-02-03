import React from "react"
import "./CriteriaBar.scss"

const CriteriaBar = ({ criteria, removeCriterion, clearCriteria }) => (
  <div className="CriteriaBar card">
    <div className="criteriatabs">
      {criteria.map(crit => (
        <div className="criteriatab" key={crit}>
          <div className="tablet">{crit[1]}</div>
          <div className="remover" onClick={() => removeCriterion(crit)}>
            <img src="/images/icon-remove.svg" alt="" />
          </div>
        </div>
      ))}
    </div>
    <div className="clear-button" onClick={clearCriteria}>
      Clear
    </div>
  </div>
)

export default CriteriaBar
