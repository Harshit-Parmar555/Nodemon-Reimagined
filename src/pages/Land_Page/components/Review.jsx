import React from "react";

const testimonials = [
  {
    name: "James Parker",
    username: "@james_dev",
    image: "https://thispersondoesnotexist.com/",
    text: "I can't imagine working on a Node.js project without Nodemon anymore! It saves me so much time by automatically restarting my server.",
  },
  {
    name: "Sophia Lee",
    username: "@sophia_code",
    image: "https://thispersondoesnotexist.com/",
    text: "Before Nodemon, I used to waste time manually restarting my server after every small change. Now, it happens instantly!",
  },
  {
    name: "Michael Johnson",
    username: "@mike_the_dev",
    image: "https://thispersondoesnotexist.com/",
    text: "I love how lightweight and efficient Nodemon is. It just works right out of the box without any unnecessary setup.",
  },
  {
    name: "Emily Carter",
    username: "@emily.codes",
    image: "https://thispersondoesnotexist.com/",
    text: "I used to forget to restart my server after making changes, leading to frustrating debugging. Nodemon completely eliminates this problem!",
  },
  {
    name: "Daniel Roberts",
    username: "@danielroberts",
    image: "https://thispersondoesnotexist.com/",
    text: "I was skeptical at first, but now I can't live without Nodemon. It simplifies my workflow and lets me build apps faster than ever!",
  },
];

export default function Review() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-white py-16 px-6 text-center mt-24">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 text-center">
        <h1 className="font-[Inter] font-bold text-2xl sm:text-3xl p-2 text-white bg-clip-text">
          Loved by the community
        </h1>
        <p className="text-center font-[Inter] text-zinc-400 text-sm sm:text-lg mb-2">
          Don't take our word for it – listen to what our community has to say.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-6xl mx-auto px-4 mt-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#161616] text-left p-6 rounded-xl shadow-lg flex flex-col border-2 border-zinc-800 w-full sm:w-[45%] md:w-[30%] lg:w-[28%] "
          >
            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.username}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="mt-4 text-gray-300 flex-grow text-sm sm:text-base">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
