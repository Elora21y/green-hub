import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce:1
  });

  return (
    <div className=" py-10 lg:py-20 ">
  <div className="max-w-6xl mx-auto px-4 text-center">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-accent-content mb-4 roboto">
      Our Green Journey in Numbers
    </h2>

    {/* Section Description */}
    <p className="text-accent-content max-w-2xl mx-auto mb-12">
      GreenHub is growing every day with amazing gardeners, learners, and nature lovers. Here’s a quick look at how we’re blooming together.
    </p>

    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-2 text-accent text-xl font-semibold"
    >
      {/* stats 1 */}
      <div className="bg-white border-2 border-green-100 hover:border-primary p-8 rounded-xl shadow-lg hover:scale-104 duration-500 transition-all">
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {inView && <CountUp end={10000} duration={6} />}+
        </h3>
        <p>Community Members</p>
      </div>

      <div className="bg-white border-2 border-green-100 hover:border-primary p-8 rounded-xl shadow-lg hover:scale-104 duration-500 transition-all">
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {inView && <CountUp end={500} duration={6} />}+
        </h3>
        <p>Gardening Tips Shared</p>
      </div>

      <div className="bg-white border-2 border-green-100 hover:border-primary p-8 rounded-xl shadow-lg hover:scale-104 duration-500 transition-all">
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {inView && <CountUp end={150} duration={6} />}+
        </h3>
        <p>Plant Species Featured</p>
      </div>

      <div className="bg-white border-2 border-green-100 hover:border-primary p-8 rounded-xl shadow-lg hover:scale-104 duration-500 transition-all">
        <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {inView && <CountUp end={98} duration={6} />}%
        </h3>
        <p>User Satisfaction Rate</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Stats