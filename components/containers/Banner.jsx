import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Button } from "../ui/button";

export default function Banner({ data }) {
  const bannerData = data?.find((item) => item.title === "banner");

  return (
    <FullContainer
      // style={{
      //   backgroundImage: bannerData
      //     ? `linear-gradient(#0006, #0003), url(${bannerData.backgroundImage})`
      //     : "",
      // }}
      style={{
        backgroundImage:
          "linear-gradient(#0007, #0003) ,url(https://horticulturedesignco.com/wp-content/uploads/2024/01/Interior-Spaces-Blossom-with-Green-Elegance1.jpg)",
      }}
      className="text-white py-16 lg:py-24"
    >
      <Container className="md:flex-row md:justify-start">
        <div className="w-full md:w-8s/12 lg:w-6/12">
          <h1 className="text-6xl font-extrabold">
            {bannerData?.heading || "Default Heading"}
          </h1>
          {bannerData?.tagLine && (
            <p className="text-lg my-7">
              {bannerData?.tagLine || "Default Tag Line"}
            </p>
          )}
          {bannerData?.button && (
            <Button>{bannerData?.button?.text || "Default Button Text"}</Button>
          )}
        </div>
      </Container>
    </FullContainer>
  );
}
