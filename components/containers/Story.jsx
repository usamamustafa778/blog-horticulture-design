import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import axios from "axios";
import MarkdownIt from "markdown-it";

export default function Story() {
  const [storyData, setStoryData] = useState({});
  const fetchStory = async () => {
    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_SITE_MANAGER
        }/public/industry_template_data/${
          process.env.NEXT_PUBLIC_INDUSTRY_ID
        }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"Story"}`
      );
      setStoryData(response.data.data[0].value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchStory();
  }, []);

  const markdownIt = new MarkdownIt();
  const convertMarkdown = (markdownText) => markdownIt?.render(markdownText);
  console.log("Story Data", typeof storyData?.text);

  return (
    <FullContainer>
      <Container className="text-xl py-16">
        <div
          className="w-full text-left text-lg mt-4 markdown-content"
          dangerouslySetInnerHTML={{
            __html: convertMarkdown(storyData?.text?.toString()),
          }}
        />
      </Container>
    </FullContainer>
  );
}
