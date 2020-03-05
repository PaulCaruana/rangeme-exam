import React, {useState, useEffect} from "react";
import ImageList from "./ImageList";
import searchImages from "../data/searchImages";
import useGlobalState from "../data/globalState";
import useDebounce from '../utilities/useDebounce';

function SearchBar() {
    const [isSearching, setIsSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useGlobalState('searchTerm');
    const [images, setImages] = useGlobalState('images');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            // Make sure we have a value (user has entered something in input)
            if (debouncedSearchTerm) {
                // Set isSearching state
                setIsSearching(true);
                fetchImages(debouncedSearchTerm)
                setIsSearching(false);
            } else {
                setImages([]);
            }
        },
        [debouncedSearchTerm]
    );

    const fetchImages = async (search) => {
        const imageData = await searchImages(search)
        setImages(imageData);
    };

    const onInputChange = e => {
        setSearchTerm(e.target.value);
    };

    return (
            <section>
                <form>
                    <div>
                        <input
                            className="ui-input"
                            placeholder="Type to search Flickr..."
                            type="search"
                            value={searchTerm}
                            onChange={onInputChange}
                        />
                    </div>
                </form>
                <ImageList items={images}/>
            </section>
     )

}

export default SearchBar;