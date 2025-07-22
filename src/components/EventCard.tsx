import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  attendees: number;
  maxAttendees: number;
  description: string;
  featured?: boolean;
}

const EventCard = ({ 
  title, 
  date, 
  time, 
  venue, 
  category, 
  attendees, 
  maxAttendees, 
  description, 
  featured = false 
}: EventCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technical':
        return 'bg-blue-100 text-blue-800';
      case 'cultural':
        return 'bg-purple-100 text-purple-800';
      case 'sports':
        return 'bg-green-100 text-green-800';
      case 'workshop':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border ${
      featured ? 'border-campus-blue ring-2 ring-campus-blue/20' : 'border-border hover:border-campus-blue/30'
    }`}>
      {featured && (
        <div className="bg-gradient-to-r from-campus-blue to-campus-blue-dark text-campus-white text-center py-2 text-sm font-medium">
          ⭐ Featured Event
        </div>
      )}
      
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
          <div className="flex items-center text-campus-text-light text-sm">
            <Users className="w-4 h-4 mr-1" />
            <span>{attendees}/{maxAttendees}</span>
          </div>
        </div>

        {/* Event Title */}
        <h3 className="text-xl font-semibold text-campus-text mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-campus-text-light text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-campus-text-light text-sm">
            <Calendar className="w-4 h-4 mr-2 text-campus-blue" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-campus-text-light text-sm">
            <Clock className="w-4 h-4 mr-2 text-campus-blue" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-campus-text-light text-sm">
            <MapPin className="w-4 h-4 mr-2 text-campus-blue" />
            <span>{venue}</span>
          </div>
        </div>

        {/* Registration Button */}
        <div className="flex gap-2">
          <Button 
            variant="default" 
            className="flex-1"
            disabled={attendees >= maxAttendees}
          >
            {attendees >= maxAttendees ? 'Full' : 'Register'}
          </Button>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;