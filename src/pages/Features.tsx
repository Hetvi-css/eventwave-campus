import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  BarChart3, 
  Bell, 
  Award, 
  Calendar,
  Shield,
  Users,
  Smartphone,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: UserPlus,
      title: 'Easy Event Registration',
      description: 'Streamlined registration process with instant confirmations and automated waitlist management.',
      benefits: ['One-click registration', 'Automatic confirmation emails', 'Waitlist management', 'QR code tickets']
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Dashboard',
      description: 'Real-time analytics and insights to track event performance and student engagement.',
      benefits: ['Event analytics', 'Attendance tracking', 'Registration trends', 'Custom reports']
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Intelligent reminder system keeping everyone informed about upcoming events and deadlines.',
      benefits: ['Push notifications', 'Email reminders', 'SMS alerts', 'Custom notification rules']
    },
    {
      icon: Award,
      title: 'Digital Certificates',
      description: 'Automated certificate generation and distribution for event participants and organizers.',
      benefits: ['Auto-generated certificates', 'Custom templates', 'Digital verification', 'Bulk distribution']
    },
    {
      icon: Calendar,
      title: 'Advanced Scheduling',
      description: 'Intelligent scheduling system that prevents conflicts and optimizes venue utilization.',
      benefits: ['Conflict detection', 'Venue optimization', 'Recurring events', 'Calendar integration']
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Connect students with similar interests and build lasting campus communities.',
      benefits: ['Interest-based matching', 'Group creation', 'Discussion forums', 'Networking tools']
    }
  ];

  const additionalFeatures = [
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security with 99.9% uptime' },
    { icon: Smartphone, title: 'Mobile First', description: 'Fully responsive design optimized for mobile devices' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-campus-blue-light to-campus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-campus-text mb-6">
            Powerful Features for{' '}
            <span className="text-campus-blue">Modern Campus Life</span>
          </h1>
          <p className="text-xl text-campus-text-light max-w-3xl mx-auto mb-8">
            Everything you need to organize, manage, and participate in campus events.
            Built by educators, for educators.
          </p>
          <Button variant="cta" size="lg" className="mb-4">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border hover:border-campus-blue/30"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-campus-blue-light rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-campus-blue" />
                </div>
                <h3 className="text-xl font-semibold text-campus-text mb-4">{feature.title}</h3>
                <p className="text-campus-text-light mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-campus-text-light">
                      <div className="w-1.5 h-1.5 bg-campus-blue rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-campus-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-campus-text mb-4">
              Built for Performance & Security
            </h2>
            <p className="text-campus-text-light max-w-2xl mx-auto">
              CampusFest is engineered with the latest technologies to ensure 
              reliability, security, and scalability for institutions of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-6 bg-card rounded-xl shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-campus-blue-light rounded-full mr-4">
                  <feature.icon className="w-6 h-6 text-campus-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-campus-text mb-1">{feature.title}</h3>
                  <p className="text-campus-text-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-campus-blue to-campus-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-white mb-6">
            Ready to Transform Your Campus Events?
          </h2>
          <p className="text-xl text-campus-white/90 mb-8">
            Join thousands of institutions already using CampusFest to create amazing campus experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-campus-white text-campus-white hover:bg-campus-white hover:text-campus-blue">
              Schedule Demo
            </Button>
            <Button variant="hero" size="lg" className="bg-campus-white text-campus-blue hover:bg-campus-white/90">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;