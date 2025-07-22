import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Users, 
  GraduationCap, 
  Building2, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Lightbulb,
  Shield
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2021', title: 'Founded', description: 'CampusFest was born from the need to simplify campus event management' },
    { year: '2022', title: 'First 100 Campuses', description: 'Reached our first major milestone with 100 educational institutions' },
    { year: '2023', title: 'Feature Expansion', description: 'Launched advanced analytics, notifications, and certificate generation' },
    { year: '2024', title: 'Global Reach', description: 'Now serving 500+ campuses worldwide with 50,000+ active users' },
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'For Students',
      description: 'Discover events, connect with peers, and build your campus experience',
      features: ['Easy event discovery', 'One-click registration', 'Digital certificates', 'Community building']
    },
    {
      icon: Users,
      title: 'For Faculty',
      description: 'Streamline event organization and track student engagement',
      features: ['Event management tools', 'Attendance tracking', 'Analytics dashboard', 'Automated workflows']
    },
    {
      icon: Building2,
      title: 'For Institutions',
      description: 'Enhance campus life and improve administrative efficiency',
      features: ['Centralized platform', 'Resource optimization', 'Data insights', 'Cost reduction']
    }
  ];

  const values = [
    { icon: Heart, title: 'Student-Centric', description: 'Every feature is designed with student experience in mind' },
    { icon: Lightbulb, title: 'Innovation', description: 'Continuously evolving to meet the changing needs of education' },
    { icon: Shield, title: 'Reliability', description: 'Trusted platform with enterprise-grade security and uptime' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-campus-blue-light to-campus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-campus-text mb-6">
            About <span className="text-campus-blue">CampusFest</span>
          </h1>
          <p className="text-xl text-campus-text-light max-w-3xl mx-auto">
            We're on a mission to transform how educational institutions manage events, 
            bringing communities together and enriching campus life through technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-campus-blue mr-3" />
                <h2 className="text-3xl font-bold text-campus-text">Our Mission</h2>
              </div>
              <h3 className="text-2xl font-semibold text-campus-text mb-4">
                Simplifying Event Management for Campuses
              </h3>
              <p className="text-campus-text-light text-lg mb-6 leading-relaxed">
                We believe that campus events should bring people together, not create administrative 
                headaches. CampusFest was created to bridge the gap between traditional event management 
                and the digital-first world that students and educators live in today.
              </p>
              <p className="text-campus-text-light text-lg leading-relaxed">
                By providing intuitive tools for event organization, registration, and management, 
                we help institutions focus on what matters most: creating meaningful experiences 
                that enhance education and build lasting communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-campus-blue to-campus-blue-dark rounded-2xl p-8 text-campus-white">
              <h3 className="text-2xl font-bold mb-6">Impact by Numbers</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Educational Institutions</span>
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Active Students & Faculty</span>
                  <span className="text-2xl font-bold">50,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Events Organized</span>
                  <span className="text-2xl font-bold">2,500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Countries Served</span>
                  <span className="text-2xl font-bold">25+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-campus-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-campus-text mb-4">
              How CampusFest Benefits Everyone
            </h2>
            <p className="text-campus-text-light max-w-2xl mx-auto text-lg">
              Our platform is designed to create value for every member of the campus community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-campus-blue-light rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-campus-blue" />
                </div>
                <h3 className="text-xl font-semibold text-campus-text mb-4">{benefit.title}</h3>
                <p className="text-campus-text-light mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-campus-text-light">
                      <CheckCircle className="w-4 h-4 text-campus-blue mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-campus-text mb-4">
              Our Journey
            </h2>
            <p className="text-campus-text-light max-w-2xl mx-auto text-lg">
              From a simple idea to serving hundreds of educational institutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-campus-blue text-campus-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold text-campus-text mb-2">{milestone.title}</h3>
                <p className="text-campus-text-light">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-campus-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-campus-text mb-4">
              Our Values
            </h2>
            <p className="text-campus-text-light max-w-2xl mx-auto text-lg">
              The principles that guide everything we do at CampusFest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-campus-blue-light rounded-full mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-campus-blue" />
                </div>
                <h3 className="text-xl font-semibold text-campus-text mb-3">{value.title}</h3>
                <p className="text-campus-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-campus-blue to-campus-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-white mb-6">
            Ready to Transform Your Campus?
          </h2>
          <p className="text-xl text-campus-white/90 mb-8">
            Join the hundreds of institutions already using CampusFest to create 
            exceptional campus experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-campus-white text-campus-white hover:bg-campus-white hover:text-campus-blue">
              Contact Sales
            </Button>
            <Button variant="hero" size="lg" className="bg-campus-white text-campus-blue hover:bg-campus-white/90">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;