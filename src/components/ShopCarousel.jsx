import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import image from "../assets/images/spice-tee.jpeg";

export default function ShopCarousel() {
  const newArrivals = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const product = {
    image: image,
    name: "Black Spice Tee",
    price: "Ksh 900",
  };

  return (
    <div className="px-2 md:px-20 w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {newArrivals.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <ProductCard product={product} data={data} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
