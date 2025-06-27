import React, { use, useEffect, useState } from 'react';
import Stats from './Stats';
import { AuthContext } from "../context/AuthContext";
import UserProfile from './UserProfile';

const DashboardHome = () => {
     const { user } = use(AuthContext);
  const [tips, setTips] = useState([]);
  const [totalTips, setTotalTips] = useState([]);

  useEffect(() => {
    // my tips
    fetch("https://green-hub-server.vercel.app/share-tips")
      .then((res) => res.json())
      .then((data) => {
        const myTips = data.filter((tip) => tip.email === user.email);
        setTips(myTips.length);
      });
    //total tips
    fetch("https://green-hub-server.vercel.app/share-tips/public")
      .then((res) => res.json())
      .then((data) => setTotalTips(data.length));
  }, [user.email]);
    return (
        <div>
            {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-content mb-10 roboto text-left">
          Hi! <span className='font-extrabold bg-linear-to-r from-green-600 to-green-200 bg-clip-text text-transparent'>{user.displayName}</span> , Welcome Back
        </h2>

            <div className="flex flex-col md:flex-row justify-evenly gap-5">
                <Stats totalTips ={totalTips} tips ={tips}/>
                <div className="md:border-r border-r-primary/80 pr-10"></div>
                <UserProfile user={user} tips={tips}/>
            </div>
        </div>
    );
};

export default DashboardHome;