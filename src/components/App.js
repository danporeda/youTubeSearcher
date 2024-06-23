import { useState } from 'react';
import SearchBar from "./searchBar";
import youTube from "../apis/youTube";
import VideoList from './VideoList';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onFormSubmit = async (term) => {
    const res = await youTube.get('/search', {
      params: {
        q: term
      }
    });
    
    setVideos(res.data.items);
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return <div>
    <div className="ui container">
    <SearchBar onSubmit={onFormSubmit} />
    </div>
    <VideoList onVideoSelect={onVideoSelect} videos={videos} />
  </div>
    
    
}

export default App;