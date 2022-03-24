import './App.css';

const api ={
  key: "23a3cc0902fe7b8c8192a2f8fbc5be9c",
  base: "https://api.openweathermap.org/data/2.5/",

}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Digite a cidade..."
          />
        </div>
      </main>

    </div>
  );
}

export default App;
