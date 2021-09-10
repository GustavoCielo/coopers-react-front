import Carousel from "react-elastic-carousel";
import { SectionCarousel } from "./styles";

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

  return (
    <SectionCarousel>
      <Carousel showArrows={false}>
        {items.map((item) => (
          <div key={items.id}>
            <div>
              <div>imagem</div>
              <h3>function</h3>
              <span>{item.title_1}</span>
              <a href="/">read more</a>
            </div>
            <div>
              <div>imagem</div>
              <h3>function</h3>
              <span>{item.title_2}</span>
              <a href="/">read more</a>
            </div>
            <div>
              <div>imagem</div>
              <h3>function</h3>
              <span>{item.title_3}</span>
              <a href="/">read more</a>
            </div>
          </div>
        ))}
      </Carousel>
    </SectionCarousel>
  );
}
