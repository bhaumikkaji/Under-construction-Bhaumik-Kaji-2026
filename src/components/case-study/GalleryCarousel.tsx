import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimatedSection from "@/components/AnimatedSection";

interface GalleryCarouselProps {
  images: string[];
  title?: string;
}

export default function GalleryCarousel({ images, title = "Project Gallery" }: GalleryCarouselProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-grotesk text-indigoPurple dark:text-cybertext mb-8">
          {title}
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 overflow-hidden bg-transparent shadow-none">
                    <CardContent className="p-0">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={image}
                          alt={`Project visual ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg hover-effect-image"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="position-override relative right-auto left-auto translate-y-0 dark:bg-darkbg dark:border-cybertext dark:text-cybertext" />
            <CarouselNext className="position-override relative right-auto left-auto translate-y-0 dark:bg-darkbg dark:border-cybertext dark:text-cybertext" />
          </div>
        </Carousel>
      </AnimatedSection>
    </section>
  );
}
