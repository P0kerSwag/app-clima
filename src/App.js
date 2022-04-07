import './App.css';
import React,{useState } from 'react';

const api ={
  key: "23a3cc0902fe7b8c8192a2f8fbc5be9c",
  base: "https://api.openweathermap.org/data/2.5/",

}

function App() {
  const [query, setQuery] =useState('');
  const [weather, setWeather] = useState({});

  const search = evt =>{
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result =>{
        setWeather(result);
        setQuery('');
        console.log(weather);      
      });
  
    }
  }



  const dateBuilder = (d) => {
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
  return (
    <div className="App calor">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Digite a cidade..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <div>
            <div className='location-box'>
              <div className='location'>Taubaté, Brasil</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
             <div className='weather-box'>
               <div className='temp'>
                 15*C
               </div>
             </div>
              <div className='weather'>
                Sunny
              </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
