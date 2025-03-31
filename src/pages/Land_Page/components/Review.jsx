import React from "react";

const testimonials = [
  {
    name: "Ryan Carniato",
    username: "@RyanCarniato",
    image: "https://via.placeholder.com/40",
    text: "I'm loving what Vite enables. We've found building SolidStart that it is less a metaframework but a system of symbiotic Vite plugins...",
  },
  {
    name: "Mark Dalgleish",
    username: "@markdalgleish",
    image: "https://via.placeholder.com/40",
    text: "It's also a great platform to build a framework on since it provides a pluggable dev environment. Community is amazing too.",
  },
  {
    name: "Dion Almaer",
    username: "@dalmaer",
    image: "https://via.placeholder.com/40",
    text: "I am so excited to see so many great frameworks teaming up on top of Vite. So many will benefit. ❤️ to the vite team.",
  },
  {
    name: "Rich Harris",
    username: "@Rich_Harris",
    image: "https://via.placeholder.com/40",
    text: "Vite is basically the united nations of JavaScript at this point. I'll be there as a representative of Sveltelandia.",
  },
  {
    name: "Jason Miller",
    username: "@_developit",
    image: "https://via.placeholder.com/40",
    text: "Every time I suspect I've hit the bounds of what Vite can do, I end up being wrong.",
  },
  {
    name: "David Cramer",
    username: "@zeeg",
    image: "https://via.placeholder.com/40",
    text: "Vite has been a game changer for the industry.",
  },
  {
    name: "Rich Harris",
    username: "@Rich_Harris",
    image: "https://via.placeholder.com/40",
    text: "Vite is basically the united nations of JavaScript at this point. I'll be there as a representative of Sveltelandia.",
  },
  {
    name: "Jason Miller",
    username: "@_developit",
    image: "https://via.placeholder.com/40",
    text: "Every time I suspect I've hit the bounds of what Vite can do, I end up being wrong.",
  },
  {
    name: "David Cramer",
    username: "@zeeg",
    image: "https://via.placeholder.com/40",
    text: "Vite has been a game changer for the industry.",
  },
];

export default function Review() {
  return (
    <div className="w-full flex flex-col items-center text-white py-16 px-8 text-center mt-12 gap-8">
      <div className="flex items-end gap-1">
        <h1 className="font-[Inter] font-bold text-3xl p-2 text-white text-transparent bg-clip-text">
          Loved by the community
        </h1>
        <p className="text-center font-[Inter] text-zinc-400 text-lg mb-2">
          Don't take our word for it – listen to what our community has to say.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto grid-flow-row auto-rows-min">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#161616] text-left p-6 rounded-xl shadow-lg flex flex-col border-2 border-zinc-800"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.username}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300 flex-grow">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
