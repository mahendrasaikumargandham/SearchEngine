import React from 'react';
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
// import Respose from "./response";
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
    const [{ term="tesla" }] = useStateValue();
    const { data } = useGoogleSearch(term);
    // const data = Response;

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                {/* <Link to="/">
                    <h1 className="searchPage_logo">Home</h1>
                </Link> */}
                <div className="searchPage_headerbody">
                    <Search hideButtons />
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon className="searchPage_hide" />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon className="searchPage_hide" />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon className="searchPage_hide" />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon className="searchPage_hide" />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon className="searchPage_hide" />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon className="searchPage_hide" />
                                <Link to="/more">More</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {true && (
                <div className="searchPage_results">
                <p className="searchPage_resultCount">
                    About {data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime} Seconds) for {term}
                </p>
                {data?.items.map(item => (
                    <div className="searchPage_result">
                        <a href={item.link}>
                        {item.displayLink}
                        </a>
                        <a href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage_snippet">
                            {item.snippet}
                        </p>
                    </div>
                ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage
