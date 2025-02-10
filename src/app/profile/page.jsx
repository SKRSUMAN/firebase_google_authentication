"use client";

import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const Page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
 
  return (
    <div className="p-4">
      {loading ? (<Spinner/>) : user ? (
        <p>
          Welcome, <span className="text-red-400">{user.displayName}</span>  - You are logged in to the Profile Page -
          a protected route.
        </p>
      ) : (
        <p>You must be Logged in to view this page - protected route.</p>
      )}
    </div>
  );
};

export default Page;
