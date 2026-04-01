export interface Niche {
  slug: string;
  name: string;
  description: string;
  related: string[];
}

const niches: Niche[] = [
  { slug: "dentist", name: "Dentist", description: "dental practices", related: ["chiropractor", "therapist", "spa", "hair-salon", "insurance-agent"] },
  { slug: "plumber", name: "Plumber", description: "plumbing businesses", related: ["electrician", "hvac", "roofing-contractor", "house-cleaning", "appliance-repair"] },
  { slug: "roofer", name: "Roofer", description: "roofing companies", related: ["roofing-contractor", "painting-contractor", "flooring", "solar-installer", "window-cleaning"] },
  { slug: "hvac", name: "HVAC", description: "HVAC companies", related: ["plumber", "electrician", "solar-installer", "appliance-repair", "house-cleaning"] },
  { slug: "electrician", name: "Electrician", description: "electrical contractors", related: ["plumber", "hvac", "solar-installer", "security-systems", "appliance-repair"] },
  { slug: "real-estate-agent", name: "Real Estate Agent", description: "real estate agents", related: ["mortgage-broker", "insurance-agent", "property-management", "moving-company", "locksmith"] },
  { slug: "lawyer", name: "Lawyer", description: "law firms", related: ["accounting", "insurance-agent", "consultant", "mortgage-broker", "bookkeeping"] },
  { slug: "chiropractor", name: "Chiropractor", description: "chiropractic practices", related: ["dentist", "therapist", "spa", "gym", "hair-salon"] },
  { slug: "spa", name: "Spa", description: "spas and wellness centers", related: ["hair-salon", "nail-salon", "chiropractor", "gym", "therapist"] },
  { slug: "gym", name: "Gym", description: "gyms and fitness centers", related: ["spa", "chiropractor", "therapist", "daycare", "tutoring"] },
  { slug: "bakery", name: "Bakery", description: "bakeries", related: ["restaurant", "coffee-shop", "wedding-planner", "photographer", "ecommerce"] },
  { slug: "restaurant", name: "Restaurant", description: "restaurants", related: ["bakery", "coffee-shop", "bar", "photographer", "wedding-planner"] },
  { slug: "coffee-shop", name: "Coffee Shop", description: "coffee shops", related: ["bakery", "restaurant", "bar", "ecommerce", "freelancer"] },
  { slug: "photographer", name: "Photographer", description: "photography businesses", related: ["wedding-planner", "videographer", "freelancer", "ecommerce", "consultant"] },
  { slug: "wedding-planner", name: "Wedding Planner", description: "wedding planning businesses", related: ["photographer", "bakery", "restaurant", "hair-salon", "florist"] },
  { slug: "dog-groomer", name: "Dog Groomer", description: "dog grooming businesses", related: ["pet-sitter", "veterinarian", "daycare", "house-cleaning", "carpet-cleaning"] },
  { slug: "pet-sitter", name: "Pet Sitter", description: "pet sitting services", related: ["dog-groomer", "house-cleaning", "daycare", "landscaper", "locksmith"] },
  { slug: "landscaper", name: "Landscaper", description: "landscaping companies", related: ["pool-cleaning", "house-cleaning", "painting-contractor", "pest-control", "window-cleaning"] },
  { slug: "pool-cleaning", name: "Pool Cleaning", description: "pool cleaning services", related: ["landscaper", "house-cleaning", "pest-control", "window-cleaning", "carpet-cleaning"] },
  { slug: "carpet-cleaning", name: "Carpet Cleaning", description: "carpet cleaning businesses", related: ["house-cleaning", "window-cleaning", "pool-cleaning", "moving-company", "flooring"] },
  { slug: "auto-detailing", name: "Auto Detailing", description: "auto detailing businesses", related: ["car-dealership", "window-cleaning", "carpet-cleaning", "locksmith", "computer-repair"] },
  { slug: "car-dealership", name: "Car Dealership", description: "car dealerships", related: ["auto-detailing", "insurance-agent", "locksmith", "mortgage-broker", "security-systems"] },
  { slug: "window-cleaning", name: "Window Cleaning", description: "window cleaning services", related: ["house-cleaning", "carpet-cleaning", "pool-cleaning", "painting-contractor", "landscaper"] },
  { slug: "roofing-contractor", name: "Roofing Contractor", description: "roofing contractors", related: ["roofer", "painting-contractor", "flooring", "pest-inspection", "solar-installer"] },
  { slug: "pest-control", name: "Pest Control", description: "pest control companies", related: ["pest-inspection", "house-cleaning", "landscaper", "pool-cleaning", "property-management"] },
  { slug: "house-cleaning", name: "House Cleaning", description: "house cleaning services", related: ["carpet-cleaning", "window-cleaning", "pool-cleaning", "moving-company", "landscaper"] },
  { slug: "moving-company", name: "Moving Company", description: "moving companies", related: ["house-cleaning", "carpet-cleaning", "locksmith", "property-management", "real-estate-agent"] },
  { slug: "tutoring", name: "Tutoring", description: "tutoring services", related: ["daycare", "consultant", "freelancer", "therapist", "accounting"] },
  { slug: "daycare", name: "Daycare", description: "daycare centers", related: ["tutoring", "pet-sitter", "gym", "therapist", "house-cleaning"] },
  { slug: "therapist", name: "Therapist", description: "therapy practices", related: ["chiropractor", "dentist", "spa", "gym", "daycare"] },
  { slug: "accounting", name: "Accounting", description: "accounting firms", related: ["bookkeeping", "lawyer", "insurance-agent", "consultant", "mortgage-broker"] },
  { slug: "bookkeeping", name: "Bookkeeping", description: "bookkeeping services", related: ["accounting", "consultant", "freelancer", "lawyer", "insurance-agent"] },
  { slug: "insurance-agent", name: "Insurance Agent", description: "insurance agencies", related: ["mortgage-broker", "real-estate-agent", "accounting", "lawyer", "car-dealership"] },
  { slug: "mortgage-broker", name: "Mortgage Broker", description: "mortgage brokerages", related: ["real-estate-agent", "insurance-agent", "accounting", "lawyer", "property-management"] },
  { slug: "hair-salon", name: "Hair Salon", description: "hair salons", related: ["nail-salon", "barber", "spa", "wedding-planner", "photographer"] },
  { slug: "nail-salon", name: "Nail Salon", description: "nail salons", related: ["hair-salon", "spa", "barber", "wedding-planner", "photographer"] },
  { slug: "barber", name: "Barber", description: "barbershops", related: ["hair-salon", "nail-salon", "spa", "gym", "photographer"] },
  { slug: "ecommerce", name: "Ecommerce", description: "ecommerce stores", related: ["ecommerce-seo", "saas", "freelancer", "consultant", "photographer"] },
  { slug: "ecommerce-seo", name: "Ecommerce SEO", description: "ecommerce SEO businesses", related: ["ecommerce", "saas", "consultant", "freelancer", "it-services"] },
  { slug: "saas", name: "SaaS", description: "SaaS companies", related: ["ecommerce", "ecommerce-seo", "it-services", "consultant", "freelancer"] },
  { slug: "freelancer", name: "Freelancer", description: "freelancers", related: ["consultant", "photographer", "bookkeeping", "ecommerce", "tutoring"] },
  { slug: "consultant", name: "Consultant", description: "consulting businesses", related: ["freelancer", "accounting", "bookkeeping", "lawyer", "it-services"] },
  { slug: "locksmith", name: "Locksmith", description: "locksmith businesses", related: ["security-systems", "moving-company", "property-management", "real-estate-agent", "car-dealership"] },
  { slug: "appliance-repair", name: "Appliance Repair", description: "appliance repair services", related: ["computer-repair", "hvac", "electrician", "plumber", "house-cleaning"] },
  { slug: "computer-repair", name: "Computer Repair", description: "computer repair shops", related: ["it-services", "appliance-repair", "security-systems", "auto-detailing", "locksmith"] },
  { slug: "it-services", name: "IT Services", description: "IT service providers", related: ["computer-repair", "saas", "security-systems", "consultant", "ecommerce-seo"] },
  { slug: "security-systems", name: "Security Systems", description: "security system installers", related: ["locksmith", "electrician", "it-services", "computer-repair", "property-management"] },
  { slug: "solar-installer", name: "Solar Installer", description: "solar installation companies", related: ["electrician", "roofing-contractor", "hvac", "painting-contractor", "flooring"] },
  { slug: "painting-contractor", name: "Painting Contractor", description: "painting contractors", related: ["roofing-contractor", "flooring", "window-cleaning", "landscaper", "house-cleaning"] },
  { slug: "flooring", name: "Flooring", description: "flooring companies", related: ["painting-contractor", "carpet-cleaning", "roofing-contractor", "house-cleaning", "moving-company"] },
  { slug: "pest-inspection", name: "Pest Inspection", description: "pest inspection services", related: ["pest-control", "property-management", "real-estate-agent", "house-cleaning", "roofing-contractor"] },
  { slug: "property-management", name: "Property Management", description: "property management companies", related: ["real-estate-agent", "mortgage-broker", "locksmith", "house-cleaning", "pest-inspection"] },
  { slug: "veterinarian", name: "Veterinarian", description: "veterinary clinics", related: ["dog-groomer", "pet-sitter", "dentist", "chiropractor", "therapist"] },
  { slug: "videographer", name: "Videographer", description: "videography businesses", related: ["photographer", "wedding-planner", "freelancer", "ecommerce", "consultant"] },
  { slug: "florist", name: "Florist", description: "florist shops", related: ["wedding-planner", "bakery", "photographer", "restaurant", "ecommerce"] },
  { slug: "bar", name: "Bar", description: "bars and nightlife venues", related: ["restaurant", "coffee-shop", "photographer", "wedding-planner", "bakery"] },
];

export default niches;

export function getNicheBySlug(slug: string): Niche | undefined {
  return niches.find((n) => n.slug === slug);
}

export function getRelatedNiches(niche: Niche): Niche[] {
  return niche.related
    .map((slug) => getNicheBySlug(slug))
    .filter((n): n is Niche => n !== undefined);
}
