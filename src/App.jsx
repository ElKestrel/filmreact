import './App.css';
import Divs from './components/divs/Divs';

import Nav from './components/navbar/Nav'

function App() {
  let arr=[1,2 ,3]
  return (
    <div className="App">
      <Nav />
      {arr.map( (sect, index) => {
        return <Divs key={index} tst={sect} />
      })}
    </div>
  );
} 


export default App;
