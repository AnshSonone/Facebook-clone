"use client";

import SliderRow from "./SliderRow";
import Avatar from "@mui/material/Avatar";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import RestoreIcon from "@mui/icons-material/Restore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FlagIcon from "@mui/icons-material/Flag";
import EventIcon from "@mui/icons-material/Event";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slice";

export default function Sidebar() {
  const newUser = useSelector(selectUser);

  return (
    <div className="hidden sm:block p-3 w-[fit-content] sticky top-[0%]">
      <div className="flex items-center sm:block space-y-2 ">
        {newUser && (
          <SliderRow
            icon={
              <Avatar
                sx={{ width: "30px", height: "30px" }}
                src={newUser ? newUser.photoURL : null}
              />
            }
            title={newUser ? newUser.displayName : "Name"}
          />
        )}
        <SliderRow
          icon={<PeopleOutlineIcon className="w-7 h-7 text-blue-400 " />}
          title="Find friends"
        />{" "}
        <SliderRow
          icon={<ContactEmergencyIcon className="w-7 h-7 text-blue-500" />}
          title="Feed"
        />
        <SliderRow
          icon={<GroupsIcon className="w-7 h-7 text-blue-400" />}
          title="Groups"
        />
        <SliderRow
          icon={<StorefrontIcon className="w-7 h-7 text-blue-400" />}
          title="Marketplace"
        />
        <SliderRow
          icon={<OndemandVideoIcon className="w-7 h-7 text-blue-400" />}
          title="Video"
        />
        <SliderRow
          icon={<RestoreIcon className="w-7 h-7 text-blue-400" />}
          title="Memories"
        />
        <SliderRow
          icon={<BookmarkIcon className="w-7 h-7 text-blue-400" />}
          title="Saved"
        />
        <SliderRow
          icon={<FlagIcon className="w-7 h-7 text-blue-400" />}
          title="Pages"
        />
        <SliderRow
          icon={<EventIcon className="w-7 h-7 text-blue-400" />}
          title="Events"
        />
        <SliderRow
          icon={
            <KeyboardArrowDownIcon className="hidden sm:block w-7 h-7 bg-gray-100 rounded-full" />
          }
          title="See more"
        />
      </div>
    </div>
  );
}
