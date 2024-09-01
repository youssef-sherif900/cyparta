"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setCookie } from "cookies-next";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible , setVisible] = useState(false)
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in both Field");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        { email, password }
      );

      console.log("data =", data);

      const { refresh, access } = data;
      setCookie("accessToken", access, { path: "/" });
      setCookie("refresh", refresh, { path: "/" });
      if (access || refresh) {
        router.push("profile");
      } else {
        setError("Wrong password or Email");
      }
    } catch (e) {
      console.log("Login failed:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-8 p-24">
      <Image height={102} width={225} src="/image.png" alt="company pic" />

      <form className="shadow-lg w-1/2 p-10 rounded-md" onSubmit={handleSubmit}>
        <div className="py-3">
          <label className="text-sm ml-1 " htmlFor="">
            Email Address
          </label>
          <Input
            className="p-4 h-12 mt-1"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-3">
          <label className="text-sm ml-1" htmlFor="">
            Password
          </label>
          <div className=" relative">
            <Input
              className="p-4 h-12 mt-1"
              type={visible ? "text" : "password"  }
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute right-2 top-3  hover:cursor-pointer`}
              onClick={()=>{setVisible(prev=>!prev)}}
            >
              <path
                d="M14.53 9.97L9.47004 15.03C8.82004 14.38 8.42004 13.49 8.42004 12.5C8.42004 10.52 10.02 8.92 12 8.92C12.99 8.92 13.88 9.32 14.53 9.97Z"
                stroke="#808080"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.82 6.27C16.07 4.95 14.07 4.23 12 4.23C8.46997 4.23 5.17997 6.31 2.88997 9.91C1.98997 11.32 1.98997 13.69 2.88997 15.1C3.67997 16.34 4.59997 17.41 5.59997 18.27"
                stroke="#808080"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.42004 20.03C9.56004 20.51 10.77 20.77 12 20.77C15.53 20.77 18.82 18.69 21.11 15.09C22.01 13.68 22.01 11.31 21.11 9.9C20.78 9.38 20.42 8.89 20.05 8.43"
                stroke="#808080"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5099 13.2C15.2499 14.61 14.0999 15.76 12.6899 16.02"
                stroke="#808080"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.47 15.03L2 22.5"
                stroke={!visible?"#808080":""}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 2.5L14.53 9.97"
                stroke={!visible?"#808080":""}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {error && <p className="text-red-600">*{error}</p>}
        <div className="flex justify-center py-3">
          <Button type="submit" className="w-[14rem] h-10">
            {loading ? "Loading..." : "Login"}
          </Button>
        </div>
      </form>
    </main>
  );
}
