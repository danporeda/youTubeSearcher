import { useState } from 'react';
import SearchBar from "./searchBar";
import youTube from "../apis/youTube";
import VideoList from './VideoList';

function App() {
  const [videos, setVideos] = useState([]);

  const onFormSubmit = async (term) => {
    const res = await youTube.get('/search', {
      params: {
        q: term
      }
    });
    
    console.log(res.data.items)
    setVideos(res.data.items);
  }

  return <div>
    <div className="ui container">
    <SearchBar onSubmit={onFormSubmit} />
    </div>
    <VideoList videos={videos} />
  </div>
    
    
}

export default App;