import Carousel from "react-elastic-carousel";
import { SectionCarousel, CarContainer } from "./styles";

export default function CarouselComp() {
  const items = [
    {
      id: 1,
      title_1: "Organize your daily job enhance your life performance",
      title_2:
        "Mark one activity as done makes your brain understand the power of doing",
      title_3:
        "Careful with missunderstanding the difference between a list of things nad a list of desires.",
    },
    {
      id: 2,
      title_1: "Organize your daily job enhance your life performance",
      title_2:
        "Mark one activity as done makes your brain understand the power of doing",
      title_3:
        "Careful with missunderstanding the difference between a list of things nad a list of desires.",
    },
    {
      id: 3,
      title_1: "Organize your daily job enhance your life performance",
      title_2:
        "Mark one activity as done makes your brain understand the power of doing",
      title_3:
        "Careful with missunderstanding the difference between a list of things nad a list of desires.",
    },
  ];

  const breakPoints = [
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 1 },
    { width: 1450, itemsToShow: 1, itemsToScroll: 1 },
  ]

  return (
    <SectionCarousel>
      <div className="goodThingsContainer">
        <h2>good things</h2>
      </div>
      <Carousel showArrows={false}>
        {items.map((item) => (
          <div key={items.id} className="keyContainer">
            <CarContainer>
              <div>
                <figure>
                  <img src="./car-image.png" alt="" />
                </figure>
              </div>
              <h3>function</h3>
              <span>{item.title_1}</span>
              <a href="/">read more</a>
            </CarContainer>
            <CarContainer>
              <div>
                <figure>
                  <img src="./car-image-2.png" alt="" />
                </figure>
              </div>
              <h3>function</h3>
              <span>{item.title_2}</span>
              <a href="/">read more</a>
            </CarContainer>
            <CarContainer>
              <div>
                <figure>
                  <img src="./car-image-3.png" alt="" />
                </figure>
              </div>
              <h3>function</h3>
              <span>{item.title_3}</span>
              <a href="/">read more</a>
            </CarContainer>
          </div>
        ))}
      </Carousel>
    </SectionCarousel>
  );
}
