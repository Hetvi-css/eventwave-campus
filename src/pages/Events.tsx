import { useState } from 'react';
import Header from '@/components/Header';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Calendar as CalendarIcon, Users, MapPin } from 'lucide-react';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'technical', label: 'Technical' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'sports', label: 'Sports' },
    { value: 'workshop', label: 'Workshop' },
  ];

  const events = [
    {
      title: 'Annual Tech Symposium 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      venue: 'Main Auditorium',
      category: 'Technical',
      attendees: 245,
      maxAttendees: 300,
      description: 'Join us for a day of cutting-edge technology presentations, workshops, and networking opportunities with industry leaders.',
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
      description: 'Celebrate diversity with music, dance, food, and art from cultures around the world. Student performances and cultural exhibitions.',
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
      description: 'Intensive hands-on workshop covering modern web development technologies including React, Node.js, and MongoDB.',
    },
    {
      title: 'Inter-College Basketball Championship',
      date: 'March 22, 2024',
      time: '2:00 PM - 8:00 PM',
      venue: 'Sports Complex',
      category: 'Sports',
      attendees: 150,
      maxAttendees: 200,
      description: 'Cheer for your favorite teams in this exciting basketball tournament featuring colleges from across the region.',
    },
    {
      title: 'AI & Machine Learning Conference',
      date: 'March 25, 2024',
      time: '9:00 AM - 6:00 PM',
      venue: 'Engineering Building',
      category: 'Technical',
      attendees: 120,
      maxAttendees: 150,
      description: 'Explore the latest developments in AI and ML with keynote speakers from leading tech companies and research institutions.',
    },
    {
      title: 'Creative Writing Workshop',
      date: 'March 28, 2024',
      time: '2:00 PM - 5:00 PM',
      venue: 'Library Seminar Room',
      category: 'Workshop',
      attendees: 15,
      maxAttendees: 25,
      description: 'Develop your writing skills with published authors. Learn techniques for creative storytelling and character development.',
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           event.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-campus-blue-light to-campus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-campus-text mb-4">
              Campus Events
            </h1>
            <p className="text-xl text-campus-text-light max-w-3xl mx-auto">
              Discover, register, and participate in exciting events happening across campus.
              From workshops to cultural celebrations, there's something for everyone.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-card rounded-lg shadow-md">
              <CalendarIcon className="w-8 h-8 text-campus-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-campus-text">{events.length}</div>
              <div className="text-campus-text-light">Active Events</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg shadow-md">
              <Users className="w-8 h-8 text-campus-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-campus-text">735</div>
              <div className="text-campus-text-light">Total Registrations</div>
            </div>
            <div className="text-center p-4 bg-card rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-campus-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-campus-text">12</div>
              <div className="text-campus-text-light">Campus Venues</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-campus-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-campus-text-light w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-campus-text-light" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-input rounded-md bg-background text-campus-text focus:outline-none focus:ring-2 focus:ring-campus-blue"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <Button variant="cta">
                Add Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <CalendarIcon className="w-16 h-16 text-campus-text-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-campus-text mb-2">No events found</h3>
              <p className="text-campus-text-light">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={index}
                  {...event}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-campus-blue to-campus-blue-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-campus-white mb-6">
            Want to Organize Your Own Event?
          </h2>
          <p className="text-xl text-campus-white/90 mb-8">
            CampusFest makes it easy to plan, promote, and manage your campus events.
          </p>
          <Button variant="hero" size="lg" className="bg-campus-white text-campus-blue hover:bg-campus-white/90">
            Create Event
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;