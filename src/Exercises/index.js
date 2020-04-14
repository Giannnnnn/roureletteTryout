import React from 'react'
import { Grid } from 'material-ui'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

export default props => (
  <Grid container>
    <Grid item sm>
      <LeftPane styles={style}>Left Pane</LeftPane>
    </Grid>
    <Grid item sm>
      <RightPane styles={style}>Right Pane</RightPane>
    </Grid>
  </Grid>
)
