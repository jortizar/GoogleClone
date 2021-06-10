import './MainSearch.css';
import logo from '../assets/img/logo.png'
import SearchBox from './SearchBox';
import ShortcutsBox from './ShortcutsBox';

function MainSearch () {
    
    return (
        <div className="centered">
            <img src={logo} alt="Google logo"  height="100"/>
            <SearchBox />
            <ShortcutsBox />
        </div>
    );
}
    
export default MainSearch;