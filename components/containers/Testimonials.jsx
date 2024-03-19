import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function Testimonials() {
  const testimonials = {
    title: "What Our Clients Say",
    cards: [
      {
        text: "As an interior designer, Horticulture Design Co has become an invaluable resource. The DIY Horticulture Projects have added a new dimension to my projects, allowing me to infuse nature seamlessly into my designs. A must-follow for anyone in the design industry!",
        title: "David Reynolds, Interior Designer",
        image: "/img/test1.jpg",
      },
      {
        text: "Horticulture Design Co has been my go-to source for transforming my living space. The expert insights and design trends have not only refreshed my home but also deepened my appreciation for the synergy between plants and interior aesthetics. A truly inspiring platform!",
        title: "Isabella Thompson, Home Enthusiast",
        image: "/img/test2.jpg",
      },
      {
        text: "Horticulture Design Co is more than a blog; it’s a community that understands the transformative power of plants in indoor spaces. The practical tips and plant profiles have helped me curate a green haven in my apartment. Thank you for making horticulture design accessible and enjoyable!",
        title: "Sophie Martinez, Urban Dweller",
        image: "/img/test3.jpg",
      },
    ],
  };

  return (
    <FullContainer className="py-20">
      <Container>
        <h2 className="text-5xl font-extrabold text-gray-700">
          {testimonials.title}
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-5 w-full mb-48">
          {testimonials.cards.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="p-6 h-[600px] relative bg-cover bg-center"
            >
              <div className="bg-white text-lg px-8 py-10 mt-96 shadow-xl">
                <p className="italic text-gray-500">{item.text}</p>
                <p className="font-bold mt-5 text-gray-800">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
