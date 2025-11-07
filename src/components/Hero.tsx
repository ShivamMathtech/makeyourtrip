import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  return (
    <>
      <BookingDialog 
        open={bookingDialogOpen} 
        onOpenChange={setBookingDialogOpen}
      />
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful beach destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Next{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Explore breathtaking destinations, create unforgettable memories, and embark on
            the journey of a lifetime.
          </p>

          {/* Search Form */}
          <div className="bg-card rounded-2xl p-6 shadow-2xl animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Destination
                </label>
                <Input placeholder="Where to?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Check In
                </label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Check Out
                </label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Guests
                </label>
                <Input type="number" placeholder="2" min="1" />
              </div>
            </div>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={() => setBookingDialogOpen(true)}
            >
              <Search className="mr-2 h-5 w-5" />
              Search Tours
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
