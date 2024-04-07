import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import axios from "axios";
import MarkdownIt from "markdown-it";

export default function Story() {
  const [storyData, setStoryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchStory();
  }, []);

  const markdownIt = new MarkdownIt();
  const convertMarkdown = (markdownText) =>
    markdownText ? markdownIt.render(markdownText) : "";

  return (
    <FullContainer>
      <Container className="text-xl py-16">
        {isLoading ? (
          <p>Loading...</p> // Placeholder content while data is being fetched
        ) : (
          <div
            className="w-full text-left text-lg mt-4 markdown-content"
            dangerouslySetInnerHTML={{
              __html: convertMarkdown(storyData?.text),
            }}
          />
        )}
      </Container>
    </FullContainer>
  );
}
