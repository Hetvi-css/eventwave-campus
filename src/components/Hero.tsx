import { Button } from '@/components/ui/button';
const heroImage = '/lovable-uploads/425eeac9-0c53-4e53-a16a-e01b5e1ba81b.png';
import { ArrowRight, Calendar, Users, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Campus Life" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-campus-primary/75 to-campus-primary-dark/65"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-campus-white mb-8 leading-tight">
            <span className="block">Your Campus,</span>
            <span className="bg-gradient-to-r from-campus-white to-campus-accent bg-clip-text text-transparent block">
              Your Events
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-campus-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Simplifying event management within educational institutions. 
            Connect, organize, and participate in campus life like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-10 py-4 h-auto group min-w-[200px]"
            >
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 h-auto min-w-[200px]"
            >
              Register Now
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-campus-white/20 rounded-full mx-auto mb-3 backdrop-blur-sm">
                <Calendar className="w-6 h-6 text-campus-white" />
              </div>
              <div className="text-2xl font-bold text-campus-white">0</div>
              <div className="text-campus-white/80">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-campus-white/20 rounded-full mx-auto mb-3 backdrop-blur-sm">
                <Users className="w-6 h-6 text-campus-white" />
              </div>
              <div className="text-2xl font-bold text-campus-white">0</div>
              <div className="text-campus-white/80">Students Connected</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-campus-white/20 rounded-full mx-auto mb-3 backdrop-blur-sm">
                <Star className="w-6 h-6 text-campus-white" />
              </div>
              <div className="text-2xl font-bold text-campus-white">0%</div>
              <div className="text-campus-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;