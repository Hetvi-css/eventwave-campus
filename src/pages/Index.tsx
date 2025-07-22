import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, Award, BarChart3, Bell, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const upcomingEvents = [
    {
      title: 'Annual Tech Symposium 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      venue: 'Main Auditorium',
      category: 'Technical',
      attendees: 245,
      maxAttendees: 300,
      description: 'Join us for a day of cutting-edge technology presentations and networking.',
      featured: true
    },
    {
      title: 'Spring Cultural Festival',
      date: 'March 20, 2024',
      time: '6:00 PM - 11:00 PM',
      venue: 'Campus Grounds',
      category: 'Cultural',
      attendees: 180,
      maxAttendees: 500,
      description: 'Celebrate diversity with music, dance, food, and art from around the world.',
      featured: true
    },
    {
      title: 'Web Development Bootcamp',
      date: 'March 18, 2024',
      time: '10:00 AM - 4:00 PM',
      venue: 'Computer Lab A',
      category: 'Workshop',
      attendees: 25,
      maxAttendees: 30,
      description: 'Intensive hands-on workshop covering modern web development technologies.',
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Event Registration',
      description: 'Seamless registration process with instant confirmations and automated reminders.'
    },
    {
      icon: Users,
      title: 'User Dashboard',
      description: 'Comprehensive dashboard for students, faculty, and administrators to manage events.'
    },
    {
      icon: Bell,
      title: 'Notifications & Reminders',
      description: 'Smart notification system keeping everyone informed about important updates.'
    },
    {
      icon: Award,
      title: 'Certificate Generation',
      description: 'Automated digital certificate creation and distribution for event participants.'
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      description: 'Detailed insights and analytics to track event performance and engagement.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* About Brief */}
      <section className="py-16 bg-campus-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-text mb-6">
            Simplifying Event Management for Educational Institutions
          </h2>
          <p className="text-xl text-campus-text-light max-w-4xl mx-auto mb-8 leading-relaxed">
            CampusFest is the comprehensive platform that brings together students, faculty, and staff 
            to create, discover, and participate in campus events. From workshops to cultural celebrations, 
            we make event management effortless and engaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/features">
              <Button variant="cta" size="lg">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="secondary" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-campus-text mb-4">
              Upcoming Campus Events
            </h2>
            <p className="text-xl text-campus-text-light max-w-2xl mx-auto">
              Don't miss out on these exciting opportunities to learn, connect, and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <Button variant="outline" size="lg">
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-campus-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-campus-text mb-4">
              Powerful Features for Modern Campus Life
            </h2>
            <p className="text-xl text-campus-text-light max-w-3xl mx-auto">
              Everything you need to organize, manage, and participate in campus events, 
              all in one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-campus-primary-light rounded-full mx-auto mb-4 group-hover:bg-campus-accent group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-campus-primary group-hover:text-campus-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-campus-text mb-3">{feature.title}</h3>
                <p className="text-campus-text-light">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="cta" size="lg">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-campus-primary to-campus-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-campus-white mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-campus-white">
              Ready to Get Started?
            </h2>
          </div>
          <p className="text-xl text-campus-white/90 mb-8">
            Join thousands of students and educators who are already using CampusFest 
            to create amazing campus experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-campus-white text-campus-primary hover:bg-campus-white/90">
              Register Now
            </Button>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-campus-white text-campus-white hover:bg-campus-white hover:text-campus-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
