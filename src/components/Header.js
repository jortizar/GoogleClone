import AppsIcon from '@material-ui/icons/Apps';
import './Header.css';
import { CgProfile } from "react-icons/cg";


function Header() {
    return(
        <div className="header-right-aligned">
            <div className="header-element">
                <a href="#">Gmail</a>
            </div>
            <div className="header-element">
                <a href="#">Images</a>
            </div>
            <div className="header-element"><AppsIcon /></div>
            <div className="header-element">
                <CgProfile size='2em'/>
            </div>
        </div>
    );
}

export default Header;