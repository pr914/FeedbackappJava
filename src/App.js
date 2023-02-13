
import './App.css';
import FeedBackForm from './components/FeedBackForm';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { FeedBack } from './FeedBack';
import {
  BrowserRouter as Router,
Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Router>
      <Routes>
         <Route path="/feedback" element={<FeedBackForm />}></Route>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
