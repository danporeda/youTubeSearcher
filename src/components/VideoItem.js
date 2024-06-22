import './VideoItem.css';

function VideoItem({ video }) {
  return (
      <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <a className="header">{video.snippet.title}</a>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
  )
}

export default VideoItem;