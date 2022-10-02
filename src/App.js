import './App.css';
import Header from './components/header';
import Routing from './routes';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
