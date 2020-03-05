import fetchJsonp from "fetch-jsonp";

const FLICKR_SEARCH_API_URL = "https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&tags=";

export default async function searchImages(searchTerm) {
    const url = FLICKR_SEARCH_API_URL + encodeURIComponent(searchTerm);
    const response = await fetchJsonp(
        url,
        { jsonpCallback: "jsoncallback" },
    );
    const payload = await response.json();
    return payload.items;
}
