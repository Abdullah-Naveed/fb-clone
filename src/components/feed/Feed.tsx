import React from "react";
import {StoryReel} from "./StoryReel";
import {MessageSender} from "./MessageSender";
import {Post} from "./Post";

export const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
