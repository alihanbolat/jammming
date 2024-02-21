import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;
