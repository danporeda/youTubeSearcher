import { useState, useEffect } from 'react';
import SearchBar from "./searchBar";
import youTube from "../apis/youTube";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import "@fontsource/roboto";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit('dinosaurs')
  }, [])

  const onFormSubmit = async (term) => {
    const res = await youTube.get('/search', {
      params: {
        q: term
      }
    });
    
    setVideos(res.data.items);
    setSelectedVideo(res.data.items[0]);
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className="ui container">
      <h1 className="ui header ash" 
        style={{textAlign: "center", fontFamily: "Roboto", fontWeight: 900, marginTop: "14px"}}
      >
        AsherTube
        <i className="youtube icon" style={{color: "red"}}></i>
      </h1>
      
      <SearchBar onSubmit={onFormSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
        
      </div>
    </div>
  );
    
    
}

export default App;