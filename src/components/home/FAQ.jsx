import React from "react";

const questions = [
  {
    title : ' 1. How do I submit a gardening tip on GreenHub?',
    description : 'You can share your gardening knowledge by clicking on the “Share Tip” button in the navbar. Fill in the form with your tip details, and once submitted, it will be reviewed and added to the platform.'
  },
  {
    title : '2. Can I update or delete a tip after submitting?',
    description : ' Currently, editing is not available. If you wish to update a tip, you can delete the existing one and resubmit a new version with the updated information.'
  },
  {
    title : '3. How does the dark/light theme work?',
    description : 'There’s a theme toggle switch on the navbar. Clicking it will instantly switch the entire site between light and dark mode for a better reading experience based on your preference.'
  },
  {
    title : ' 4. How does the like button work on tips?',
    description : 'Each tip has a heart icon. Clicking on it increases the like count and shows appreciation for that tip. This also helps determine which tips appear in the “Top Trending Tips” section.'
  },
  {
    title : '  5. Do I need to create an account to submit or like tips?',
    description : 'Yes, you must be logged in to submit, like, or interact with tips. This ensures that each action is tied to a real user and helps us maintain a safe community.'
  },
]

const FAQ = () => {
  return (
    <div className="bg-base-100 px-3 md:px-4 lg:px-6 pt-8   rounded-lg mt-14 mb-10 hover:shadow-primary/60 hover:shadow-lg transition-all duration-300 text-accent-content">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 ">
          Frequently Asked Questions
        </h2>
        <p className=" max-w-2xl mx-auto">
          Find answers to the most common questions about how JobNest works, how
          to apply, and other essential information to help you land your dream
          job faster.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center ">
        <div>
          
         {
          questions.map(que =>
             <div className="collapse collapse-arrow border border-gray-200">
            <input type="radio" name="my-accordion-2 " defaultChecked />
            <div className="collapse-title font-bold roboto text-lg text-secondary ">
            {que.title}
            </div>
            <div className="collapse-content text-sm">
             {que.description}
            </div>
          </div>
          )
         }

         
        </div>

        <div
          className=" max-w-[680px] w-full"
        >
        <img src='/about-us.svg' alt="FAQ" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
