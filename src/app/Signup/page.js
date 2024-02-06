"use client";

import Image from "next/image";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { login } from "@/store/slice";
import { useRouter } from "next/navigation";
import { cookies } from "next/dist/client/components/headers";
import { Cookie } from "next/font/google";

const Signup = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      let res = await signInWithPopup(auth, provider);
      let data = dispatch(
        login({
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        })
      );
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-36">
        <Image src="/facebook.png" width={100} height={100} alt="pic" />
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl font-bold"
          onClick={signIn}
        >
          Signup with facebook
        </button>
      </div>
    </div>
  );
};

export default Signup;
