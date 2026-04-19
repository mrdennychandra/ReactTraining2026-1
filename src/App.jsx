import './App.css'
import Counter from './components/Counter';
import Footer from './components/Footer';
import GlobalParent from './components/GlobalParent';
import Header from './components/Header';
import Parent from './components/Parent';
import ParentZustand from './components/ParentZustand';

function App() {

  return (
    <div id='center'>
      <Header title="Header" />
      <ParentZustand />
      <Footer title="Footer" />
    </div>
  );
}

export default App;
