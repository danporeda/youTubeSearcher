import axios from 'axios';

const KEY = 'AIzaSyDLqOTNsJw-cH5DsMge1hIbrf5k8glnW2k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY
  }
})

// async function getVideos(term) {
//   const results = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//     params: {
//       part: 'snippet',
//       maxResults: 5,
//       key: KEY,
//       q: term
//     }
//   })
// }

// export { getVideos };