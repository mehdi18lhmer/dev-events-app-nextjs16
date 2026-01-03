export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description: string;
}

export const events: Event[] = [
  {
    title: "Global AI Summit 2026",
    image: "/images/event1.png",
    slug: "global-ai-summit-2026",
    location: "San Francisco, USA",
    date: "March 15, 2026",
    time: "09:00 AM",
    description: "The world's premier gathering of AI researchers, engineers, and industry leaders exploring the future of generative models and autonomous systems."
  },
  {
    title: "React Conf Europe",
    image: "/images/event2.png",
    slug: "react-conf-europe-2026",
    location: "Berlin, Germany",
    date: "May 22, 2026",
    time: "10:00 AM",
    description: "Join the React community for two days of deep dives into React Server Components, Next.js optimization, and the future of web development."
  },
  {
    title: "Tokyo Tech Hackathon",
    image: "/images/event3.png",
    slug: "tokyo-tech-hackathon",
    location: "Tokyo, Japan",
    date: "July 10-12, 2026",
    time: "All Day",
    description: "A 48-hour challenge to build innovative solutions for sustainable urban living using modern web technologies and IoT."
  },
  {
    title: "DevOps Days Austin",
    image: "/images/event4.png",
    slug: "devops-days-austin-2026",
    location: "Austin, TX, USA",
    date: "September 05, 2026",
    time: "08:30 AM",
    description: "Bridging the gap between development and operations with focus on platform engineering, security, and cloud-native observability."
  },
  {
    title: "Next.js London Meetup",
    image: "/images/event5.png",
    slug: "nextjs-london-meetup",
    location: "London, UK",
    date: "November 14, 2026",
    time: "06:30 PM",
    description: "A community-driven event featuring lightning talks on app router patterns, performance tuning, and full-stack TypeScript development."
  },
  {
    title: "Web3 Builders Conference",
    image: "/images/event6.png",
    slug: "web3-builders-conf",
    location: "Lisbon, Portugal",
    date: "December 01, 2026",
    time: "11:00 AM",
    description: "The essential event for developers building the decentralized web, focusing on smart contracts, ZK-proofs, and dApp scalability."
  }
];
