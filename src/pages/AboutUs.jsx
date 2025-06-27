import React from "react";
import about from "/about.svg";

const AboutUs = () => {
  const aboutSections = [
    {
      title: "Our Mission",
      description:
        "Growing green together, one plant at a time. We aim to build a supportive community where gardening enthusiasts—whether beginners or experts—can share tips, get inspired, and learn how to make the world greener, starting from their own backyard.",
    },
    {
      title: "Our Story",
      description:
        "From a rooftop garden dream to a blooming digital hub. GreenHub was born out of a passion for plants and people. What started as a small WhatsApp group has now grown into a thriving online space helping thousands across the country build beautiful gardens and live more sustainably.",
    },
    {
      title: "Why GreenHub?",
      description:
        "Because growing together is better. We provide: expert gardening tips from verified contributors, community Q&A, seasonal plant care reminders, event updates, and local resource recommendations.",
    },
    {
      title: "Our Community",
      description:
        "Real people. Real plants. Real progress. With over 10,000+ members, we’re proud to have a vibrant network of balcony gardeners, urban farmers, students, professionals, and eco-warriors—all passionate about making a green impact.",
    },
    {
      title: "Meet the Team",
      description:
        "A team rooted in passion and growth: Elora Yasmin – Founder & Frontend Developer, Rafiul Islam – Content Curator, Tania Rahman – Community Manager, Md. Nafi – Backend Developer, Nazia Hossain – Design & UX.",
    },
    {
      title: "Get Involved",
      description:
        "Let’s grow something beautiful together! Whether you want to share a tip, host a workshop, or just ask a plant question—we welcome your voice. Join our community and help us grow GreenHub into the largest green living resource hub in the region.",
    },
  ];

  return (
    <section className=" px-4 md:px-8 text-accent-content">
      <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8 ">
        <div className="relative flex flex-col md:flex-row items-stretch lg:mb-15">
          <div className="absolute bg-green-950 py-5 px-6 xl:py-10 rounded-lg w-72 md:w-88 xl:w-96 text-white z-1 text-center -right-5 xl:right-28 bottom-0 lg:bottom-10  hidden md:flex md:flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-center  mb-2">
              About GreenHub
            </h2>
            <p className="text-sm">
              At GreenHub, we believe gardening is more than just planting—it's
              about nurturing life, building communities, and creating a
              sustainable future. Our platform empowers garden lovers,
              beginners, and experts alike to share knowledge, discover
              eco-friendly practices, and grow together.
            </p>
          </div>
          <div className="flex justify-end w-full md:w-7/8 ">
    <img
      src={about}
      alt="About GreenHub"
      className="h-[80vh] w-full "
    />
  </div>
        </div>
        {aboutSections.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-base-100 shadow-md rounded-lg p-6 md:p-8 border-l-4 border-primary"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-2">
              {section.title}
            </h3>
            <p className="text-sm">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
