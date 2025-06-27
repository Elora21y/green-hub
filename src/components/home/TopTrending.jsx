import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router';


const TopTrending = () => {
  const [topTips, setTopTips] = useState([]);

  useEffect(() => {
    fetch('https://green-hub-server.vercel.app/share-tips/top-trending')
      .then((res) => res.json())
      .then((data) => setTopTips(data));
  }, []);

  return (
    <section className="py-10 px-4 md:px-6 bg-base-200 text-accent-content my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
        Top Trending Tips
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {topTips.map((tip) => (
          <div
            key={tip._id}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <img
              src={tip.photo}
              alt={tip.title}
              className="w-96 h-56 xl:h-60 object-cover group-hover:scale-105 duration-500 transition-all"
            />

            {/* Hover Details */}
            <div className="absolute bottom-0 left-0 w-full bg-base-100 bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 rounded-t-xl">
              <h3 className="text-lg font-semibold text-secondary">{tip.title}</h3>
              <p className="text-sm  mb-1">Tips by- {tip.name}</p>
              <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-sm text-red-600">
                <FaHeart />
                <span className="text-xs  text-secondary">
                  {tip.totalLiked > 0 && tip.totalLiked}{' '}
                  {tip.totalLiked > 1 ? 'Likes' : 'Like'}
                </span>
              </div>
                <Link
                to={`/tip-details/${tip._id}`}
                className="text-secondary-content text-xs font-medium hover:underline bg-primary btn btn-sm rounded-full"
              >
                View Details<MdArrowOutward size={15}/>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTrending;
