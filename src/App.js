import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Meals from './components/AllFood/AllFood';
import AllFood from './components/AllFood/AllFood';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

export  const DetailContext = createContext()

function App() {
  const [meals, setMeals] = useState([])

  return (
    <DetailContext.Provider value={[meals, setMeals]}>
      <Header/>

      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/meals' element={ <Meals/> }></Route>
        <Route path='/details/:mealId' element={ <Details/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
      </Routes>
    </DetailContext.Provider>
  );
}

export default App;
