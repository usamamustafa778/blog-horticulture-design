import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

const expert_insights = {
  title: "Expert Insights",
  tagline:
    " Elevate your understanding of interior horticulture with expert insights from www.lushflowerco.com.au, horticulturists, and industry professionals.",
  cards: [
    {
      title: "GREEN RETREATS",
      img: "/img/img1.jpg",
    },
    {
      title: "MINIMALISTIC SUCCULENT ARRANGEMENTS",
      img: "/img/img2.jpg",
    },
    {
      title: "UNIQUE QUALITIES",
      img: "/img/img3.webp",
    },
  ],
  last: " Our blog is a curated sanctuary for enthusiasts and aficionados of interior horticulture design, where we explore the artistry of bringing the outdoors in and transforming spaces into green sanctuaries.",
};

export default function ExpertInsights() {
  return (
    <FullContainer className="text-center py-16">
      <Container>
        <h2 className="text-5xl font-extrabold text-gray-700">
          {expert_insights.title}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-10 text-xl text-gray-500 md:w-8/12">
          {expert_insights.tagline}
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 w-full">
          {expert_insights.cards.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-cover bg-center flex flex-col justify-end text-white"
              style={{
                backgroundImage: `linear-gradient(#0002, #0006) , url(${item.img})`,
              }}
            >
              <h3 className="text-3xl font-bold mt-52">{item.title}</h3>
            </div>
          ))}
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-16 text-xl text-gray-500 md:w-8/12">
          {expert_insights.last}
        </p>
      </Container>
    </FullContainer>
  );
}
