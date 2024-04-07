import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Footer() {
  const [footerData, setFooterData] = useState({});
  const fetchFooterData = async () => {
    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_SITE_MANAGER
        }/public/industry_template_data/${
          process.env.NEXT_PUBLIC_INDUSTRY_ID
        }/${process.env.NEXT_PUBLIC_TEMPLATE_ID}/data/${"Footer"}`
      );
      setFooterData(response.data.data[0].value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchFooterData();
  }, []);

  return (
    <FullContainer className="py-16 bg-gray-100 mt-16">
      <Container>
        <div className="w-full text-xs md:text-sm">
          <Link href="/">
            <Image
              height={70}
              width={250}
              src="/img/logo-hort.png"
              alt="logo"
              className="mt-1"
            />
          </Link>
          <p className="mt-5">{footerData?.copyRight}</p>
          <div className="flex items-center flex-wrap gap-5 mt-5 lg:gap-10">
            {footerData?.footerLinks?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
