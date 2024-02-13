import { Routes, Route } from "react-router-dom"
import './App.css';
import CreateTask from "./Components/CreateTask/CreateTask";
import CheckStatus from "./Components/CheckStatus/CheckStatus";
import ListTasks from "./Components/ListTasks/ListTasks";

function App() {
  return (
    <div className="App">
            <Routes>
        <Route path="/create" element={ <CreateTask/> } />
        <Route path="/status" element={ <CheckStatus/> } />
        <Route path="/" element={ <ListTasks/> } />
      </Routes>
    </div>
  );
}

export default App;
