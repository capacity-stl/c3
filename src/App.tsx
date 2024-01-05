import "./App.css";
import { Button, ButtonTW } from "../";

function App() {
  return (
    <div className="flex gap-4">
      <Button className="night" onClick={() => alert('hi chris')}/>
      <ButtonTW onClick={() => alert('hi chris')}/>
      <ButtonTW className="bg-night border-4 border-earth-400" onClick={() => alert('hi chris')}/>
    </div>
  );
}

export default App;
