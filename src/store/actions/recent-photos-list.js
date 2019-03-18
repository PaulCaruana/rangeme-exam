import axios from "axios";

const api_key = "f5ff73b3b7aca7f78ffb4ae8c2a39ccb";
const method = "flickr.photos.getRecent";
const extras = "owner_name,tags,description,url_q,url_l";
const per_page = 12;

const getRecentPhotosListAction = fetchResent => {
  return (dispatch, getState) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=${method}&api_key=${api_key}&per_page=${per_page}&extras=${extras}&format=json&nojsoncallback=1`
      )
      .then(res => {
        dispatch({
          type: "RECENT",
          payload: res.data.photos
        });
      })
      .catch(err =>
        dispatch({
          type: "RECENT_LIST_ERROR",
          payload: err
        })
      );
  };
};

export default getRecentPhotosListAction;
