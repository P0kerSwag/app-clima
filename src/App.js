import './App.css';

const api ={
  key: "23a3cc0902fe7b8c8192a2f8fbc5be9c",
  base: "https://api.openweathermap.org/data/2.5/",

}

function App() {
  const dateBuilder = (d) => {
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"];

}
  return (
    <div className="App calor">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Digite a cidade..."
          />
          <div>
            <div className='location-box'>
              <div className='location'>Taubaté, Brasil</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
