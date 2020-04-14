import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

export default ({ muscles }) => (
  <Paper>
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
    >
      {muscles.map(group => (
        <Tab label={group} />
      ))}
    </Tabs>
  </Paper>
)
