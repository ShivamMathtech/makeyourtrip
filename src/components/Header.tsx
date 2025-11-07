import { Menu, X, Plane } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Plane className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TravelWise
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/#destinations" className="text-foreground hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="/tours" className="text-foreground hover:text-primary transition-colors">
              Tours
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              size="default"
              onClick={() => setBookingDialogOpen(true)}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="/"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/#destinations"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </a>
            <a
              href="/tours"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tours
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              size="default" 
              className="w-full"
              onClick={() => {
                setBookingDialogOpen(true);
                setIsMenuOpen(false);
              }}
            >
              Book Now
            </Button>
          </nav>
        )}
      </div>

      {/* Booking Dialog */}
      <BookingDialog 
        open={bookingDialogOpen} 
        onOpenChange={setBookingDialogOpen}
      />
    </header>
  );
};

export default Header;
