import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "EMPOWERING COMMUNITIES",
      description:
        "We work closely with local communities to develop sustainable solutions that not only protect the environment but also improve livelihoods. Through education, advocacy, and active involvement, we empower individuals to take ownership of conservation efforts, fostering a sense of responsibility and collective action.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "COMMITMENT TO TRANSPARENCY",
      description:
        "Transparency is at the heart of everything we do. We believe in building trust by providing clear, accessible information about our initiatives, funding, and outcomes. Our donors, partners, and community members are always kept informed on how their contributions are making a real difference.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "MEASURING IMPACT",
      description:
        "We continuously evaluate the impact of our programs to ensure that they are driving meaningful change. By tracking key metrics, we are able to refine our strategies, maximize our efficiency, and ensure that every action we take is leading toward a more sustainable future.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
