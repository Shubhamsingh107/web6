import React, { Component } from 'react';
import NavBar2 from './NavBar2.js';
import NewsItems from './NewsItems.js';


export default class News extends Component {
  
  constructor(){
    super(); 
    this.state={
      results:[],
      loading:false,
      page:1,
    }}
    
// &page=1&pageSize=20
// &pageSize=20
// &pageSize=20


    async componentDidMount(){
let link="https://newsdata.io/api/1/news?apikey=pub_150495ed58b76009b153c3bea96d1281b57a7&country=in"
let data= await fetch(link);
let parsedData=await data.json();
this.setState  ({results:parsedData.results});
    }

    handlePrevClick = async()=>{
      console.log("clicked");
      let link=`https://newsdata.io/api/1/news?apikey=pub_150495ed58b76009b153c3bea96d1281b57a7&country=in&page=${this.state.page -1}`;
      let data= await fetch(link);
      let parsedData=await data.json();
      this.setState  ({
        page: this.state.page-1,
        results: parsedData.results
            })
            
    }

    handleNextClick = async ()=>{
      console.log("clicked");
      let link=`https://newsdata.io/api/1/news?apikey=pub_150495ed58b76009b153c3bea96d1281b57a7&country=in&page=${this.state.page +1}`;
let data= await fetch(link);
let parsedData=await data.json();
this.setState  ({
  page: this.state.page+1,
  results: parsedData.results,
      })
      console.log(this.state.page+1);
    }



       
  render() {



    return (
        <>
        <NavBar2 />
        <div className="borderN my-3">
        <h2 className="container text-center" style={{backgroundColor:"blue"}}>Top Headlines</h2>
        <div className="container my-3">
      <div className='row'>
        {this.state.results.map((element)=>{
          return(
        <div className="col-md-4" key={element.link}>
        <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.image_url} newsUrl={element.link}/>
        </div>)
        
        })}
      
      
        
      </div>
      </div>
      </div>
      <div className="newsButtons container d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} className="btn btn-primary my-3 " onClick={this.handlePrevClick}> &larr; Previous</button>
      <hr />
      <button type="button" className="btn btn-primary my-3 " onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
        </>
    )
  }
}
