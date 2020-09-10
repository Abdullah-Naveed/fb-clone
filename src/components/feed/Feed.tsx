import React from "react";
import { StoryReel } from "./StoryReel";
import { MessageSender } from "./MessageSender";
import { Post } from "./Post";

export const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars3.githubusercontent.com/u/22297311?s=460&u=8ca14b7b6de0fe93fdb5bd8c16858a28f43cc932&v=4"
        message={"Wow this works!"}
        timestamp={"15min ago"}
        username={"Abdullah"}
        image={"https://miro.medium.com/max/3840/1*ivjksIhvAs7TUXbQCxAU0A.jpeg"}
      />

      <Post
        profilePic="https://avatars3.githubusercontent.com/u/22297311?s=460&u=8ca14b7b6de0fe93fdb5bd8c16858a28f43cc932&v=4"
        message={"Wow this works!"}
        timestamp={"this is a timestamp"}
        username={"Abdullah"}
      />
    </div>
  );
};
