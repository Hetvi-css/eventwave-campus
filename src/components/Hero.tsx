import { Button } from '@/components/ui/button';
const heroImage = '/lovable-uploads/4a87b8ae-d8e2-4812-b9ab-9bb1143826af.png';
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
        <div className="absolute inset-0 bg-gradient-to-r from-campus-primary/85 to-campus-accent/75"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-campus-white/20 backdrop-blur-sm text-campus-white mb-6 border border-campus-white/30">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Trusted by 500+ Campuses</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-campus-white mb-6 leading-tight">
            Your Campus,{' '}
            <span className="bg-gradient-to-r from-campus-white to-campus-secondary bg-clip-text text-transparent">
              Your Events
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-campus-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Simplifying event management within educational institutions. 
            Connect, organize, and participate in campus life like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-3 h-auto group"
            >
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 h-auto border-campus-white text-campus-white hover:bg-campus-white hover:text-campus-primary"
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
              <div className="text-2xl font-bold text-campus-white">2,500+</div>
              <div className="text-campus-white/80">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-campus-white/20 rounded-full mx-auto mb-3 backdrop-blur-sm">
                <Users className="w-6 h-6 text-campus-white" />
              </div>
              <div className="text-2xl font-bold text-campus-white">50,000+</div>
              <div className="text-campus-white/80">Students Connected</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-campus-white/20 rounded-full mx-auto mb-3 backdrop-blur-sm">
                <Star className="w-6 h-6 text-campus-white" />
              </div>
              <div className="text-2xl font-bold text-campus-white">98%</div>
              <div className="text-campus-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;