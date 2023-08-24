 'use client'
 
 import {useRef, useState} from 'react';
 import Avatar from '@mui/material/Avatar';
 import VideocamIcon from '@mui/icons-material/Videocam';
 import PhotoIcon from '@mui/icons-material/Photo';
 import MoodIcon from '@mui/icons-material/Mood';
 import {db, storage} from '@/../firebase';
 import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import {useSession} from "next-auth/react";
import {
  serverTimestamp,
   collection, addDoc, setDoc 
} from "firebase/firestore";


 export default function InputBox() {
 
 	const {data : sessionData} = useSession()
 	const inputRef = useRef(null);
 	const fileRef = useRef(null);
 	const [imageToPost, setImageToPost] = useState(null);
 	
 	const sendPost =  (e) => {
 		e.preventDefault();
 		
 		if(!inputRef.current.value) return;
      		try {
        	const collectionRef = collection(db, "posts");
        	addDoc(collectionRef, {
          	name : sessionData.user.name,
          	message : inputRef.current.value,
          	image : sessionData.user.image,
          	time: serverTimestamp(),
        	}).then( (doc) => {
        		if(imageToPost) {
        			const storageRef = ref(storage, `posts/${doc.id}`)
        		const uploadTask = uploadBytes(storageRef, 				files).then((snapshot) => {
  			console.log('Uploaded a blob or file!');
			});
        		
      		}
        	})
      		} catch (err) {
        	console.error(err);
      		}
        	removeToPost()
        	inputRef.current.value = '';
    };
 
 
 	const addToPost = (e) => {
 		const reader =  new FileReader();
 		if(e.target.files[0]){
 			reader.readAsDataURL(e.target.files[0])
 		}
 		
 		reader.onload = (readerEvent) => {
    		setImageToPost(readerEvent.target.result);
		};
	
 	}
 	
 	const removeToPost = () => {
 		setImageToPost(null);
 	}
 	
 	return (
 		<div className=" bg-white py-3 px-3 rounded-md  sm:w-auto mr-8 sm:mr-0">
 			<div className="flex items-center ">
 			<Avatar src={sessionData && sessionData.user.image} />
 			<form className="flex justify-between ml-2 border-[1px] border-gray-400 py-3 px-4 rounded-[10rem] w-full bg-gray-100" onClick={sendPost}>
 			<input
              	className="outline-none text-[14px] text-gray-600 font-bold w-full bg-gray-100"
              	type="text"
              	ref={inputRef}
              	placeholder="Start a post"
            	/>
             	<button className="transfrom hover: duratin-150 transition hover:scale-105" type="submit">
              	Post
            	</button>
            	</form>
            	{ imageToPost && (
            		<div onClick={removeToPost} className='flex flex-col hover:brightness-110 transition duration-150 transfrom hover:scale-105 cursor-pointer ml-1'>
            		<img className='h-6 object-contain' src={imageToPost} />
            		<p className='text-xs text-red-500 text-center'>remove</p>
            		</div>
            	)
            	}
            	</div>
            	<div className='flex item-center justify-between my-3 mx-2 sm:ml-12 space-x-2'>
            		<div className='flex flex-col items-center sm:flex-row hover:bg-gray-100
            		px-2 py-2 rounded-md cursor-pointer'>
            		<VideocamIcon className='text-normal text-red-500'/>
            		<button className='font-semibold text-gray-600 text-sm'>Live Video</button>
            		</div>
            		<div className='flex flex-col items-center sm:flex-row hover:bg-gray-100
            		px-2 py-2 rounded-md cursor-pointer'       				onClick={() => {fileRef.current.click()}}>
            		<PhotoIcon className='text-normal text-green-500'/>
            		<p className='font-semibold text-gray-600 text-sm cursor-pointer' 				>Photo/Video</p>
            		<input ref={fileRef} onChange={addToPost}  id='file-input' type="file" hidden />
            		</div>
            		<div className='flex flex-col items-center sm:flex-row hover:bg-gray-100
            		px-2 py-2 rounded-md cursor-pointer'>
            		<MoodIcon className='text-normal text-yellow-500'/>
            		<button className='font-semibold text-gray-600 text-sm'>Feelings/Activity</button>
            		</div>
            	</div>
        	</div>	
 	)
 }
 
