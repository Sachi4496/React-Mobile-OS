import logo from './logo.svg';
import './App.css';
import Todos from './Todos';

function App() {
  let title1 = "Mobile Operating System";
  let arr1 = ["Android", "Blackberry", "iPhone","Windows Phone"];
  let title2 = "Mobile Manufacturers";
  let arr2 = ["Samsung", "HTC", "Micromax","Apple"]
  return (
    <div className="App">
      <Todos title={title1}  name = {arr1} />
      <Todos title={title2}  name = {arr2} />
    </div>
  );
}

export default App;
