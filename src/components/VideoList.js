import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoSelect }) {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
  })

  return <div className="ui relaxed divided list">
    {renderedVideos}
    </div>
}

export default VideoList;