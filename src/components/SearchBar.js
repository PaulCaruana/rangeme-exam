import React, {useState, useEffect} from "react";
import searchImages from "../data/searchImages";
import useDebounce from '../utilities/useDebounce';
import ImageList from "./ImageList";
import useGlobalState from "../data/globalState";




function SearchBar() {
    //const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    //const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useGlobalState('searchTerm')
    const [images, setImages] = useGlobalState('images')

    const debouncedSearchTerm = useDebounce(searchTerm, 500);


    useEffect(
        () => {
            // Make sure we have a value (user has entered something in input)
            if (debouncedSearchTerm) {

                console.log("==>", debouncedSearchTerm)
                // Set isSearching state
                setIsSearching(true);
                fetchImages(debouncedSearchTerm)
                //const imageData = await searchImages(debouncedSearchTerm)
                //setImages(imageData);
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

    const onSubmitHandler = e => {
        e.preventDefault();
    };
    const onInputChange = e => {
        setSearchTerm(e.target.value);
        //fetchImages(e.target.value)

    };
    return (
            <section>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <input
                            className="ui-input"
                            placeholder="Type to search Flickr..."
                            type="search"
                            value={searchTerm}
                            onChange={onInputChange}
                        />
                        {/*
                        <input
                            type="search"
                            placeholder="microservice, restful design, etc.,"
                            value={searchTerm}
                            onChange={onInputChange}
                        />
                        <button type="submit">Search</button>
*/}
                    </div>
                </form>
                <ImageList items={images}/>
            </section>
     )

}

export default SearchBar;