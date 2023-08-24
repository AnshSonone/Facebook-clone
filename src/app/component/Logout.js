"use client"

import Avatar from '@mui/material/Avatar';
import {useSession, signOut} from "next-auth/react";

export default function Logout() {

	const { data: sessionData } = useSession();
	
	return (
		<div>
			 {sessionData ? (
                <Avatar
                    className='cursor-pointer'
                    src={sessionData.user.image}
                    alt='profile'
                    onClick={() => signOut()}
                />
            ) : (
                <Avatar className='cursor-pointer'/>
            )}
		</div>
	)
}
