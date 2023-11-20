import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
