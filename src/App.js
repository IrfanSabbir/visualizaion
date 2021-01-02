
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Area from './container/area'
import Covid from './container/covid'
import Author from './container/author'
import Overview from './container/overview'
import Datasourse from './container/datasource'
import Layout from './container/layout'

function App() {
  
  return (
    <div className="App">
    <Layout>
    <Switch>
      <Route path="/visual/area" exact component={Area}/>
      <Route path="/visual/covid"  exact component={Covid}/>
      <Route path="/author"  exact component={Author}/>
      <Route path="/"  exact component={Overview}/>
      <Route path="/visual"  exact component={Datasourse}/>
      <Redirect  to="/"/>
    </Switch>
    </Layout>  
    
  </div>
  );
}

export default App;
