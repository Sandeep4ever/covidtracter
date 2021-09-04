import React from "react";

import {Cards, CountryPicker,Chart} from "./components/"
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {

  state ={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
   
    this.setState({data:fetchedData})
  }
        handleCountryChange = async (country) =>{
          const fetchedData = await fetchData(country);

          // this.setState({data: fetchedData,country:country})
          console.log(fetchedData);
          //fetch the data
          //set the state
        }
   
  render(){
    const {data} =this.state;
     

   return( 
   <div className={styles.container}>
     <Cards data={data}/>
     <Chart/>
     <CountryPicker handleCountryChange ={this.handleCountryChange}/>
   </div>)
  }
}

export default App;


