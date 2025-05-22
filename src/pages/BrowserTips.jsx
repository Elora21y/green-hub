import React from "react";
import { FaRegEye } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const BrowserTips = () => {
  const tips = useLoaderData();
  console.log(tips);
  return (
    <div>
      <div className="overflow-x-auto overflow-y-hidden text-accent">
        <table className="table">
          {/* head */}
          <thead className="bg-primary/20">
            <tr>
              <th>
                No.
              </th>
              <th>Title</th>
              <th>Category</th>
              <th>See Details</th>
            </tr>
          </thead>
          <tbody>
            {
                tips.map((tip, index) => 
                    <tr key={tip._id}>
              <th>
                <label>
                  {index + 1}
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={tip.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary">{tip.title}</h3>
                  </div>
                </div>
              </td>
              <td>
                {tip.category}
              </td>
              <th>
                <Link to={`/tip-details/${tip._id}`} className="btn btn-ghost btn-sm"><FaRegEye /></Link>
              </th>
            </tr>
                )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowserTips;
