import axios from "axios";
import fetchJsonp from 'fetch-jsonp'
const FLICKR_SEARCH_API_URL = "https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags="

async function searchImages({searchTerm}){
  const url = FLICKR_SEARCH_API_URL + encodeURIComponent(searchTerm);
  const response = await fetchJsonp(
      url,
      { jsonpCallback: 'jsoncallback' }
  )
  const payload = await response.json()
  return payload.items;
}


const searchPhotos = (search = { method: 0, text: "", tags: "", page: 1 }) => {
  const api_key = "f5ff73b3b7aca7f78ffb4ae8c2a39ccb";
  const methods = ["flickr.photos.getRecent", "flickr.photos.search"];
  const method = methods[search.method] || methods[0];
  const extras = "owner_name,tags,views,description,url_q,url_l";
  const per_page = 12;
  const sort = "relevance";
  const text = search.text || "";
  const tags = search.tags || "";
  const page = 1;

  return async (dispatch, getState)  => {
    dispatch({
      type: "CLEAR",
      payload: []
    });
    const res = await searchImages("Paul")
    console.log(res)
/*
    const response = await fetchJsonp(
        `${FLICKR_SEARCH_API_URL}paul`,
        { jsonpCallback: 'jsoncallback' }
    )
    const items = await response.json()

    console.log(items)

*/
    /*
          fetchJsonp(
              `https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags=paul`,
              { jsonpCallback: 'jsoncallback' }
          )
              .then(res => res.json())
              .then(({ items }) => console.log(items))
              .catch((err) => console.log(err))
    */
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=${method}&api_key=${api_key}&sort=${sort}&page=${page}&per_page=${per_page}&extras=${extras}&text=${text}&tags=${tags}&format=json&nojsoncallback=1&safe_search=3&safe=3`
      )
      .then(res => {
        dispatch({
          type: "RESULT",
          payload: res.data.photos
        });
      })
      .catch(err =>
        dispatch({
          type: "CONNECTION_ERROR",
          payload: err
        })
      );
  };
};

export default searchPhotos;
