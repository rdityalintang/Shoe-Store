export type Product = {
  id: string;
  name: string;
  category: "Running" | "Casual" | "Sneakers";
  price: number;
  image: string;
  isNew?: boolean;
};

export const products: Product[] = [
  {
    id: "air-zoom-runner",
    name: "Air Zoom Runner",
    category: "Running",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "classic-leather-oxford",
    name: "Classic Leather Oxford",
    category: "Casual",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "urban-street-sneaker",
    name: "Urban Street Sneaker",
    category: "Sneakers",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "trailblazer-pro",
    name: "Trailblazer Pro",
    category: "Running",
    price: 145,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "heritage-canvas-low",
    name: "Heritage Canvas Low",
    category: "Casual",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "nightfall-high-top",
    name: "Nightfall High-Top",
    category: "Sneakers",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80&auto=format&fit=crop",
  },
];

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "running",
    name: "Running",
    description: "Engineered for speed, comfort, and endurance.",
    image:
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "casual",
    name: "Casual",
    description: "Everyday refinement, built to last.",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "sneakers",
    name: "Sneakers",
    description: "Statement pieces for the modern wardrobe.",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&q=80&auto=format&fit=crop",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "amara-w",
    name: "Amara Whitfield",
    location: "New York, USA",
    quote:
      "The quality is unreal for the price point. My Trailblazer Pros still look brand new after months of daily wear.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Amara+Whitfield&background=111111&color=ffffff&size=128",
  },
  {
    id: "daniel-k",
    name: "Daniel Kwan",
    location: "Singapore",
    quote:
      "Fast shipping, beautiful packaging, and the Oxford pair fits like it was made for me. Genuinely premium experience.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Daniel+Kwan&background=111111&color=ffffff&size=128",
  },
  {
    id: "sofia-m",
    name: "Sofia Marchetti",
    location: "Milan, Italy",
    quote:
      "STRYDE has become my go-to for sneakers. The Nightfall High-Top gets compliments everywhere I go.",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=Sofia+Marchetti&background=111111&color=ffffff&size=128",
  },
];

export type Feature = {
  id: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    id: "free-shipping",
    title: "Free Shipping",
    description: "Complimentary delivery on every order, worldwide.",
  },
  {
    id: "original-product",
    title: "100% Original",
    description: "Authentic products sourced directly from the brand.",
  },
  {
    id: "easy-returns",
    title: "Easy Returns",
    description: "30-day hassle-free returns, no questions asked.",
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Dedicated customer care whenever you need us.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
