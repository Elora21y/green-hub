
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCircleArrowLeft, FaHeart } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const TipDetails = () => {
 
  const {
    title,
    plant,
    level,
    description,
    photo,
    category,
    availability,
    name,
    email,
    _id,
    totalLiked
  } = useLoaderData()
   const [like , setLike] = useState(totalLiked || 0)

  const handleCountLike = (id) =>{
     fetch(`http://localhost:2100/share-tips/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount) {
          toast.success("Liked");
          setLike((prev) => prev + 1)
        }
        else{
          toast.error('something wrong, try later')
        }
      });
  }

  return (
    <div className="max-w-2xl mx-auto px-3 md:px-5 text-accent-content">
      <Link to="/browser-tips">
        <FaCircleArrowLeft size={25} className="text-primary mb-5" />
      </Link>
      <div className="bg-primary/10 p-5 md:p-8 py-8 rounded-xl shadow-md shadow-primary/50 hover:shadow-lg duration-500 transition-all">
        <div className="flex md:items-center gap-5 justify-center flex-col md:flex-row">
          {/* Image */}
          <img
            src={photo}
            alt={title}
            className="h-40 md:h-52 w-40 md:w-52 rounded-full object-cover mb-6"
          />
          <div className="-mt-8 sm:mt-15 mb-5">
            <h2 className="text-2xl  md:text-3xl font-bold text-secondary mb-2">
              {title}
            </h2>
           Tips by-
        <h3 className="text-lg sm:text-xl font-semibold ">{name}</h3>
        <p>{email}</p>
          </div>
        </div>

        {/* Title & Info */}

        {/* Tags / Meta Info */}
        <div className="flex flex-wrap gap-3 mb-6 text-sm">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
            Plant: {plant}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            Category: {category}
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            Level: {level}
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
            {availability}
          </span>
        </div>

        <div className="flex items-end justify-between flex-col md:flex-row">
          {/* Description */}
          <p className="text-base leading-relaxed ">{description}</p>

          {/* Like Button (placeholder for now) */}
         <div className="flex items-center justify-center ">
           <button onClick={() => handleCountLike(_id)}
           className="btn btn-sm btn-ghost bg-transparent">
            <FaHeart size={20} className="text-red-600" /> 
          </button>
          <p className="flex gap-1">{like>0 && like} <span>{like > 1 ? 'Likes' : 'Like'}</span></p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
