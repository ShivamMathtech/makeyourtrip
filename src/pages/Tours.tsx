import { useState } from "react";
import { Clock, Users, Star, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import santorini from "@/assets/destination-santorini.jpg";
import machuPicchu from "@/assets/destination-machu-picchu.jpg";
import maldives from "@/assets/destination-maldives.jpg";
import japan from "@/assets/destination-japan.jpg";
import safari from "@/assets/tour-safari.jpg";
import europe from "@/assets/tour-europe.jpg";
import cruise from "@/assets/tour-cruise.jpg";

const tours = [
  {
    id: 1,
    name: "Greek Island Paradise",
    location: "Santorini, Greece",
    image: santorini,
    duration: "7 Days",
    groupSize: "12-15",
    rating: 4.9,
    reviews: 234,
    price: 2499,
    category: "Beach",
    description: "Experience the magic of Santorini with stunning sunsets, white-washed villages, and crystal-clear waters.",
  },
  {
    id: 2,
    name: "Ancient Wonders Tour",
    location: "Machu Picchu, Peru",
    image: machuPicchu,
    duration: "10 Days",
    groupSize: "8-12",
    rating: 5.0,
    reviews: 189,
    price: 3299,
    category: "Adventure",
    description: "Explore the mystical ruins of Machu Picchu and discover the rich history of the Incan civilization.",
  },
  {
    id: 3,
    name: "Tropical Paradise Escape",
    location: "Maldives",
    image: maldives,
    duration: "5 Days",
    groupSize: "2-4",
    rating: 4.8,
    reviews: 421,
    price: 3999,
    category: "Luxury",
    description: "Indulge in luxury with overwater bungalows, pristine beaches, and world-class diving.",
  },
  {
    id: 4,
    name: "Cherry Blossom Experience",
    location: "Tokyo, Japan",
    image: japan,
    duration: "8 Days",
    groupSize: "10-15",
    rating: 4.9,
    reviews: 312,
    price: 2899,
    category: "Cultural",
    description: "Witness the stunning cherry blossoms and immerse yourself in Japanese culture and tradition.",
  },
  {
    id: 5,
    name: "African Safari Adventure",
    location: "Kenya & Tanzania",
    image: safari,
    duration: "12 Days",
    groupSize: "6-10",
    rating: 5.0,
    reviews: 156,
    price: 4299,
    category: "Adventure",
    description: "Experience the Big Five on an unforgettable safari through Africa's most spectacular wildlife reserves.",
  },
  {
    id: 6,
    name: "Grand European Tour",
    location: "Paris, Rome, Barcelona",
    image: europe,
    duration: "14 Days",
    groupSize: "15-20",
    rating: 4.7,
    reviews: 523,
    price: 3799,
    category: "Cultural",
    description: "Discover Europe's most iconic cities with guided tours of historical landmarks and cultural treasures.",
  },
  {
    id: 7,
    name: "Caribbean Cruise",
    location: "Caribbean Islands",
    image: cruise,
    duration: "7 Days",
    groupSize: "Unlimited",
    rating: 4.6,
    reviews: 678,
    price: 1999,
    category: "Cruise",
    description: "Sail through the Caribbean's turquoise waters visiting multiple tropical islands in luxury.",
  },
];

const categories = ["All", "Beach", "Adventure", "Luxury", "Cultural", "Cruise"];

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTours =
    selectedCategory === "All"
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Tours & Packages</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              Handcrafted experiences designed to create unforgettable memories
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <div
                  key={tour.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      {tour.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-card-foreground">{tour.name}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{tour.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {tour.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{tour.groupSize}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span>{tour.rating}</span>
                        <span className="text-muted-foreground">({tour.reviews})</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-sm text-muted-foreground">From</span>
                        <p className="text-2xl font-bold text-primary">
                          ${tour.price.toLocaleString()}
                        </p>
                      </div>
                      <Button variant="default">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tours;
