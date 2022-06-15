
import './App.css';
import { Header } from './components';
import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import { Home } from './pages';
function App() {
  return (
    <div className="">
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
