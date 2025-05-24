import React from "react";
import { MdLocationOn, MdTipsAndUpdates } from "react-icons/md";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";
import { useLoaderData } from "react-router";

const ExploreGardeners = () => {
  const gardeners = useLoaderData();
  
  return (
    <div className="text-accent-content text-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary">
              Explore Gardeners
          </h2>
          <p className=" mt-2 max-w-2xl mx-auto text-base ">
          Explore the talented gardeners from across Bangladesh who are growing green dreams in balconies, rooftops, and backyards. Learn from their expertise and discover your inspiration!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
      {gardeners.map((gardener) => (
        <div
          key={gardener._id}
          className="rounded-2xl shadow-primary/40 hover:shadow-lg transition-all duration-500 hover:scale-102 border border-primary/40 hover:border-primary p-4 bg-base-100 "
        >
          <div className="px-5 ">
            <img
              src={gardener.image}
              alt={gardener.name}
              className={`w-full h-52 object-cover object-top  rounded-xl `}
            />
          </div>

          <div className="mt-3 space-y-1">
            <h2 className="text-xl font-bold text-secondary">
              {gardener.name}
            </h2>
            <p>{gardener.experience}</p>
            <div>
              <p>
                <MdLocationOn className="inline text-red-700" />{" "}
                {gardener.location} <br />
                {gardener.gender === "Female" ? (
                  <PiGenderFemaleBold className="inline" />
                ) : (
                  <PiGenderMaleBold className="inline" />
                )}{" "}
                {gardener.gender} |  {gardener.age} years old
                <br />
                <MdTipsAndUpdates className="inline text-yellow-500"/> Tips shared: {gardener.totalTips}
              </p>
            </div>

            {gardener.status === "active" && (
              <p className="text-xs font-medium text-green-500">
                Active Gardener
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ExploreGardeners;
