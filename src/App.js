import { Link, Route } from 'wouter';
import './App.css';
import ListOfGifts from './components/ListOfGifts';

function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/gift/panda'>Gifts de pandas</Link>
        <Link to='/gift/brasil'>Gifts de brasil</Link>
        <Route path='/gift/:keyword' component={ListOfGifts} />
      </section>
    </div>
  );
}

export default App;
