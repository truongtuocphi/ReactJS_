import './App.css';
import LanguageSelector from './components/LanguageSelector';
import ColorContext from './contexts/ColorContext';
import UserCreate from './components/UserCreate';
import LanguageStore from 'language-store';

function App() {
  return (
    <div>
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
}

export default App;
