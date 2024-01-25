"use client";

import Story from "./Story.js";
import InputBox from "./InputBox.js";
import Widget from "./Widget.js";
import Post from "./Post.js";
import { useState, useEffect } from "react";
import { db } from "../../../firebase.js";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { collection } from "firebase/firestore";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const getCollectionRef = collection(db, "posts");
        const orderedPost = await query(getCollectionRef, orderBy("time", "desc"));
        await onSnapshot(orderedPost, (snapshot) => {
          const newdata = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setPosts(newdata);
          // console.log(newdata);
        });
      } catch (err) {
        console.error(err);
      }
    };
    getPost();
  }, [posts]);

  return (
    <div className="absolute sm:left-[27%] md:left-[27%] top-[3%] sm:top-[4%] ">
      <Story />
      <InputBox />
      <Widget />
      {posts.map(({ id, data: { name, message, profile, photo, time } }) => {
        const postDate = time && time.seconds * 1000;
        const currentDate = Date.now();
        const timeDiff = currentDate - postDate;
        const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        return (
          <Post
            key={id}
            name={name}
            message={message}
            profile={profile}
            photo={photo}
            time={`${Math.floor((daysAgo / 24) * 60)} day${
              daysAgo !== 1 ? "s" : ""
            } ago`} // Display the number of days ago
          />
        );
      })}
    </div>
  );
}
