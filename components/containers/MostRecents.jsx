import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { Button } from "../ui/button";

export default function MostRecents({ data }) {
  const mostRecent = data?.find((item) => item.title === "mostRecent");

  return (
    <FullContainer className="py-16">
      <Container className="gap-10">
        <h2 className="text-5xl font-extrabold text-gray-700">
          {mostRecent?.heading}
        </h2>
        {mostRecent?.posts?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-5 w-full"
          >
            <div
              key={index}
              className="p-8 h-48 rounded-xl  w-full lg:w-56 bg-cover bg-center text-white"
              style={{
                backgroundImage: `linear-gradient(#0002, #0006) , url(${item.image})`,
              }}
            ></div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.des}</p>
              <Button variant="outline" className="mt-5">
                Read More
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </FullContainer>
  );
}
