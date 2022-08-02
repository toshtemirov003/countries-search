import { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./Components/search.css";
import Cards from "./Components/Cards";
import "./app.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState([]);
  const [region, setRegion] = useState([]);

  useEffect(() => {
    if (value.length) {
      fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    } if (region.length) {
      fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    } else {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    }
  }, [region, value]);

  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="search-wrapper search container">
          <input
            onKeyUp={(evt) => {
              if (evt.code === "Enter") {
                setValue(evt.target.value);
                evt.target.value = "";
              }
            }}
            className="search__input"
            type="search"
            placeholder="Search for a country…"
          />
          <select
            onChange={(evt) => {
              if (evt.value === countries.region) {
                setRegion(evt.target.value);
              }
            }}
            defaultValue="default"
            className="search__select"
          >
            <option defaultValue="default" selected disabled>Filter By Region</option>
            <option defaultValue="Africa">Africa</option>
            <option defaultValue="America">America</option>
            <option defaultValue="Asia">Asia</option>
            <option defaultValue="Europe">Europe</option>
            <option defaultValue="Oceania">Oceania</option>
          </select>
        </div>

        <ul className="list">
          {countries.map((el) => (
            <Cards
              key={el.name.official}
              capital={el.capital}
              region={el.region}
              population={el.population}
              name={el.name.common}
              img={el.flags.png}
            />
          ))}
        </ul>

        {/* <ul>
        {countries.map((el) => (
          <Cards
            capital={el.capital}
            region={el.region}
            population={el.population}
            name={el.name}
            img={el.img}
            id={el.id}
          />
        ))}
      </ul> */}

        {/* <ul className="list">
          <Cards capital="Berlin" region="Europe" population="81,770,900" img={Germany} />
          <Cards capital="Washington, D.C." region="Americas" population="323,947,000" img={Usa} />
          <Cards capital="Brasília" region="Americas" population="206,135,893" img={Brazil} />
          <Cards capital="Reykjavík" region="Europe" population="334,300" img={Iceland} />
          <Cards capital="Kabul" region="Asia" population="27,657,145" img={Afgan} />
          <Cards capital="Mariehamn" region="Europe" population="28,875" img={Aland} />
          <Cards capital="Tirana" region="Europe" population="2,886,026" img={Albaniya} />
          <Cards capital="Algiers" region="Africa" population="40,400,000" img={Algeria} />
        </ul> */}
        {/* </div> */}

        {/* <div>
        <input onChange={func} type="text" placeholder="text"/>
        <h1>{value}</h1>
      </div> */}
        {/* <>
        <button onClick={()=>{
          setCount(count + 1)
        }}>Increment</button>
        <button onClick={() => {
          setCount(count - 1)
        }}>Decrement</button>
        <h1>{count}</h1> */}
      </div>
    </div>
  );
}

export default App;
