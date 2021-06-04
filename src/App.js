import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
     <div className="container">
       <h1>what are you looking for?</h1>
       <Dictionary />
     </div>
     <footer><a href="https://github.com/xhenixhelilaj/dictionary-react-project" rel="noreferrer" target="_blank">Open-sourced</a> on Github</footer>
    </div>
  );
}

export default App;
