import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const mostRecent = {
  title: "mostRecent",
  heading: "Most Recent",
  posts: [
    {
      title:
        "Guardians of Power: Exploring the Vital Role of Circuit Breakers in Electrical Systems",
      image: "/img/img1.jpg",
      time: "February 19, 2024",
      des: "In electrical systems, circuit breakers play a crucial role in maintaining safety and preventing damage. These devices are designed to protect circuits from overloads, short circuits, and other faults, ensuring the smooth and efficient operation of the entire system. Understanding the basics of circuit breakers is essential for anyone working with electrical systems. Understanding the...",
    },
    {
      title:
        "Beyond the Bouquet: A Complete Guide to Styling Your Wedding Flowers",
      image: "/img/img2.jpg",
      time: "January 23, 2024",
      des: "Planning a wedding involves countless decisions, and one of the most important aspects is the choice and styling of the wedding flowers. Flowers play a significant role in weddings, symbolizing love, purity, and new beginnings. With the right flowers and arrangements, you can create an enchanting atmosphere that reflects your personal style and brings your...",
    },
    {
      title:
        "Beyond Bunches: Creative Happy Birthday Flower Hacks for All Budgets",
      image: "/img/img3.webp",
      time: "January 23, 2024",
      des: "Flowers are a timeless and meaningful gift to celebrate birthdays. They have the ability to convey emotions and make the recipient feel loved and appreciated. However, giving the same old bouquet of flowers can become repetitive and predictable. To truly make a statement and delight the birthday person, it’s time to go beyond the traditional...",
    },
  ],
};

export default function contact() {
  return (
    <FullContainer>
      <FullContainer className="bg-gray-100 py-20">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </FullContainer>
      <Container>
        <div className="grid lg:grid-cols-blogs gap-10 w-full py-12">
          <form>
            <div className="grid grid-cols-2 gap-5 mb-6">
              <Input label="First Name" placeholder="Enter your first name" />
              <Input label="Last Name" placeholder="Enter your last name" />
              <Input label="Email" placeholder="Email" />
              <Input label="Subject" placeholder="Subject" />
            </div>
            <Textarea
              label="Your message"
              placeholder="Write your message here"
            />
            <Button className="mt-6 ml-auto">Submit</Button>
          </form>
          <div>
            <h2 className="text-xl">RECENT POSTS</h2>
            {mostRecent?.posts?.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 w-full bg-white hover:shadow-lg shadow-black/10 transition-all rounded-lg cursor-pointer mb-3 p-3"
              >
                <div
                  key={index}
                  className="p-8 rounded-md  w-24 bg-cover bg-center text-white"
                  style={{
                    backgroundImage: `linear-gradient(#0002, #0006) , url(${item.image})`,
                  }}
                ></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-gray-400 mt-1 text-xs">{item.time}</p>
                  <p className="text-gray-600 mt-1 text-xs">
                    {item.des.slice(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
