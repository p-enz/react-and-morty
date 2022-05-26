import React from "react";
import Card from "../card/Card";

function Homepage() {
  return (
    <>
      <Card
        name="Squeeb"
        isBookmarked={true}
        imgURL="https://rickandmortyapi.com/api/character/avatar/666.jpeg"
      />
      <Card
        name="Alien Googah"
        isBookmarked={false}
        imgURL="https://rickandmortyapi.com/api/character/avatar/13.jpeg"
      />
      <Card
        name="Scary Glenn"
        isBookmarked={true}
        imgURL="https://rickandmortyapi.com/api/character/avatar/305.jpeg"
      />
      <Card
        name="Cavesnake"
        isBookmarked={false}
        imgURL="https://rickandmortyapi.com/api/character/avatar/587.jpeg"
      />
    </>
  );
}

export default Homepage;
