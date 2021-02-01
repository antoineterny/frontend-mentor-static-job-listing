import React, { useState } from "react"

const Criteria = ({ crit, setCrit }) => (
  <div className="Criteria">
    <div className="criteriatabs">
      {crit.map(criterion => (
        <div className="criteriatab" onClick={setCrit(crit.filter(x => x !== criterion))}>
          {criterion}
        </div>
      ))}
    </div>
  </div>
)

export default Criteria
