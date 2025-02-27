"use client";

import * as React from "react";
import {
  Carousel as CarouselPrimitive,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface CarouselProps {
  className?: string;
  images?: {
    url: string;
    onClick?: () => void;
  }[];
}

const DEFAULT_SLIDES = ["bg-purple-500", "bg-blue-500", "bg-green-500"];

export default function BambooCarousel({ images, className }: CarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const slides = images || DEFAULT_SLIDES;

  return (
    <CarouselPrimitive
      setApi={setApi}
      className={cn("relative w-full mx-auto", className)}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images
          ? images.map((item, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative w-full h-[100px] rounded-[4px] overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={item.onClick}
                />
              </CarouselItem>
            ))
          : DEFAULT_SLIDES.map((color, index) => (
              <CarouselItem key={index}>
                <div className={`w-full h-[100px] rounded-lg ${color}`} />
              </CarouselItem>
            ))}
      </CarouselContent>

      {slides.length > 1 && (
        <div className="absolute bottom-2 right-2 bg-black/60 text-white px-[8px] py-[2px] text-[11px] font-[500] rounded-full">
          {current} / {slides.length}
        </div>
      )}
    </CarouselPrimitive>
  );
}
