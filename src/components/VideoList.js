import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key={video.etag} video={video} />
  })

  return <div className="ui list">
    {renderedVideos}
    </div>
}

export default VideoList;