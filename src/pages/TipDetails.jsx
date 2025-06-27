import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { FaCircleArrowLeft, FaHeart } from "react-icons/fa6";
import { TbFileDescription } from "react-icons/tb";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const TipDetails = () => {
  const { user } = use(AuthContext);
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
    totalLiked,
  } = useLoaderData();
  const [like, setLike] = useState(totalLiked || 0);
  const navigate = useNavigate()

  const handleCountLike = (id) => {
    fetch(`https://green-hub-server.vercel.app/share-tips/${id}`, {
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
          setLike((prev) => prev + 1);
        } else {
          toast.error("something wrong, try later");
        }
      });
  };

  return (
    <div className=" mx-auto px-3 md:px-5 text-accent-content">
      <p onClick={() => navigate(-1)}>
        <FaCircleArrowLeft size={25} className="text-primary mb-5" />
      </p>
      <div className="bg-primary/10 p-5 md:p-8 py-8 rounded-xl shadow-xs shadow-primary/50 hover:shadow-lg duration-500 transition-all ">
        <div className="flex flex-col lg:flex-row  gap-5 xl:gap-10 justify-center lg:items-center">
          {/* Image */}
          <div>
            <img
              src={photo}
              alt={title}
              className=" rounded-lg md:max-w-[500px] xl:max-w-[480px]"
            />
          </div>
          <div className="space-y-6 ">
            {/* Title & Info */}

            <div className=" space-y-4">
              <h2 className="text-xl sm:text-2xl  md:text-3xl font-bold text-secondary">
                {title}
              </h2>
              <div className="flex gap-3 items-center  border-y border-y-gray-300 py-4 ">
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className=" md:text-lg font-semibold ">{name}</h3>
                  <p className="text-xs">{email}</p>
                </div>
              </div>
            </div>

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
              <div>
                <h4 className="text-xl mb-1 font-bold flex gap-1 items-center"> <TbFileDescription size={25} className="text-yellow-500"/>Description</h4>
                <p className=" leading-relaxed text-sm">{description}</p>
              </div>

              {/* Like Button (placeholder for now) */}
              <div className="flex items-center justify-center ">
                <button
                  onClick={() => handleCountLike(_id)}
                  className="btn btn-sm btn-ghost bg-transparent"
                >
                  <FaHeart size={20} className="text-red-600" />
                </button>
                <p className="flex gap-1">
                  {like > 0 && like} <span>{like > 1 ? "Likes" : "Like"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
