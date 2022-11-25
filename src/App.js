import './App.css';
import Header from './components/Header.js';
import { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Foods from './components/Foods';
import Recipie from './components/Recipie';
import Footer from './components/Footer';


function App() {

  const [food, setfood] = useState([]);
  const [showRecipie, setshowRecipie] = useState(false);
  const [id , setId] = useState();
  
  const [typed , setTyped] = useState([]);

  useEffect(() => {
    
  async  function fetchData() {
      await fetch('https://api.spoonacular.com/recipes/random?apiKey=d139b0a1dacb4360a10201e54cc28279&number=15')           //api for the get request
    .then(response => response.json())
    .then(data => setfood(data.recipes));

    }

    fetchData()
   
  }, [])
  

  return (
    <div className="App">
       <Header setSearch = {setfood} setTyped={setTyped} typed = {typed}/>
        <Intro />
        <Foods food = {food} setshowRecipie = {setshowRecipie} setId = {setId}/>
        {showRecipie ? <Recipie setshowRecipie = {setshowRecipie} foods = {food} id = {id} /> : ""}
        <Footer />
    </div>
  );
}

export default App;
