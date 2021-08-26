import React from 'react';
import Tab from '@material-ui/core/Tab';
import './Footer.css';


function Footer() {
    return (
        <div >
            <div className='footer'>
                <button onclick>技术</button>
                <button onclick>关于</button>
                <button onclick>帮助文档</button>
                <button onclick>FAQ</button>
                <button onclick>API</button>
            </div>
        </div>
    )
}

export default Footer;

