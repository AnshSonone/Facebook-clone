import { VerticalAlignBottom } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

export default function StorieCard({ src, name, profile }) {

  return (
    <div className="relative cursor-pointer mr-2">
      <Avatar
        className="relative z-50 top-[8%] left-[5%] "
        src={profile}
        sx={{width: 60, height: 60, position: `${screen.width >= 640 ? "absolute" : "relatvie"}` }}
        alt="profile"
      />
      <Image
        className="hidden sm:block rounded-lg aspect-[5/9]"
        src={src}
        width={120}
        height={120}
        alt="story"
      />
      <p className="font-bold sm:text-white text-xs absolute 	top-[80%] left-[5%] text-black mt-4 sm:mt-0 whitespace-nowrap">
        {name.substr(0, 7) + "..."}
      </p>
    </div>
  );
}
