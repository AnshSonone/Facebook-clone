"use client";

const stories = [
  {
    name: "Elon musk",
    src: "https://i.pinimg.com/236x/e2/a3/58/e2a3586833159993ee1c6a4c52c9d22e.jpg",
    profile:
      "https://i.pinimg.com/236x/da/74/09/da74090d914ba7ba83eeb89d969c7bb6.jpg",
  },
  {
    name: "Jeff bezos",
    src: "https://i.pinimg.com/236x/2d/99/fc/2d99fc7a7662773703f3864562c254f5.jpg",
    profile:
      "https://i.pinimg.com/236x/61/ac/54/61ac540d84604d0486669f358bc858aa.jpg",
  },
  {
    name: "Ratan tata",
    src: "https://i.pinimg.com/236x/65/b0/3a/65b03aaf9eb0d77865ef5af260afc1c4.jpg",
    profile:
      "https://i.pinimg.com/236x/cb/fe/25/cbfe25decebe0416ed866fe97d75d6a0.jpg",
  },
  {
    name: "Mark zukurburg",
    src: "https://i.pinimg.com/236x/58/6f/42/586f421acf5739e2bdd42a9ff881e2e5.jpg",
    profile:
      "https://i.pinimg.com/236x/bc/7b/9a/bc7b9abb635472815289617c85a6d9b5.jpg",
  },
];

import { selectUser } from "@/store/slice";
import StoryCard from "./StoryCard";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Stories() {
  const newUser = useSelector(selectUser);

  return (
    <div className=" h-[17vh] ml-4 sm:ml-0 my-0 sm:h-[34vh] md:h-[40vh] w-[95vh] md:w-auto overflow-x-scroll overflow-y-hidden">
      <div className="flex items-center space-x-2 rounded-md ">
        {/*===========================
         { This is profile of admin} 
         ===========================*/}
        {newUser && (
          <div className="mt-4 sm:mt-0 relative">
            <Avatar
              className="sm:absolute top-[10%] left-[5%] sm:w-[3rem] sm:h-[3rem]"
              src={newUser ? newUser.photoURL : null}
              sx={{ width: "65px", height: "65px" }}
            />
            <Image
              className="hidden sm:block rounded-lg"
              src="https://i.pinimg.com/236x/2d/99/fc/2d99fc7a7662773703f3864562c254f5.jpg"
              width={120}
              height={120}
              alt="story"
            />
            <p className="font-bold sm:text-white text-xs sm:absolute top-[80%] left-[5%] text-black mt-1">
              {newUser ? newUser.displayName.substr(0, 7) + "..." : null}
            </p>
          </div>
        )}
        {stories.map((story) => {
          return (
            <StoryCard
              name={story.name}
              key={story.name}
              src={story.src}
              profile={story.profile}
            />
          );
        })}
      </div>
    </div>
  );
}
