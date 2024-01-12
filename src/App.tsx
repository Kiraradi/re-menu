import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import DriftPage from "./components/DriftPage/DriftPage";
import ForzaPage from "./components/ForzaPage/ForzaPage";
import TimeAttackPage from "./components/TimeAttackPage/TimeAttackPage";


export default function App() {
  return (
    
    <>
      <nav className="menu">
        <NavLink className='menu__item' to='/'>Главная</NavLink>
        <NavLink className='menu__item' to='/drift'>Дрифт-такси</NavLink>
        <NavLink className='menu__item' to='/timeattack'>Time Attack</NavLink>
        <NavLink className='menu__item' to='/forza'>Forza Karting</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/drift" element={<DriftPage/>}/>
        <Route path="/timeattack" element={<TimeAttackPage/>}/>
        <Route path="/forza" element={<ForzaPage/>}/>
      </Routes>
    </>
    
  );
}

