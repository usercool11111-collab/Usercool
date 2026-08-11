import { Testimonial, FacilityService, CafeItem } from '../types';

// Asset references generated using Gemini image generation
import heroGymFloorImg from '../assets/images/simple_empty_gym_1786485930244.jpg';
import aboutGymInteriorImg from '../assets/images/about_gym_interior_1786389108258.jpg';
import strengthZoneImg from '../assets/images/strength_zone_1786389118697.jpg';
import cafeCounterImg from '../assets/images/cafe_counter_1786389129714.jpg';
import cardioZoneImg from '../assets/images/cardio_zone_image_1786484359257.jpg';
import yogaStudioImg from '../assets/images/yoga_studio_image_1786484371048.jpg';
import dietConsultImg from '../assets/images/diet_consult_image_1786484382838.jpg';

export const GYM_IMAGES = {
  hero: heroGymFloorImg,
  about: aboutGymInteriorImg,
  strength: strengthZoneImg,
  cafe: cafeCounterImg,
  cardio: cardioZoneImg,
  yoga: yogaStudioImg,
  diet: dietConsultImg,
};

export const GYM_INFO = {
  name: 'Lifetime Fitness Club',
  tagline: "Jaipur's Most Premium Fitness Experience. Built for Real Results.",
  rating: 4.9,
  totalReviews: 745,
  address: '3rd Floor, V Cube, Plot No. 1-6, Opp. Gaurav Tower Marg, Kalyan Colony, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017',
  landmarks: 'Opposite Gaurav Tower Marg, Near V Cube Mall',
  phone: '+91 99505 50885',
  phoneFormatted: '+919950550885',
  timings: 'Open Daily — 5:00 AM to 11:00 PM',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.873214589212!2d75.8115682!3d26.8439178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db60717208b07%3A0xb3a8bbbe97a9a147!2sMalviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  directionsUrl: 'https://maps.google.com/?q=3rd+Floor,+V+Cube,+Plot+No.+1-6,+Opp.+Gaurav+Tower+Marg,+Kalyan+Colony,+D-Block,+Malviya+Nagar,+Jaipur,+Rajasthan+302017',
  whatsappUrl: 'https://wa.me/919950550885?text=Hi%20Lifetime%20Fitness%20Club!%20I%20would%20like%20to%20book%20my%201-Day%20Free%20Trial.'
};

