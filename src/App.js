import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant/Restaurant';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NoteFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/restaurant/details/:anyId' element={<MealDetails/>} />
          <Route path='/home/about' element={<About/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
