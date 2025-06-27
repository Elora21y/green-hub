import React from 'react';
import { MdTipsAndUpdates } from 'react-icons/md';

const UserProfile = ({user , tips}) => {
    return (
            <div className=" p-5 rounded-xl flex flex-col justify-center text-center items-center gap-6 w-96 border border-primary shadow-xl bg-green-50">

  <img src={user?.photoURL || "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="} alt="profile" className="w-16 h-16  md:w-32 md:h-32 rounded-full object-cover mx-auto border-3 border-primary/70 p-1"/>
  <div className='space-y-1 text-[#425f57]'>
    <h2 className="text-xl font-bold">{user?.displayName}</h2>
    <p className="text-xs md:text-sm">{user?.email}</p>
    <p className="text-sm mt-1 flex gap-1 items-center justify-center"><MdTipsAndUpdates className="inline text-yellow-500"/> Shared Tips: <span className="font-semibold">{tips}</span></p>
    {/* <p className="text-sm">Total Likes: <span className="font-semibold">{totalLikes}</span></p> */}
  </div>
</div>


    );
};

export default UserProfile;