import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="bg-white shadow-md px-5 py-3 font-sans">
      <nav className="flex justify-between items-center mx-auto w-10/12">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={40} height={30}></Image>
        </Link>
        <div className="flex gap-5">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="cursor-pointer">
                  {" "}
                  Logout
                </button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
