
import axios from 'axios'
const API_KEY='23239463-59515e400f7789553fcdc0e8f';
const URL='https://pixabay.com/api/';
// apiexample== https://pixabay.com/api/?key=23239463-59515e400f7789553fcdc0e8f&q=yellow+flowers&image_type=photo&pretty=true&per_page=5
const Api = async (text,count) => {
    
       try {
        //    axios.get(`${URL}/?key=${API_KEY}`
      const data=  await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
    return data; 
    } catch (error) {
           console.log(error)
       }
    
   
}

export default Api   
