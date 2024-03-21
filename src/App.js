import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import TVHtml from './Component/Tvalidation/TVHtml';
import Bouton from './Component/Tvalidation/Bouton/Bouton';


function App() {

  return (
    <div className="App">
          <div className="text-center"><Bouton /></div>
         <TVHtml />
    </div>
  );
}

export default App;
