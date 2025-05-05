import './App.css'
import { Text } from '../lib/main'

function App() {
  return (
    <div className="c3">
      {/* <Button className="night" onClick={() => alert("hi chris")} /> */}
      <Text as="h1" p="8" color="mars-300">
        This is the text
      </Text>
      <Text as="h2" className="text-center font-bold text-mercury-300">
        This is the text asldfkjmasldfkj asldfkj asldfkj asldfkj asldfkj asldfkj
      </Text>
      <Text as="h3" className="text-left">
        This is the text
      </Text>

      <Text as="h5">This is the text</Text>
      <Text as="h6">This is the text</Text>
    </div>
  )
}

export default App
