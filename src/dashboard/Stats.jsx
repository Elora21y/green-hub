import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import myTips from '/tips/my-tips.png'
import gardenTips from '/tips/garden-tips.png'
import { Link } from "react-router";


const Stats = ({totalTips , tips}) => {
  //   for stats
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: 1,
  });
  console.log(tips, totalTips)

const statsData = [
    {
        title : 'Total Garden Tips',
        icon : gardenTips,
        count : totalTips,
        link : 'browser-tips'
    },
    {
        title : 'Total My Tips',
        icon : myTips,
        count : tips,
         link : 'my-tips'
    }
]
  return (
    <div>
        
        <div
          ref={ref}
          className="flex flex-row md:flex-col   gap-4  "
        >
          {
            statsData.map(data => 
                <div className="p-6 bg-green-100 shadow-md rounded-2xl shadow-primary/40 hover:shadow-lg transition-all duration-500 hover:scale-102 border border-primary/40 hover:border-primary text-center text-green-700 flex flex-col sm:flex-row items-center gap-2 md:w-72">
                  <img src={data.icon} alt="" className="w-14 h-14 md:w-18 md:h-18"/> 
            <div>
                <p className="text-sm text-gray-700 mt-2">{data.title}</p>
                <Link to = {data.link} className="hover:link text-xs">View Tips</Link>
            <h2 className=" text-3xl md:text-4xl font-bold ">
              {inView && <CountUp end={data.count} duration={2} />}
            </h2>
            </div>
          </div>
            )
          }
        </div>
    
    </div>
  );
};

export default Stats;
