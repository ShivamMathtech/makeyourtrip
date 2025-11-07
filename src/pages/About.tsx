import { Award, Users, Globe, Heart, Target, Compass } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "200+", label: "Destinations" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We love what we do and it shows in every journey we create for our travelers.",
  },
  {
    icon: Target,
    title: "Excellence First",
    description: "We strive for perfection in every detail, ensuring unforgettable experiences.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction and safety are at the heart of everything we do.",
  },
  {
    icon: Compass,
    title: "Innovation",
    description: "We constantly explore new destinations and create unique travel experiences.",
  },
];

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", image: "" },
  { name: "Michael Chen", role: "Head of Operations", image: "" },
  { name: "Emma Williams", role: "Travel Director", image: "" },
  { name: "James Rodriguez", role: "Customer Success", image: "" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About TravelWise</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              Creating extraordinary travel experiences since 2009
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2009, TravelWise began with a simple mission: to make world-class
                    travel experiences accessible to everyone. What started as a small boutique
                    travel agency has grown into a trusted global brand.
                  </p>
                  <p>
                    Our team of passionate travel experts has explored every corner of the globe,
                    carefully curating experiences that go beyond typical tourist attractions. We
                    believe in authentic, immersive travel that creates lasting memories.
                  </p>
                  <p>
                    Today, we're proud to have helped over 50,000 travelers discover the world,
                    with a satisfaction rate that speaks to our commitment to excellence. Every
                    journey we plan is crafted with care, attention to detail, and a deep
                    understanding of what makes travel truly transformative.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={teamImage}
                  alt="Our team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-xl">
                  <Globe className="h-12 w-12 mb-2" />
                  <p className="font-bold">50+ Countries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Honored to be recognized by industry leaders
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 bg-card rounded-2xl shadow-lg">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Best Tour Operator</h3>
                <p className="text-sm text-muted-foreground">Travel Excellence Awards 2023</p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl shadow-lg">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Customer Choice Award</h3>
                <p className="text-sm text-muted-foreground">Global Travel Magazine 2023</p>
              </div>
              <div className="text-center p-8 bg-card rounded-2xl shadow-lg">
                <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Sustainable Tourism</h3>
                <p className="text-sm text-muted-foreground">Green Travel Initiative 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate travel experts dedicated to your journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Users className="h-24 w-24 text-primary/40" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
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

export default About;
