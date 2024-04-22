import './App.css';
import StarRating from './components/StarRating';
import Accordian from './components/acordian/index';
import ImageSlider from './components/imageSlider';
import LoadMore from './components/loadMore';
import RandomColor from './components/randomColor/index';

function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating numStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>
      <LoadMore/>
    </div>
  );
}

export default App;
