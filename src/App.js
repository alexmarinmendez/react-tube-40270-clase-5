import { useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Videos from './containers/Videos'

const App = () => {

  // componentDidMount 
  useEffect(() => {
    // consulta a la BBDD
    console.log('App se ha montado')
  }, [])

  return (
    <>
      <Header />
      <Videos />
    </>
  );
};

export default App;
