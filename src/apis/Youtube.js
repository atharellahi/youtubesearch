import axios from 'axios'


const KEY = 'AIzaSyBkveTm1xULaOEMysGO9wzV79vG_jPdv90'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});