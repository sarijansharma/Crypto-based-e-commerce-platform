import './App.css';
import Search from './components/SearchBarMain';
import ItemBox from './components/item';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <div>
      <header>
        <Search showSearchBar={true}/>
        <ItemContainer />
      </header>
    </div>
  );
}

export default App;
