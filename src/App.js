import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";

function App() {
  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   const url = "https://rickandmortyapi.com/api/character";
  //   async function fetchData(url) {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCharacters(data.results);
  //     //console.log(data.results);
  //     console.log(characters);
  //   }
  //   fetchData(url);
  // }, []);

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetchData(url);
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      console.log(response);
      console.log(data);
      console.log(data.results);
      setPersons(data.results);
      console.log(persons);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
