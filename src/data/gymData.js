import {
  Activity,
  BadgeCheck,
  Dumbbell,
  Flame,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Membership", path: "/membership" },
  { label: "Trainers", path: "/trainers" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=85",
  about:
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1600&q=85",
  equipment:
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1400&q=85",
  transformation:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1500&q=85",
  cta:
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1800&q=85",
};

export const stats = [
  { value: "12K+", label: "Body recompositions" },
  { value: "38", label: "Elite strength stations" },
  { value: "94%", label: "Member retention" },
  { value: "24/7", label: "Training access" },
];

export const memberships = [
  {
    name: "Basic",
    price: "₹1499",
    description: "For disciplined starters building consistency.",
    features: ["Gym floor access", "Locker support", "Monthly form check", "Community challenges"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹2499",
    description: "For serious lifters chasing visible progress.",
    features: ["Everything in Basic", "Group classes", "Nutrition baseline", "Recovery zone access"],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "₹3999",
    description: "For transformation clients who want coaching depth.",
    features: ["Everything in Pro", "Personal coach map", "Weekly progress scans", "Priority sessions"],
    highlighted: false,
  },
];

export const trainers = [
  {
    name: "Arjun Ravi",
    role: "Strength Architect",
    specialty: "Hypertrophy, powerlifting, disciplined mass gain",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=85",
    stats: "8 yrs / 600+ clients",
  },
  {
    name: "Karthik V",
    role: "Conditioning Coach",
    specialty: "Athletic conditioning, fat loss, mobility systems",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=85",
    stats: "6 yrs / HIIT specialist",
  },
  {
    name: "Priya Menon",
    role: "Transformation Lead",
    specialty: "Body recomposition, nutrition rhythm, sustainable strength",
    image:
      "https://images.unsplash.com/photo-1609899464726-209befaac5bc?auto=format&fit=crop&w=1000&q=85",
    stats: "9 yrs / 900+ check-ins",
  },
];

export const testimonials = [
  {
    quote:
      "VANTA feels different. The coaching is sharp, the space is intense, and the results became impossible to ignore.",
    author: "Dev Nair",
    label: "Lost 18 kg in 7 months",
  },
  {
    quote:
      "The Pro plan turned my random workouts into a system. Every week had purpose, pressure, and proof.",
    author: "Meera S",
    label: "Strength + mobility client",
  },
  {
    quote:
      "No fluff. Just a premium training environment where everyone is serious about becoming harder to beat.",
    author: "Rohan K",
    label: "College athlete",
  },
];

export const facilities = [
  { title: "Olympic Strength Zone", icon: Dumbbell, copy: "Rack-dense layouts, calibrated plates, and coaching eyes where heavy work happens." },
  { title: "Conditioning Lab", icon: Zap, copy: "Sled lanes, assault bikes, battle ropes, and brutal formats for athletic output." },
  { title: "Recovery Lounge", icon: HeartPulse, copy: "Mobility stations, compression tools, and quiet resets between high-load sessions." },
  { title: "Transformation Studio", icon: Trophy, copy: "Scan-led progress tracking, check-ins, and private consultation bays." },
];

export const values = [
  { title: "Discipline First", icon: ShieldCheck },
  { title: "Measurable Progress", icon: Activity },
  { title: "Premium Coaching", icon: BadgeCheck },
  { title: "Hard Energy", icon: Flame },
  { title: "Community Pressure", icon: Users },
  { title: "Modern Rituals", icon: Sparkles },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=85",
];

export const comparisonRows = [
  ["Gym floor access", "Yes", "Yes", "Yes"],
  ["Group classes", "Limited", "Unlimited", "Unlimited"],
  ["Progress scans", "Monthly", "Bi-weekly", "Weekly"],
  ["Coach guidance", "Form checks", "Program review", "Dedicated coach"],
  ["Recovery access", "No", "Yes", "Priority"],
];
