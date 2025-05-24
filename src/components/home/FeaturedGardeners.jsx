import React from "react";
import { MdLocationOn, MdTipsAndUpdates } from "react-icons/md";
import { useLoaderData } from "react-router";

const FeaturedGardeners = () => {
  const gardeners = useLoaderData();
  // console.log(gardeners);
  return (
    <div className="py-10 bg-green-50 my-12 px-6 lg:px-10 text-accent">
     
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary">
             Featured Gardeners
          </h2>
          <p className=" mt-2 max-w-2xl mx-auto">
            Meet our top active gardeners who are inspiring communities with
            their green thumb.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {gardeners.map((gardener) => (
            <div
              key={gardener._id}
              className="bg-white rounded-2xl shadow-primary/40 hover:shadow-xl transition-all duration-500 hover:scale-103 p-5 text-center  text-sm border border-primary/40 hover:border-primary"
            >
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/70 p-1"
              />
              <h3 className="text-xl font-semibold text-green-800">
                {gardener.name}
              </h3>
              <p className="flex gap-1 items-center justify-center"><MdLocationOn className=" text-red-700" />{gardener.location}</p>
              <p className="mt-2 ">
                {gardener.experience}
              </p>
              <p className="mt-1 font-medium ">
                <MdTipsAndUpdates className="inline text-yellow-500"/> Tips Shared: {gardener.totalTips}
              </p>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default FeaturedGardeners;
