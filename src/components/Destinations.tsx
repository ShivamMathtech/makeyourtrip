import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import santorini from "@/assets/destination-santorini.jpg";
import machuPicchu from "@/assets/destination-machu-picchu.jpg";
import maldives from "@/assets/destination-maldives.jpg";
import japan from "@/assets/destination-japan.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: santorini,
    tours: 24,
    description: "White-washed villages and stunning sunsets",
  },
  {
    id: 2,
    name: "Machu Picchu, Peru",
    image: machuPicchu,
    tours: 18,
    description: "Ancient Incan citadel in the clouds",
  },
  {
    id: 3,
    name: "Maldives",
    image: maldives,
    tours: 32,
    description: "Paradise islands and crystal waters",
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    image: japan,
    tours: 28,
    description: "Where tradition meets innovation",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the world's most beautiful places and create memories that last forever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-card-foreground">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm text-muted-foreground">{destination.description}</p>
                  </div>
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium">{destination.tours} Tours</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
