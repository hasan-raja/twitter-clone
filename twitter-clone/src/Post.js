import React from 'react';
import {Avatar } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import './Post.css';

function Post(
    {
        displayName,
        username,
        verified,
        /* timestamp, */
        text,
        image,
        avatar
    }
) {
    return (
        <div clasName="post">
            <div className="post__avatar">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar> 
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Ajmal<span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Any text</p>
                    </div>
                    <img src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fwallpaperswide.com%2Fdownload%2Fassassins_creed_brotherhood_4-wallpaper-2560x1440.jpg&imgrefurl=http%3A%2F%2Fwallpaperswide.com%2Fassassins_creed_brotherhood_4-wallpapers.html&tbnid=A5vBLRfJaTq9RM&vet=12ahUKEwipq5z428ftAhU73XMBHeUyDaUQMygBegUIARCiAQ..i&docid=6OqAWWHNcPB4jM&w=2560&h=1440&q=assassin%27s%20creed%20brotherhood%20wallpaper&hl=en&ved=2ahUKEwipq5z428ftAhU73XMBHeUyDaUQMygBegUIARCiAQ" alt="aj"></img>
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post;
