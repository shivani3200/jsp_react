import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import Card from "./Card";

const TaskParentChildrenProps = () => {
  let list = [
    {
      name: "shivani",
      id: 12,
      image:
        "https://i.pinimg.com/736x/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
      description: "hi i am shivani",
    },
    {
      name: "Nilesh",
      id: 12,
      image:
        "https://i.pinimg.com/736x/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
      description: "hi i am Nilesh",
    },
    {
      name: "kumari",
      id: 12,
      image:
        "https://i.pinimg.com/736x/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
      description: "hi i am kumari",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <div>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            eos iste, atque vero corrupti a, aliquam aliquid eligendi
            consequatur, eum quibusdam id nisi beatae impedit. Quisquam,
            sapiente necessitatibus soluta est odio delectus repellendus dolore
            sint, deleniti hic eum doloremque od.
          </p>
          <br />
          <br />
          <Button color="yellow">View More</Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          {list.map((user) => {
            return (
              <Card
                key={user.id}
                name={user.name}
                id={user.id}
                image={user.image}
                description={user.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskParentChildrenProps;
