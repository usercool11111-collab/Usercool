export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  avatar?: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  highlightTrainer?: string;
}

export interface FacilityService {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
}

export interface TrialBooking {
  name: string;
  phone: string;
  preferredDate: string;
  timeSlot: 'morning' | 'evening';
  goal: string;
}

export interface CafeItem {
  id: string;
  name: string;
  category: 'Shakes' | 'Snacks' | 'Juices' | 'Meals';
  calories: number;
  protein: string;
  desc: string;
  image: string;
}
