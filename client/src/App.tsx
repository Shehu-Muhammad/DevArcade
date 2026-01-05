import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <NavBar
        isCollapse={collapse}
        openSideBar={() => setCollapse(!collapse)}
      />
    </>
  );
}

export default App;
