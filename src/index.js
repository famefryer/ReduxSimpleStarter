import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAxf5_ddaZ_1dzSCljG4Qm9UDsVX-Z_nyo';



class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos : [] ,selectedVideo : null};
    YTSearch({key:API_KEY,term:'surfboard'}, (videos) => {
      this.setState({videos : videos,selectedVideo:videos[0]});
      //this.setState({videos : videos});
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
