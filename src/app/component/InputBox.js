"use client";

import { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoIcon from "@mui/icons-material/Photo";
import MoodIcon from "@mui/icons-material/Mood";
import { db, storage } from "@/../firebase";
import { ref, uploadBytes } from "firebase/storage";
import {
  serverTimestamp,
  collection,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slice";
import { v4 } from "uuid";

export default function InputBox() {
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const newUser = useSelector(selectUser);

  const sendPost = async (e) => {
    e.preventDefault();
    if (newUser !== null) {
      if (!inputRef.current.value) return;
      try {
        const collectionRef = collection(db, "posts/");
        let sendData = await addDoc(collectionRef, {
          name: newUser.displayName,
          message: inputRef.current.value,
          profile: newUser.photoURL,
          photo: imageToPost,
          time: serverTimestamp(),
        }).then((doc) => {
          if (imageToPost !== null) {
            let postRef = ref(storage, `files/${doc.id}`);
            let postData = uploadBytes(postRef, imageToPost);

            removeImage();

            postRef
              .child(doc.id)
              .getDownloadURL()
              .then((url) => {
                collectionRef.doc(doc.id).setDoc(
                  {
                    postImage: url,
                  },
                  { merge: true }
                );
              });
          }
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please signin first");
    }
    removeToPost();
    inputRef.current.value = "";
  };

  const addToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeToPost = () => {
    setImageToPost(null);
  };

  return (
    <div className=" bg-white py-3 px-3 rounded-md w-screen sm:w-[64vw] md:w-[49vw] ">
      <div className="flex items-center ">
        <Avatar
          sx={{ height: "45px", width: "45px" }}
          src={newUser ? newUser.photoURL : null}
        />
        <form
          className="flex justify-between ml-2 border-[1px] border-gray-400 py-3 px-4 rounded-[10rem] w-[85%] sm:w-full bg-gray-100"
          onClick={sendPost}
        >
          <input
            className="outline-none text-[14px] text-gray-600 font-bold w-[60%] bg-gray-100"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind,  ${
              newUser ? newUser.displayName.split(" ")[0] : " "
            }`}
          />
          <button
            className="transfrom hover: duratin-150 transition hover:scale-105"
            type="submit"
          >
            Post
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeToPost}
            className="flex flex-col hover:brightness-110 transition duration-150 transfrom hover:scale-105 cursor-pointer ml-1"
          >
            <img className="h-6 object-contain" src={imageToPost} />
            <p className="text-xs text-red-500 text-center">remove</p>
          </div>
        )}
      </div>
      <div className="flex item-center justify-between my-3 mx-2  space-x-2">
        <div
          className="flex flex-col items-center sm:flex-row hover:bg-gray-100
            		px-2 py-2 rounded-md cursor-pointer"
        >
          <VideocamIcon className="text-normal text-red-500" />
          <button className="font-semibold text-gray-600 text-sm cursor-pointer">
            Live Video
          </button>
        </div>
        <div
          className="flex flex-col items-center sm:flex-row hover:bg-gray-100
            		px-2 py-2 rounded-md cursor-pointer"
          onClick={() => {
            fileRef.current.click();
          }}
        >
          <PhotoIcon className="text-normal text-green-500" />
          <p className="font-semibold text-gray-600 text-sm cursor-pointer">
            Photo/Video
          </p>
          <input
            ref={fileRef}
            onChange={addToPost}
            id="file-input"
            type="file"
            hidden
          />
        </div>
        <div
          className="flex flex-col items-center sm:flex-row hover:bg-gray-100
            		px-2 py-2 rounded-md cursor-pointer"
        >
          <MoodIcon className="text-normal text-yellow-500" />
          <button className="font-semibold text-gray-600 text-sm">
            Feelings/Activity
          </button>
        </div>
      </div>
    </div>
  );
}
