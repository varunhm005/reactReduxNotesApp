import './App.css';
import Home from './components/pages/home';
import Search from './components/pages/search';

import Sidebar from './components/sidebar/sidebar';
import Task from './components/pages/task'
import Notes from "./components/pages/notes"
import Archive from "./components/pages/archive"
import Bin from "./components/pages/bin"
import { TaskProvider } from './Contexts/task.context';
import { NoteProvider } from './Contexts/note.context';
import { Provider } from "react-redux";
import store from "../src/Redux/store";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
      <TaskProvider>
      <NoteProvider>
      <div className="App">
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/notes" element={<Notes />}></Route>
          <Route exact path="/task" element={<Task />}></Route>
          <Route exact path="/archive" element={<Archive />}></Route>
          <Route exact path="/bin" element={<Bin />}></Route>
        </Routes>
      </div>
      </NoteProvider>
      </TaskProvider>
      </Provider>
    </Router>
  );
}

export default App;
