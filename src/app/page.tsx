"use client";

import Card from "@/components/Card";
import styles from "../styles/page.module.scss";
import brisbane from "../components/assets/brisbane_vgpzva.jpg";
import { useState } from "react";
import Banner from "@/components/Banner";

const Page = () => {
  const [activeCard, setActiveCard] = useState<number>(1);

  const cardData = [
    {
      image: brisbane,
      altText: "brisbane",
      header: "Heading 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      buttonText: "Button 1",
    },
    {
      image: brisbane,
      altText: "brisbane",
      header: "Heading 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      buttonText: "Button 2",
    },
    {
      image: brisbane,
      altText: "brisbane",
      header: "Heading 3",
      body: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      ],
      buttonText: "Button 3",
    },
  ];
  return (
    <div className={styles.pageContainer}>
      <div className={styles.bannerContainer}>
        <Banner/>
      </div>
      <div className={styles.cardsContainer}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            cardImage={card.image}
            cardAltText={card.altText}
            cardHeader={card.header}
            cardBody={card.body}
            buttonText={card.buttonText}
            isActive={activeCard === index}
            onClick={() => setActiveCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
