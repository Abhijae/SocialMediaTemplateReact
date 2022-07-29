import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Stack } from '@mui/material';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
    <Navbar/>
     

      <Stack direction="row" mt={10} spacing={1} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>

      <Add/>
    </div>
  );
}

export default App;
