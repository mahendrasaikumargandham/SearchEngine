import React, { useState } from 'react'
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons = false }) {
    const [{_}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }
    console.log(_);
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon className="search_MicIcon" />
            </div>
            {!hideButtons ? (
            <div className="search_buttons">
                <Button type="submit" onClick={search} variant="outlined">Global Search</Button>
                <Button variant="outlined">Instant Search</Button>
            </div>
            ): (
            <div className="search_buttons">
                <Button className="search_buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="search_buttonsHidden" variant="outlined">I'm feeling lucky</Button>
            </div>
            )}
            
        </form>
    )
}

export default Search
