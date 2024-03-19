import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Button } from "../ui/button";

export default function Skeleton() {
  const list = ["", "", ""];
  return (
    <FullContainer className="animate-pulse">
      <div className="h-96 w-full bg-gray-300"></div>
      <Container className="py-12 gap-10">
        <div className="w-44 p-5 rounded-full bg-gray-300"></div>
        {list?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 w-full">
            <div
              key={index}
              className="p-8 h-32 rounded-xl  w-44 lg:w-56 bg-cover bg-center text-white bg-gray-300"
            ></div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold p-3 rounded-lg bg-gray-300 w-full"></h3>
              <p className="text-gray-500 mt-4 p-2 rounded-md bg-gray-300 w-full"></p>
              <Button
                variant="outline"
                className="mt-5 py-4 w-24 bg-gray-300"
              ></Button>
            </div>
          </div>
        ))}
      </Container>
    </FullContainer>
  );
}
