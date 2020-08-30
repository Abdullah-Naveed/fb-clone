import React from "react";
import {Avatar} from "@material-ui/core";

interface Props {
    profilePic?: string
    image?: any
    username?: string
    timestamp?: any
    message?: string
}

export const Post = ({profilePic, image, username, timestamp, message}: Props) => {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar
                    className="post__avatar"
                    src={profilePic} />

                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>


        </div>
    )
}
