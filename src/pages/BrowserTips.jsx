import React from "react";
import { Link, useLoaderData } from "react-router";

const BrowserTips = () => {
  const tips = useLoaderData();
  // console.log(tips);
  return (
    <div>
      <div className="overflow-x-auto overflow-y-hidden text-accent">
        {tips.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead className="bg-primary/30 text-secondary">
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tips.map((tip, index) => (
                <tr key={tip._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={tip.photo} alt="profile" />
                        </div>
                      </div>
                  </td>
                  <td>
                        <h3 className="font-medium text-secondary">
                          {tip.title}
                        </h3>
                  </td>
                  <td>{tip.category}</td>
                  <td>
                    <Link
                      to={`/tip-details/${tip._id}`}
                      className="btn btn-ghost button-green btn-sm py-5 md:py-4"
                    >
                      see more
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="bg-primary/40 flex flex-col items-center justify-center p-6  md:p-10 rounded-xl min-h-[calc(100vh-430px)] gap-2 text-center mx-auto">
            <img src="/no-tips.png" alt="" className="w-24 md:w-40" />
            <h2 className="text-2xl md:text-4xl font-semibold text-secondary">
              No Tips Available
            </h2>
            <p>
              Please go back the Share a Garden Tips page and add a garden Tips
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowserTips;
