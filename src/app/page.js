import Image from 'next/image'
import Sidebar from './/component/Sidebar';
import Feed from './component/Feed';

export default function Home() {
  return (
    <main className="bg-[#f0f2f5] grid grid-cols-2 sm:grid-cols-3 pt-3 relative z-[0] ">
    	<Sidebar/>
    	<Feed/>	
    </main>
  )
}
