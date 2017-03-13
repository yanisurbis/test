import React from 'react'

import IssuePage from 'code/pages/IssuePage/container'

export default function IssuePageRoute({ match: { params } }) {
  // debugger
  return (
    <div className="App">
      <IssuePage
        // reactR params (RR parse url and give us an object)
        // see app.js for rr config
        fetchParams={params}
      />
    </div>
  );
}
