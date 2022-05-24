import { Link, Route } from 'wouter';
import './App.css';
import Detail from './pages/Details';
import Home from './pages/Home';
import SearchResults from './pages/SearchResult';
import StaticContext from './context/StaticContext';
import { GiftsContextProvider } from './context/GiftsContext';

function App() {
  return (
    <StaticContext.Provider value={{ name: 'pelledev' }}>
      <div className='App'>
        <section className='App-content'>
          <Link to='/search/panda'>Gifts de pandas</Link>
          <Link to='/search/brasil'>Gifts de brasil</Link>
          <GiftsContextProvider>
            <Route component={Home} path='/' />
            <Route component={SearchResults} path='/search/:keyword' />
            <Route component={Detail} path='/gif/:id' />
          </GiftsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
