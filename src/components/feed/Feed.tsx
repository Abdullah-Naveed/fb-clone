import React, { useEffect, useState } from "react";
import { StoryReel } from "./StoryReel";
import { MessageSender } from "./MessageSender";
import { Post } from "./Post";
import db from "../../firebase";

export const Feed = ({ user }: any) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot: any) => {
        //realtime snapshot of the data
        setPosts(
          snapshot.docs.map((doc: any) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender user={user} />

      {posts.map((post: any) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}
    </div>
  );
};
