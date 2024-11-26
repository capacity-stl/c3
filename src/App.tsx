import './App.css'
import { Grid, Box, Icon } from '../'

function App() {
  return (
    <div className="flex gap-4">
      {/* <Button className="night" onClick={() => alert("hi chris")} /> */}
      <Grid columns="4" gap="10">
        <Box className="h-[232px]" border="default">
          <div>This is the icon</div>
          <Icon icon="home" />
        </Box>
      </Grid>
    </div>
  )
}

export default App
