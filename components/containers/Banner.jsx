import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Button } from "../ui/button";
import axios from "axios";

export default function Banner() {
  const [bannerData, setBannerData] = useState({});
  const [bannerImage, setBannerImage] = useState("");
  const fetchBannerData = async () => {
    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_SITE_MANAGER
        }/public/industry_template_data/${
          process.env.NEXT_PUBLIC_INDUSTRY_ID
        }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"Banner"}`
      );
      setBannerData(response.data.data[0].value);
      const file = response?.data.data[0].file_name;
      setBannerImage(
        `${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/industry_template_images/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/${file}`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

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
          {bannerData?.buttonText && (
            <Button>{bannerData?.buttonText || "Default Button Text"}</Button>
          )}
        </div>
      </Container>
    </FullContainer>
  );
}
