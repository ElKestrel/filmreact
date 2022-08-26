import './App.css';
import Divs from './components/divs/Divs';
import Favo from './components/favo/Favo';
import Nav from './components/navbar/Nav'

function App() {
  let arr=[1,2 ,3]
  return (
    <div className="App">
      <Nav />
      <Favo />
      
      {arr.map( (sect, index) => {
        return <Divs key={index} tst={sect} />
      })}
    </div>
  );
} 


export default App;
