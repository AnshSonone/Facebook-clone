"use client"
import Header from "@/app/component/Header";
import Siderbar from "@/app/component/Sidebar";
import Feed from "./component/Feed";
import { useSelector } from "react-redux";
import {selectUser} from '@/store/slice'
import Signup from "./Signup/page";
import { Suspense } from "react";

export default function Home() {

  const newUser = useSelector(selectUser)

  return (
    <>
    { !newUser ? <Signup/> :
    <div>
    <Header />
    <main className="bg-[#f0f2f5] h-screen sm:grid sm:grid-cols-3 pt-3 relative z-[0] w-screen">
      <Siderbar />
      <Feed />
    </main>)
    </div>
  }
  </>
  );
}
