import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  // console.log("Navbar User", user);
  // console.log("GoogleSign In User", googleSignIn)
  // console.log("Logout User", logOut)

  const handelSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  const handelSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex ">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handelSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handelSignIn} className="p-2 cursor-pointer">
            SignUp
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome , {user.displayName}</p>
          <p className="cursor-pointer" onClick={handelSignOut}>
            SignOut
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
