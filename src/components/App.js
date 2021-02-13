import '../css/App.css';
import MainOuter from './MainOuter';
import React, {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState([]);
  
  const getData = () =>{

    fetch('data.json'
    ,{
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(myJson){
      return setData(myJson);
    });
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <>
    {
      data && Object.keys(data).length > 0 && <MainOuter heroes={data.heroes}/>
    } 
    </>
  );
}

export default App;
