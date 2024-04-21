import './App.css';
import StarRating from './components/StarRating';
import Accordian from './components/acordian/index';
import RandomColor from './components/randomColor/index';

function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating numStars={10}/>
    </div>
  );
}

export default App;
