import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import BreadCrumb from './component/BreadCrumb';
import Api from './component/Api';
import Images from './component/Images.jsx'

import Snackbars from './component/Snackbars';

function App() {
  
  const [data,setData]=useState([]);
  const[count,setCount]=useState(10);
 
  const[text,setText]=useState('book');
  const[open,close]=useState(false);

 
  useEffect(() => {
    if(count<3 || count>200){
      close(true)
      return 
    }
    close(false)
    const getData = async () => {
      await Api(text, count).then(response => {
        setData(response.data.hits);
      }); 
    }
    getData();
  }, [text, count])
  
  const onTextChange = (text) => {
    setText(text);
  }

  const onCountChange = (count) => {
    setCount(count);
  }
  return (
    <div className="App">
    <Navbar />
    <BreadCrumb onTextChange={onTextChange} onCountChange={onCountChange}/>
   <Images data={data}/>
   <Snackbars open={open} close={close}/>

    </div>
  );
}

export default App;
