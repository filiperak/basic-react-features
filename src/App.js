import './App.css';
import StarRating from './components/StarRating';
import Theme from './components/ThemeChanger';
import { ThemeContextProvider } from './components/ThemeChanger/Context';
import Accordian from './components/acordian/index';
import BarCode from './components/barCode';
import ImageSlider from './components/imageSlider';
import LoadMore from './components/loadMore';
import RandomColor from './components/randomColor/index';
import ScrolllIndicator from './components/scrollIndicator';
import SearchAPI from './components/searchAutoComplete';
import TreeView from './components/treeMenu';
import menus from './components/treeMenu/data';



function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating numStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>
      <LoadMore/>
      <TreeView menus={menus}/>
      <BarCode/>
      <ThemeContextProvider>
        <Theme/>
      </ThemeContextProvider>
      <ScrolllIndicator url={'https://dummyjson.com/products'}/>
      <SearchAPI/>
    </div>
  );
}

export default App;
