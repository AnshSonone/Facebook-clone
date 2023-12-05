import Siderbar from "@/app/component/Sidebar";
import Image from "next/image";
import Feed from "./component/Feed";

export default function Home() {
  return (
    <main className="bg-[#f0f2f5] h-screen sm:grid sm:grid-cols-3 pt-3 relative z-[0] w-screen">
      <Siderbar />
      <Feed />
    </main>
  );
}
