import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import InputBase from '@material-ui/core/InputBase';

import './SearchBox.css'

function SearchBox () {
    return(
        <div className="search-box">
            <div className="search-box-icon">
                <SearchIcon />
            </div>
            <div>
            <InputBase
                placeholder="Search Google or type a URL"
                inputProps={{ 'aria-label': 'search google maps' }}
                />
            </div>
            <div className="search-box-icon">
                <MicIcon />
            </div>
        </div>
    );
}

export default SearchBox;