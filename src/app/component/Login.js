'use client'

import Image from 'next/image';
import facebookLogo from '../../../public/facebook.png';
import {useSession, signIn} from "next-auth/react";

export default function Login() {

	const { data: session } = useSession()
	console.log(session)

	return (
	<div className='grid place-items-center'>
		<Image 
		src={facebookLogo}
		alt="facebook Logo"
		width={80}
		height={80}
		objectFit='contain'
		className='mt-14 mb-4'
		 />
		<h1 className='font-bold p-3 text-white rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer' onClick={() => signIn('facebook')}>Login with Facebook</h1>
		<h2>{!session ? 'unauthorized' : 'authorized'}</h2>
	</div>
	)
}
