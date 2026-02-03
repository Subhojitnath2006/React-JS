import React from "react";

const Card = ({username = "Demo"}) => {
  return (
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img class="size-48 shadow-xl rounded-md" alt="" src="./src/assets/java.png" />
      </div>
      <div class="flex items-center md:items-start">
        <span class="text-2xl font-medium">{username}</span>
      </div>
    </div>
  );
};

export default Card;
