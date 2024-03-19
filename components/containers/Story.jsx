import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function Story({ data }) {
  const storyData = data?.find((item) => item.title === "story");
  return (
    <FullContainer>
      <Container className="text-xl py-16">{storyData.text}</Container>
    </FullContainer>
  );
}