export const SERVICES: FacilityService[] = [
  {
    id: 'strength',
    icon: 'Dumbbell',
    title: 'Strength & Functional Training',
    shortDesc: 'Purpose-built zone for serious muscle building and functional strength. Every rep, guided right.',
    fullDesc: 'Equipped with biomechanically engineered Hammer Strength racks, Olympic platforms, dumbells up to 50kg, cable crossover stations, and dedicated turf lanes for sled pushes and kettlebell conditioning.',
    image: GYM_IMAGES.strength,
    features: [
      'Heavy-duty Olympic power racks & benches',
      'Ergonomic dumbbells & kettlebell stations',
      'Guided posture checks by certified trainers',
      'Dedicated functional turf zone for agility work'
    ]
  },
  {
    id: 'cardio',
    icon: 'Activity',
    title: 'Advanced Cardio Equipment',
    shortDesc: 'Modern, high-tech machines that make every cardio session smarter — not just harder.',
    fullDesc: 'Experience state-of-the-art treadmills with shock absorption, stairmasters, assault bikes, rowing machines, and elliptical trainers with interactive heart-rate telemetry.',
    image: GYM_IMAGES.cardio,
    features: [
      'Shock-absorbing high-tier treadmills',
      'Smart heart-rate telemetry integration',
      'Assault bikes & concept-2 rowing machines',
      'Air-conditioned spacious cardio floor layout'
    ]
  },
  {
    id: 'yoga',
    icon: 'Sparkles',
    title: 'Expert-Led Yoga Classes',
    shortDesc: 'Improve flexibility, recover faster, and reset your mind with guided yoga sessions.',
    fullDesc: 'Recharge your spirit in our tranquil, climate-controlled studio. Led by seasoned yoga masters focusing on Hatha, Vinyasa flow, pranayama breathing, and deep core conditioning.',
    image: GYM_IMAGES.yoga,
    features: [
      'Daily morning & evening batch options',
      'Postural alignment & mobility focus',
      'Calming acoustic studio environment',
      'Free mats & props available on floor'
    ]
  },
  {
    id: 'cafe',
    icon: 'Coffee',
    title: 'Premium Gym Café',
    shortDesc: 'Post-workout nutrition, done right. Healthy, delicious, and built to support your goals.',
    fullDesc: 'Refuel immediately after your session with fresh whey protein smoothies, cold-pressed juices, espresso, high-protein egg white wraps, and custom macro-calculated bowls prepared fresh.',
    image: GYM_IMAGES.cafe,
    features: [
      'Custom protein shakes made with premium isolate',
      'Fresh fruit juices & cold brew coffee',
      'Macro-verified meal options',
      'Cozy lounge seating area to relax or network'
    ]
  },
  {
    id: 'diet',
    icon: 'ClipboardCheck',
    title: 'Customized Diet & Workout Plans',
    shortDesc: 'No generic templates. Our certified trainers build a plan around your body and your goals.',
    fullDesc: 'Get a 1-on-1 metabolic assessment, body composition scan, and a tailored weekly routine created specifically for your age, schedule, dietary preferences (100% pure veg available), and target weight.',
    image: GYM_IMAGES.diet,
    features: [
      'InBody composition body analysis',
      'Personalized weekly training splits',
      'Customized Indian & Rajasthani diet charts',
      'Bi-weekly progress checks with senior coaches'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Verified Google Review',
    role: 'Member since 2023',
    rating: 5,
    date: '2 weeks ago',
    content: 'This is the best gym in Jaipur! The environment, equipment, and cleanliness are top notch. Trainer Ajay Sir is very humble and guides us really well.',
    verified: true,
    highlightTrainer: 'Ajay Sir'
  },
  {
    id: '2',
    author: 'Rahul Makhija',
    role: 'Regular Lifter',
    rating: 5,
    date: '1 month ago',
    content: 'Been here for 1 year. All machines are extremely good for muscle building. The gym and washrooms are very hygienic.',
    verified: true
  },
  {
    id: '3',
    author: 'Dr. Pankaj Gakhar',
    role: 'Medical Professional & Fitness Enthusiast',
    rating: 5,
    date: '3 months ago',
    content: 'Very well maintained gym with clean equipment and supportive coaches who are always ready to guide.',
    verified: true
  },
  {
    id: '4',
    author: 'Priya Sharma',
    role: 'Yoga & Cardio Batch',
    rating: 5,
    date: '1 month ago',
    content: 'Awesome vibe in Malviya Nagar! The gym cafe serves amazing protein shakes after workout, and the female workout atmosphere is super comfortable and secure.',
    verified: true
  },
  {
    id: '5',
    author: 'Vikram Singh Rathore',
    role: 'Strength Member',
    rating: 5,
    date: '2 months ago',
    content: 'Zero waiting time even during peak hours in evening. High quality equipment and proper air conditioning throughout the facility.',
    verified: true
  }
];

export const SAMPLE_CAFE_MENU: CafeItem[] = [
  {
    id: '1',
    name: 'Anabolic Chocolate Whey Blast',
    category: 'Shakes',
    calories: 290,
    protein: '32g Protein',
    desc: 'Whey isolate, dark cocoa, almond milk, banana, and natural peanut butter.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Berry Detox Electrolyte Cold Brew',
    category: 'Juices',
    calories: 110,
    protein: '2g Protein',
    desc: 'Cold-pressed berries, coconut water, lemon, Himalayan salt & mint.',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'High-Protein Paneer Tikka Wrap',
    category: 'Snacks',
    calories: 380,
    protein: '26g Protein',
    desc: 'Grilled cottage cheese, bell peppers, mint yogurt dressing in whole wheat wrap.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Post-Workout Oats & Berry Bowl',
    category: 'Meals',
    calories: 340,
    protein: '18g Protein',
    desc: 'Rolled oats cooked in almond milk, chia seeds, fresh blueberries, and honey drizzle.',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&q=80&w=400'
  }
];

export const TIME_SLOTS = [
  { label: 'Early Morning (5:00 AM - 8:00 AM)', value: 'morning_early' },
  { label: 'Morning Peak (8:00 AM - 11:00 AM)', value: 'morning_peak' },
  { label: 'Afternoon Quiet (12:00 PM - 4:00 PM)', value: 'afternoon' },
  { label: 'Evening Peak (5:00 PM - 9:00 PM)', value: 'evening_peak' },
  { label: 'Late Night (9:00 PM - 11:00 PM)', value: 'night' }
];

export const FITNESS_GOALS = [
  'Muscle Building & Hypertrophy',
  'Fat Loss & Conditioning',
  'Functional Strength & Endurance',
  'Yoga, Flexibility & Mobility',
  'Personalized Diet & General Fitness'
];
