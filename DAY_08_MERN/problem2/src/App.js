import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './components/themeprovider';
import { ThemeSwitcher } from './components/themeswitcher';
import Header from './components/header';
import { UserForm } from './components/userform';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeSwitcher/>
        <Header/>
        <UserForm/>
      </ThemeProvider>
    </div>
  );
}

export default App;
