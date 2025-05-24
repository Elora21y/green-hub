import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ShareTips = () => {
  const { user } = use(AuthContext);

  const handleShareSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email, ...information } = Object.fromEntries(
      formData.entries()
    );
    // console.log(information);

    if (!information.title.trim()) return toast.error("Please add a title");
    if (!information.plant.trim()) return toast.error("Please add a plant");
    if (!information.level) return toast.error("Please add a Difficulty Level");
    if (!information.description.trim())
      return toast.error("Please add a description");
    if (!information.photo.trim()) return toast.error("Please add a photo");
    if (!information.category) return toast.error("Please add a category");
    if (!information.availability)
      return toast.error("Please add a availability");

    const tipInformation = {
      name,
      email,
      ...information,
    };

    fetch("http://localhost:2100/share-tips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added Garden Tips successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div className="text-accent-content">
      <div className="text-center mb-6 lg:mb-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-secondary">
          Share a Garden Tip
        </h2>
        <p className=" mt-2 max-w-2xl mx-auto text-base">
          EShare your favorite gardening tips and techniques with the GreenHub
          community. Whether you're a beginner or a seasoned grower, your
          experience can help others bloom.
        </p>
      </div>
      <div className="max-w-2xl mx-auto p-8 bg-[#a6e291cc] rounded-2xl mt-8 shadow-primary/40 hover:shadow-lg transition-all duration-500">
        <form className="space-y-4" onSubmit={handleShareSubmit}>
          {/* title */}
          <input
            type="text"
            placeholder="Title (e.g. How I Grow Tomatoes Indoors)"
            className=" input input-bordered w-full bg-white"
            name="title"
          />
          {/* plant name */}
          <input
            type="text"
            placeholder="Plant Type / Topic"
            className=" input input-bordered w-full bg-white"
            name="plant"
          />
          {/* level */}
          <select className="w-full select select-bordered bg-white" name="level">
            <option disabled value="">
              Difficulty Level
            </option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <textarea
            className="textarea focus:outline-0 w-full placeholder:text-xs focus:border-2 focus:border-[#88d66ce8] focus:shadow-[0_0_5px_4px_#88d66c5b] bg-white placeholder:text-gray-400"
            rows="4"
            placeholder="Description"
            name="description"
          ></textarea>
          {/* photo */}
          <input
            type="url"
            placeholder="Image URL"
            className="w-full input input-bordered bg-white"
            name="photo"
          />
          {/* category */}
          <select className="w-full select select-bordered bg-white" name="category">
            <option value="" disabled>
              Category
            </option>
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Hydroponics</option>
          </select>
          {/* availability */}
          <select className="w-full select select-bordered bg-white" name="availability">
            <option disabled value="">
              Availability
            </option>
            <option>Public</option>
            <option>Hidden</option>
          </select>

          <div className="grid md:grid-cols-2 gap-4 text-accent">
            <input
              type="text"
              readOnly
              defaultValue={user.displayName}
              name="name"
              className="focus:outline-0 w-full placeholder:text-xs focus:border-2 focus:border-[#88d66ce8] focus:shadow-[0_0_5px_4px_#88d66c5b] input bg-white"
            />
            <input
              type="email"
              readOnly
              defaultValue={user.email}
              name="email"
              className="input focus:outline-0 w-full placeholder:text-xs focus:border-2 focus:border-[#88d66ce8] focus:shadow-[0_0_5px_4px_#88d66c5b] bg-white"
            />
          </div>

          <button type="submit" className="btn button-green btn-block">
            Add Tips
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareTips;
