import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ menu_list }) {
  return (
    <FullContainer className="bg-white shadow py-3">
      <div className="flex items-center justify-between w-10/12">
        <Link href="/">
          <Image
            height={70}
            width={250}
            src="/img/logo-hort.png"
            alt="logo"
            className="mt-1"
          />
        </Link>
        <div className="hidden md:flex items-center justify-end gap-5">
          {menu_list?.map((item, index) => (
            <Link
              href={`/${item}`}
              className="font-semibold text-gray-700 capitalize"
              key={index}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </FullContainer>
  );
}
