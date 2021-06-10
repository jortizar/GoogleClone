import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import './Shortcut.css'

function Shortcut(props) {
    return (
        <div className="shortcut-container">
            <div className="shortcut-icon-container">
                <InsertEmoticonIcon />
            </div>
            <div>
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default Shortcut;