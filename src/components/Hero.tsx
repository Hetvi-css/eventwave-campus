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
        <div className="absolute inset-0 bg-gradient-to-br from-campus-primary/70 via-campus-primary/60 to-campus-primary-dark/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-campus-white mb-6 leading-tight">
            <span className="block">Your Campus,</span>
            <span className="bg-gradient-to-r from-campus-white to-campus-accent bg-clip-text text-transparent block">
              Your Events
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-campus-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Simplifying event management within educational institutions. 
            Connect, organize, and participate in campus life like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base px-8 py-3 h-auto group rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Events
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-3 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Register Now
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto">
            <div className="text-center bg-campus-white/10 backdrop-blur-sm rounded-xl p-4 border border-campus-white/20">
              <div className="flex items-center justify-center w-10 h-10 bg-campus-white/30 rounded-full mx-auto mb-2">
                <Calendar className="w-5 h-5 text-campus-white" />
              </div>
              <div className="text-xl font-bold text-campus-white">0</div>
              <div className="text-sm text-campus-white/80">Events Organized</div>
            </div>
            <div className="text-center bg-campus-white/10 backdrop-blur-sm rounded-xl p-4 border border-campus-white/20">
              <div className="flex items-center justify-center w-10 h-10 bg-campus-white/30 rounded-full mx-auto mb-2">
                <Users className="w-5 h-5 text-campus-white" />
              </div>
              <div className="text-xl font-bold text-campus-white">0</div>
              <div className="text-sm text-campus-white/80">Students Connected</div>
            </div>
            <div className="text-center bg-campus-white/10 backdrop-blur-sm rounded-xl p-4 border border-campus-white/20">
              <div className="flex items-center justify-center w-10 h-10 bg-campus-white/30 rounded-full mx-auto mb-2">
                <Star className="w-5 h-5 text-campus-white" />
              </div>
              <div className="text-xl font-bold text-campus-white">0%</div>
              <div className="text-sm text-campus-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;