import './App.css';
import {useEffect, useState} from 'react';
import { isEmpty, isArray } from 'lodash';
import { usePrevious} from '../../infra/Hooks';
import Menu from '../Menu/Menu.js';
import Homepage from '../Homepage/homepage.js';

const url_path = "http://localhost:8080/en_us";
const App = () => {
  const [dictionary, setDictionary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const prevDictionary = usePrevious(dictionary);
  const getData = async (path) => {
    const data = await fetch(path)
    .then((response) => response.json())
    .then((data) => {
      // setLoading(false);
      setDictionary(data);
    })
    .catch((error) => {
      // setLoading(false);
      setError('ERROR: fetch failed');
      
    });
    return data;
  }

  useEffect(() => {
    setLoading(true);
    getData(url_path).then(()=> setLoading(!loading));
  }, []); 

   if (loading) {
    return (<div className="loading">Loading...</div>)
   }
  
  return (
    <div className="App">
      {dictionary && (
        <div>
          <Menu dictionary={dictionary}/>
          <Homepage dictionary={dictionary}/>
        </div>
      )}
    </div>
  );
}

export default App;
