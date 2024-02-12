import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";

import {
  Carousel,
  CarouselSlide,
  CarouselView,
  CarouselContainer,
  CarouselNext,
  CarouselPrev,
} from "@components/carousel-headless";

import styles from "./qwik-carousel.css?inline";

type SlideImage = {
  title: string;
  thumbnail: ImageMetadata;
  optimizedThumbnail: string;
};

type SlideImages = {
  optimizedImages: SlideImage[];
  class?: string;
};

export default component$((props: SlideImages) => {
  const { optimizedImages } = props;
  useStyles$(styles);

  return (
    <Carousel class={["qwikui-carousel", props.class]}>
      <CarouselPrev>Previous Image</CarouselPrev>
      <CarouselView class="qwikui-view">
        <CarouselContainer class="qwikui-container">
          {optimizedImages.map((image) => (
            <CarouselSlide key={image.title} class="qwikui-slide">
              <div class="carousel-slide">
                <img
                  style={{ objectFit: "cover" }}
                  src={image.optimizedThumbnail}
                  alt={image.title}
                  loading="lazy"
                  width="500"
                  height="500"
                />
              </div>
            </CarouselSlide>
          ))}
        </CarouselContainer>
      </CarouselView>
      <CarouselNext>Next Image</CarouselNext>
    </Carousel>
  );
});
