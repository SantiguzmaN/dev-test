
import { Route, Router } from 'react-router-dom';
import Pages from './router/pages';
import history from '../history';
import ApiProvider from '../store/apiProvider';
import '../App.css';

function App() {
  return (
    <ApiProvider>
      <Router history={history}>
        <Route component={Pages} />
      </Router>
    </ApiProvider>
  );
}

export default App;
