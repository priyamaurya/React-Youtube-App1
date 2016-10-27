//create a new component 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideosList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = "AIzaSyAOgwON3BICFUH-YTHZrrZx0S2TdzI3dKU";

class App extends Component {

   constructor(props){
   	super(props);

   	this.state = {
   		videos: [],
   		selectedVideo : null
   	};


   this.videoSearch('kapilSharma');
}

  

videoSearch (term){
	 	YTSearch({ key: API_KEY, term: term }, (videos)=> {
    
       this.setState({
       	videos:videos,
       	selectedVideo : videos[0]

       });

    });

   
}

    render() {
        return ( 
        	< div >
               <SearchBar onSearchTermChange={term => this.videoSearch(term)}/ >
               <VideoDetail video ={this.state.selectedVideo} />
               <VideosList
               onVideoSelect = {selectedVideo => this.setState({selectedVideo})}   
					
               videos = {this.state.videos}/>


            < /div>);
        }
    }


ReactDOM.render( < App / > , document.querySelector(".container"));
