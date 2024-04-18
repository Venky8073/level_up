import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './contextApi/contextprovider';
import { Themechanger } from './components/themechanger';
import { Header } from './components/header';

function App() {
  const {theme}=useContext(ThemeContext)
  console.log(theme)
  return (
    <div className={"App "+theme}>
      <Header/>
      <Themechanger/>
    </div>
  );
}

export default App;
