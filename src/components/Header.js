import AppsIcon from '@material-ui/icons/Apps';
import './Header.css';


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
                <img className="rounded" alt="Avatar" src="https://lh3.googleusercontent.com/ogw/ADea4I7Xw8SfnSzfnlOSmD2i6We_RfLwUkBnQFH4SAIy=s32-c-mo" />
            </div>
        </div>
    );
}

export default Header;