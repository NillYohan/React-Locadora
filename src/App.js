import './App.css';
import BarraNavegacao from './Componentes/BarraNavegacao'
import Footer from './Componentes/Footer';
import Home from './Componentes/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Catalogo from './Componentes/Catalogo';
import CadastroEUpdate from './Componentes/CadastroEUpdate';

function App() {
  return (
    <div>
      <Router>
        <BarraNavegacao/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/all" component={Catalogo}/>
          <Route path="/cadastro/:id" component={CadastroEUpdate}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
