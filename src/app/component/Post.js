"use client";
import Avatar from "@mui/material/Avatar";
import RecommendTwoToneIcon from "@mui/icons-material/RecommendTwoTone";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

export default function Post({ name, message, profile, photo, time }) {

  const [like, setLike] = useState({ color: "gray" });
  const [count, setCount] = useState(230);

  return (
    <div className="bg-white py-2 my-2 w-screen sm:w-[70vw] md:w-[45vw] rounded-[10px] shadow-sm ">
      <div className="flex items-center mx-3 pt-[2px] cursor-pointer">
        <Avatar
          sx={{ height: "45px", width: "45px" }}
          variant="circle"
          src={profile}
        />
        <div className="ml-1">
          <div className="flex justify- items-center mt-[-4px] w-[100%]">
            <h2 className="font-bold text-[14px] hover:underline hover:text-blue-500">
              {name}
            </h2>
          </div>
          <p className="text-[12px] text-gray-500 ">{time}</p>
        </div>
      </div>
      <div className="mx-2 sm:h-[100vh]">
        <div className="my-2 ml-2 text-[14px]">
          <p>{message}</p>
        </div>
        <div className="w-[100%] bg-gray-100">
          <img
            className="w-[100vw] h-[70vh] sm:h-[95vh] object-contain py-1"
            src={photo}
            alt="post"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center">
          <RecommendTwoToneIcon
            sx={{ height: "13px", width: "13px", color: "blue" }}
            className="mt-[4px]"
          />
          <p className="text-[13px] pt-1 text-gray-500 ">{count}</p>
        </div>
      </div>

      {/*==================
       Socialtiles Section 
       ===================*/}

      <div className="flex items-center border-t-[1px] border-gray-200 px-4 my-1 sm:justify-around space-x-[75px] sm:space-x-0">
        <div
          className="flex items-center py-2 sm:px-8 rounded-md hover:sm:bg-gray-200 my-1 cursor-pointer"
          onClick={() => setCount(count + 1) || setLike({ color: "blue" })}
        >
          <ThumbUpOutlinedIcon sx={like} />
          <p className=" hidden sm:block text-[14px] font-bold text-gray-500 ml-1">
            Likes
          </p>
        </div>
        <div className=" flex items-center py-2 sm:px-8 rounded-md hover:sm:bg-gray-200 my-1 cursor-pointer">
          <ChatBubbleOutlineTwoToneIcon sx={{ color: "gray" }} />
          <p className=" hidden sm:block text-[14px] font-bold text-gray-500 ml-1">
            Comments
          </p>
        </div>
        <div className=" flex items-center py-2 sm:px-8 rounded-md hover:sm:bg-gray-200 my-1 cursor-pointer">
          <DeleteOutlineOutlinedIcon sx={{ color: "gray" }} />
          <p className=" hidden sm:block text-[14px] fon-boldtext-gray-500 ml-1">
            Delete
          </p>
        </div>
        <div className=" flex items-center py-2 sm:px-8 rounded-md hover:sm:bg-gray-200 my-1 cursor-pointer">
          <Avatar
            sx={{ width: "20px", height: "20px", color: "gray" }}
            variant="circle"
            src={profile}
          />
          <p className=" text-gray-500 ">
            <ArrowDropDownIcon sx={{ color: "gray" }} src={profile} />
          </p>
        </div>
      </div>
    </div>
  );
}
