import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageCircle,
  HeadphonesIcon,
  Building
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      detail: 'support@campusfest.edu',
      action: 'mailto:support@campusfest.edu'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 6pm',
      detail: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      detail: 'Available 24/7',
      action: '#'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/campusfest', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/campusfest', color: 'hover:text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/campusfest', color: 'hover:text-blue-700' },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-campus-blue-light to-campus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-campus-text mb-6">
            Get in <span className="text-campus-blue">Touch</span>
          </h1>
          <p className="text-xl text-campus-text-light max-w-3xl mx-auto">
            Have questions about CampusFest? We're here to help! Reach out to our 
            team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-campus-blue-light rounded-full mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-campus-blue" />
                </div>
                <h3 className="text-xl font-semibold text-campus-text mb-2">{method.title}</h3>
                <p className="text-campus-text-light mb-3">{method.description}</p>
                <a 
                  href={method.action}
                  className="text-campus-blue font-medium hover:text-campus-blue-dark transition-colors"
                >
                  {method.detail}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-campus-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-campus-text mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-campus-text mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-campus-text mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-campus-text mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-campus-text mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" variant="cta" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-campus-blue mr-3" />
                  <h3 className="text-xl font-semibold text-campus-text">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-campus-gray last:border-0">
                      <span className="text-campus-text font-medium">{schedule.day}</span>
                      <span className="text-campus-text-light">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 text-campus-blue mr-3" />
                  <h3 className="text-xl font-semibold text-campus-text">Our Office</h3>
                </div>
                <div className="text-campus-text-light">
                  <p>CampusFest Technologies Inc.</p>
                  <p>123 Education Boulevard</p>
                  <p>Suite 456, Tech Tower</p>
                  <p>Silicon Valley, CA 94025</p>
                  <p>United States</p>
                </div>
              </div>

              {/* Support */}
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <HeadphonesIcon className="w-6 h-6 text-campus-blue mr-3" />
                  <h3 className="text-xl font-semibold text-campus-text">Need Immediate Help?</h3>
                </div>
                <p className="text-campus-text-light mb-4">
                  For urgent technical issues or account problems, our support team is available 24/7 
                  through our live chat system.
                </p>
                <Button variant="outline" className="w-full">
                  Start Live Chat
                </Button>
              </div>

              {/* Social Media */}
              <div className="bg-card rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-campus-text mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-10 h-10 bg-campus-blue-light rounded-full text-campus-blue transition-colors duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <p className="text-campus-text-light text-sm mt-3">
                  Stay updated with the latest CampusFest news and features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-campus-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-campus-text-light mb-8">
            Can't find what you're looking for? Check out our comprehensive FAQ section 
            or contact our support team directly.
          </p>
          <Button variant="outline" size="lg">
            Visit FAQ Center
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;