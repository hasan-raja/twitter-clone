import React from 'react';

import './TweetBox.css';

import {Avatar ,Button} from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar> */}
                    <Avatar src="photo_2020-01-13_15-47-20.jpg"></Avatar>
                    <input placeholder="What's happening" type="text"></input>
                </div>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional:Enter image Url"
                    type="text"
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
