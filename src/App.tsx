import './App.css'
import { Grid, Box, Icon, Text } from '../lib/main'

function App() {
  return (
    <div className="">
      {/* <Button className="night" onClick={() => alert("hi chris")} /> */}
      <Text as="h1" p="8">
        This is the text
      </Text>
      <Text as="h2" className="text-center font-bold text-earth-300">
        This is the text asldfkjmasldfkj asldfkj asldfkj asldfkj asldfkj asldfkj
      </Text>
      <Text as="h3" className="text-left">
        This is the text
      </Text>
      <Text as="h4" size="8">
        This is the text
      </Text>
      <Text as="h5">This is the text</Text>
      <Text as="h6">This is the text</Text>
      <Grid columns="4" gap="10">
        <Box className="h-[232px]" border="default">
          <div>This is the icon</div>
          <Icon icon="Add" />
        </Box>
      </Grid>
    </div>
  )
}

export default App
