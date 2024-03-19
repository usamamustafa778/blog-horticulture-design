import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    "About & Contact Details",
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
    "Complaints",
    "Sitemap",
    "Advertising",
  ];

  const [copyright, setCopyright] = useState(
    "© 2024 Horticulture Design Co | Designed by P1 SEO Agency"
  );

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
          <p className="mt-5">{copyright}</p>
          <div className="flex items-center flex-wrap gap-5 mt-5 lg:gap-10">
            {footerLinks.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
