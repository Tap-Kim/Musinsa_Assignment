import logo from './logo.svg';
import './css/App.css';
import Main from './component/Main'

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <a href="//magazine.musinsa.com"><h1 className="main-title">MUSINSA</h1></a>
      </div>
      <Main />
    </div>
  );
}

export default App;
