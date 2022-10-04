import './App.css';
import Footbar from './components/Footbar';
import Link from './components/Link';
import Navbar from './components/Navbar';
import stage1Report from './pdfs/Stage1-entrega.pdf';

function App() {
  return (
    <div className="App">
      <a><Navbar /></a>
      <header className="App-header">
        <p>
          <Link name = 'Stage 1 Report' link = {stage1Report}/>
        </p>
      </header>
      <footer><Footbar /></footer>
    </div>
  );
}

export default App;
