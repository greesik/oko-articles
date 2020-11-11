import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App" style={{background: '#1a1d18'}}>
      <Header/>
      <Feed/>
    </div>
  );
}

export default App;
