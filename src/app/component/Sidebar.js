"use client"

import SliderRow from './SliderRow'
import Avatar from '@mui/material/Avatar';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RestoreIcon from '@mui/icons-material/Restore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import EventIcon from '@mui/icons-material/Event';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useSession} from "next-auth/react";

export default function Sidebar() {

	const { data: sessionData } = useSession()

	return (
		<div className=' p-3 w-[fit-content] '>
			<div className='space-y-2 '>
				<SliderRow icon={<Avatar className='w-7 h-7' src={sessionData && sessionData.user.image}/>} title={sessionData && sessionData.user.name}/>
				<SliderRow icon={<PeopleOutlineIcon className='w-7 h-7 text-blue-400 '/>} title='Find friends'/>				<SliderRow icon={<ContactEmergencyIcon className='w-7 h-7 text-blue-500'/>} title='Feed'/>
				<SliderRow icon={<GroupsIcon className='w-7 h-7 text-blue-400'/>} title='Groups'/>
				<SliderRow icon={<StorefrontIcon className='w-7 h-7 text-blue-400'/>} title='Marketplace'/>
				<SliderRow icon={<OndemandVideoIcon className='w-7 h-7 text-blue-400'/>} title='Video'/>
				<SliderRow icon={<RestoreIcon className='w-7 h-7 text-blue-400'/>} title='Memories'/>
				<SliderRow icon={<BookmarkIcon className='w-7 h-7 text-blue-400'/>} title='Saved'/>
				<SliderRow icon={<FlagIcon className='w-7 h-7 text-blue-400'/>} title='Pages'/>
				<SliderRow icon={<EventIcon className='w-7 h-7 text-blue-400'/>} title='Events'/>
				<SliderRow icon={<KeyboardArrowDownIcon className='w-7 h-7 bg-gray-100 rounded-full'/>} title='See more'/>
			</div>
		</div>
	)
}
