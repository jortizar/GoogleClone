import Shortcut from './Shortcut';

import './ShortcutsBox.css'

const shortcutDataList = ["(280) Youtube", "Sign In", "WhatsApp", "Projects", "Google Drive", "Inicio"];

function ShortcutsBox() {
    return(
        <div className="container">
            {
                shortcutDataList.map(element => (
                    <Shortcut title={element} />
                ))
            }
        </div>
    );
}

export default ShortcutsBox;