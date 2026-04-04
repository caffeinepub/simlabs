import {
  Bot,
  Box,
  Brain,
  Car,
  Cloud,
  Crosshair,
  Eye,
  Factory,
  FileText,
  Gamepad2,
  Glasses,
  Globe,
  HardHat,
  HeartPulse,
  Layers,
  MapIcon,
  Monitor,
  Network,
  Paintbrush,
  Plane,
  Radio,
  ScanSearch,
  Search,
  Shield,
  ShieldCheck,
  ShieldEllipsis,
  Sofa,
  Train,
  Users,
  Waves,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

export interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  tag: string;
  image: string;
}

export interface Product {
  icon: ReactNode;
  name: string;
  desc: string;
  image: string;
}

export interface Industry {
  icon: ReactNode;
  name: string;
  desc: string;
  image: string;
  bannerImage?: string;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Custom VR Headset icon (person wearing Meta Quest style)
function VRHeadsetIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="VR Headset"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Head */}
      <circle cx="12" cy="7" r="3" />
      {/* VR Headset on face */}
      <rect x="5" y="11" width="14" height="7" rx="3" />
      {/* Lens left */}
      <circle cx="9" cy="14.5" r="1.5" />
      {/* Lens right */}
      <circle cx="15" cy="14.5" r="1.5" />
      {/* Strap */}
      <path d="M5 14 Q2 14 2 11" />
      <path d="M19 14 Q22 14 22 11" />
    </svg>
  );
}

export const SERVICES: Service[] = [
  {
    icon: <VRHeadsetIcon className="w-7 h-7" />,
    title: "Virtual Reality (VR)",
    desc: "Immersive VR solutions for operational and maintenance training, interactive simulations, product and concept visualization, design studies, and marketing applications optimized for performance across a wide range of platforms and devices",
    tag: "Immersive Training · 3D Simulation · Product Experience · Design Studies · Sales & Marketing · Multi-user Collaboration · Scenario-based Training · Performance Analytics · IoT Integration · Digital Twins · AI Adaptive Learning · Voice & Gesture Control · Multi-language Support · Role-based Access · Aircraft Training · ATC Simulation · Automotive Training · Mining & Construction · Transport Systems · Healthcare Training · Defence Training · Weapon Simulators · Driving Simulators · Fire Safety Training · Emergency Response · Industrial Safety · Gaming & Entertainment · Windows · WebGL · iOS · Android · Meta Quest · HTC Vive · Pico · Apple Vision Pro · Aerospace · Defense · Homeland Security · Automotive · Engineering · Mining · Transport · Healthcare · Manufacturing · Gaming",
    image: "/assets/generated/service-vr.dim_800x500.jpg",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Augmented Reality (AR)",
    desc: "Augmented Reality (AR) solutions for maintenance training, education, technical assistance, product trials, interactive walkthroughs, and sales and marketing applications.",
    tag: "Marker-based AR · Markerless AR · Object Tracking · Mobile AR · Remote Assistance · AR Instruction Manuals · Product Visualization · IoT Integration · Real-time Data Overlays · Cloud AR · Multi-user AR · Multi-language Support · Offline Functionality · MRO Guidance · Assembly Assistance · Field Service · Quality Inspection · Retail & E-commerce · Pharmaceutical Training · Construction Visualization · Logistics & Warehouse · Automotive Maintenance · Tourism & Education · Marketing Campaigns · Smart City Visualization · Android · iOS · RealWear · Vuzix · AR Glasses · Aerospace · Defense · Homeland Security · Automotive · Engineering · Mining · Transport · Healthcare · Manufacturing · Gaming",
    image: "/assets/generated/service-ar.dim_800x500.jpg",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Mixed Reality (MR)",
    desc: "Blended MR experiences that merge physical and digital worlds for advanced training, collaboration, and design review.",
    tag: "Holographic Visualization · Spatial Mapping · Collaborative Design Reviews · Hands-free Workflows · Gesture & Voice Control · Real-time Data Overlays · Digital Twin Integration · IoT Integration · Guided Maintenance Workflows · Remote Expert Assistance · Object Tracking · Multi-user MR · Cloud Connectivity · Industrial MRO · Assembly Workflows · Design Reviews · Manufacturing Optimization · Quality Inspection · Field Service · Healthcare Training · Construction Visualization · Energy & Oil Gas · Warehouse & Logistics · Smart Factory · Industry 4.0 · HoloLens · Magic Leap · Aerospace · Defense · Homeland Security · Automotive · Engineering · Mining · Transport · Healthcare · Manufacturing · Gaming",
    image: "/assets/generated/service-mr.dim_800x500.jpg",
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Visual Simulation (VS)",
    desc: "Visual Simulation services encompassing optimized 3D model and terrain development, scenario creation, high performance visual simulation application development, and desktop as well as hardware-in-the-loop simulator development.",
    tag: "3D Terrain Development · Geo-specific Terrains · Simulation Application Development · Desktop Simulators · Hardware-in-the-loop · HIL Simulators · Real-time Rendering · Scenario-based Simulation · Physics-based Modeling · Multi-user Simulation · AI-driven Simulation · Digital Twin Integration · Large-scale Environments · High-performance Optimization · Aerospace Simulation · Defence Training · Homeland Security · ATC Simulation · Transport Simulators · Industrial Process Simulation · Manufacturing Simulation · Mining Simulation · Oil & Gas Simulation · Energy Systems · Healthcare Simulation · Emergency Response · Urban Planning · Gaming Simulation · Aerospace · Defense · Homeland Security · Automotive · Engineering · Mining · Transport · Healthcare · Manufacturing · Gaming",
    image: "/assets/generated/service-vs.dim_800x500.jpg",
  },
  {
    icon: <Network className="w-7 h-7" />,
    title: "Digital Twins (DT)",
    desc: "Real-time virtual replicas of physical assets, systems, and processes — enabling predictive maintenance, performance optimization, and remote monitoring.",
    tag: "Real-time Synchronization · Predictive Maintenance · ML Anomaly Detection · Remote Monitoring · 3D Visualization · Performance Simulation · What-if Analysis · VR & AR Integration · Data Analytics · Role-based Access · Scalable Architecture · Industrial Equipment Monitoring · Smart Factory · Energy & Oil Gas · Aerospace Systems · Automotive & Transport · Infrastructure Management · Smart City · Healthcare Equipment · Mining Performance · Aerospace · Defense · Homeland Security · Automotive · Engineering · Mining · Transport · Healthcare · Manufacturing · Gaming",
    image: "/assets/generated/service-digitaltwin.dim_800x500.jpg",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Artificial Intelligence (AI)",
    desc: "AI-powered solutions including intelligent bots for assistance, machine learning\u2013based object recognition, predictive analytics, intelligent automation, and data-driven decision-making across industries.",
    tag: "Machine Learning · Object Recognition · Computer Vision · Quality Inspection · Defect Detection · Predictive Analytics · AI Performance Analytics · Intelligent Chatbots · Virtual Assistants · Adaptive Learning · IoT Data Fusion · Digital Twin Enhancement · Secure AI Pipelines · VR/AR/MR Training · Predictive Maintenance · Field Service Assistance · Customer Support · Safety Monitoring · Aerospace · Defense · Homeland Security · Automotive · Engineering · Mining · Transport · Healthcare · Manufacturing · Gaming",
    image: "/assets/generated/service-ai.dim_800x500.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    icon: <MapIcon className="w-5 h-5" />,
    name: "TRIAN3DBUILDER",
    desc: "3D Terrain Development software",
    image: "/assets/generated/product-trian3dbuilder.dim_600x380.jpg",
  },
  {
    icon: <Box className="w-5 h-5" />,
    name: "Remo 3D",
    desc: "3D model development software",
    image: "/assets/generated/product-remo3d.dim_600x380.jpg",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    name: "REMOSCAPE",
    desc: "3D landscape visualization and scene composition tool",
    image: "/assets/generated/product-remoscape.dim_600x380.jpg",
  },
  {
    icon: <Crosshair className="w-5 h-5" />,
    name: "SSG",
    desc: "War Gaming software",
    image: "/assets/generated/product-simax.dim_600x380.jpg",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    name: "SILVERLINING",
    desc: "Cloud and Sky rendering SDK",
    image: "/assets/generated/product-silverlining.dim_600x380.jpg",
  },
  {
    icon: <Waves className="w-5 h-5" />,
    name: "TRITON",
    desc: "Ocean simulation SDK",
    image: "/assets/generated/product-triton.dim_600x380.jpg",
  },
  {
    icon: <Search className="w-5 h-5" />,
    name: "VIDERE",
    desc: "Virtual Design Review tool",
    image: "/assets/generated/product-videre.dim_600x380.jpg",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    name: "VRSAFE",
    desc: "VR based Fire Safety Training tool",
    image: "/assets/generated/product-vrsafe.dim_600x380.jpg",
  },
  {
    icon: <Radio className="w-5 h-5" />,
    name: "AUGMENTOR",
    desc: "Remote Assistance Tool",
    image: "/assets/generated/product-augmentor.dim_600x380.jpg",
  },
  {
    icon: <Sofa className="w-5 h-5" />,
    name: "FARNISH",
    desc: "AR based Furniture Trial and Sales tool",
    image: "/assets/generated/product-farnish.dim_600x380.jpg",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    name: "PRODOC",
    desc: "Interactive product document creator",
    image: "/assets/generated/product-prodoc.dim_600x380.jpg",
  },
  {
    icon: <ScanSearch className="w-5 h-5" />,
    name: "LAYAR",
    desc: "ML based AR tool",
    image: "/assets/generated/product-layar.dim_600x380.jpg",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    name: "INTBOT",
    desc: "AI based Chatbot to assist users",
    image: "/assets/generated/product-intbot.dim_600x380.jpg",
  },
  {
    icon: <Paintbrush className="w-5 h-5" />,
    name: "PAINTX",
    desc: "VR based training tool for painters",
    image: "/assets/generated/product-paintx-car.dim_600x380.jpg",
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    name: "TORQUE",
    desc: "Multiplayer car stunt racing game",
    image: "/assets/generated/product-torque.dim_600x380.jpg",
  },
  {
    icon: <Users className="w-5 h-5" />,
    name: "COLLAB",
    desc: "Solution for collaborative virtual reality",
    image: "/assets/generated/product-collab.dim_600x380.jpg",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    icon: <Plane className="w-7 h-7" />,
    name: "Aerospace",
    desc: "Flight simulation, mission training, and avionics visualization",
    image: "/assets/generated/industry-aerospace.dim_600x400.jpg",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    name: "Defense",
    desc: "War gaming, tactical training, and defense simulation systems",
    image: "/assets/generated/industry-defense.dim_600x400.jpg",
  },
  {
    icon: <ShieldEllipsis className="w-7 h-7" />,
    name: "Homeland Security",
    desc: "Surveillance simulation, border security training, and crisis response systems",
    image: "/assets/generated/industry-homeland-security.dim_600x400.jpg",
  },
  {
    icon: <Car className="w-7 h-7" />,
    name: "Automotive",
    desc: "Design review, assembly training, and driver simulation",
    image: "/assets/generated/industry-automotive.dim_600x400.jpg",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    name: "Engineering",
    desc: "CAD visualization, maintenance training, and process simulation",
    image: "/assets/generated/industry-engineering.dim_600x400.jpg",
  },
  {
    icon: <HardHat className="w-7 h-7" />,
    name: "Mining",
    desc: "Safety training, underground navigation, and equipment simulation",
    image: "/assets/generated/industry-mining.dim_600x400.jpg",
  },
  {
    icon: <Train className="w-7 h-7" />,
    name: "Transport",
    desc: "Driver training, route simulation, and operational systems",
    image: "/assets/generated/industry-transport.dim_600x400.jpg",
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    name: "Healthcare",
    desc: "Medical procedure training and patient care visualization",
    image: "/assets/generated/industry-healthcare-mri.dim_600x400.jpg",
    bannerImage:
      "/assets/generated/industry-healthcare-pharma.dim_1200x400.jpg",
  },
  {
    icon: <Factory className="w-7 h-7" />,
    name: "Manufacturing",
    desc: "AR-guided assembly, quality inspection simulation, and smart factory training",
    image: "/assets/generated/industry-manufacturing.dim_600x400.jpg",
  },
  {
    icon: <Gamepad2 className="w-7 h-7" />,
    name: "Gaming",
    desc: "Immersive game development, VR/AR gaming experiences, and multiplayer simulation",
    image: "/assets/generated/industry-gaming.dim_600x400.jpg",
    bannerImage: "/assets/generated/industry-gaming-racing.dim_1200x400.jpg",
  },
];

// Extended details for detail pages
export const SERVICE_DETAILS: Record<
  string,
  { features: string[]; industries: string[]; applicationAreas?: string[] }
> = {
  "virtual-reality-vr": {
    features: [
      "Development of 3D immersive, interactive, and simulation-based high-performance applications for training, sales and marketing, product demonstrations, enhanced product experiences, design reviews, ergonomic studies, gaming, and more",
      "Multi-user collaborative VR environments for team training, product reviews, and shared virtual experiences",
      "Real-time physics, interactions, and behavior modeling for high-fidelity and realistic simulations",
      "Scenario-based training modules with configurable environments and workflows",
      "Multiple VR modes: theatre mode, guided learning mode, practice mode, and assessment/test mode",
      "Performance analytics and trainee assessment dashboards with detailed reporting and insights",
      "Integration with hardware and IoT systems for simulator-based training and real-world equipment interfacing",
      "Digital Twin integration for system-level simulation, monitoring, and analysis",
      "AI-driven adaptive learning systems for personalized training and intelligent feedback",
      "Voice commands, gesture recognition, and intuitive interaction mechanisms",
      "High-quality 3D asset creation, optimization, and real-time rendering",
      "Localization and multi-language support for global deployments",
      "Secure deployment with user authentication, role-based access control, and data protection",
      "Support for large-scale simulation environments and complex system integration",
      "Custom UI/UX development for intuitive interaction and control",
      "Wide range of platforms supported: Windows, WebGL, iOS, Android, Meta (Oculus) Quest, HTC Vive, Pico, HP Reverb, Samsung Gear VR, Apple Vision Pro, and other leading VR devices",
      "Compatibility with custom hardware setups, including simulators, motion platforms, and control interfaces",
    ],
    applicationAreas: [
      "Aircraft systems operation and maintenance training",
      "ATC simulation and training",
      "Automotive, locomotive, and heavy vehicle operation and maintenance training",
      "Construction, mining, and agricultural equipment operation and maintenance training",
      "Rail, road, and water transport systems operation and maintenance training",
      "Healthcare and pharmaceutical equipment training",
      "Defense applications, including tank, ship, army, and navy systems training",
      "Weapon simulators for training",
      "Driving simulators for skill development and assessment",
      "Fire safety training (home, office, industrial, and public environments)",
      "Emergency response training",
      "Industrial safety and compliance training",
      "Industrial equipment usage and maintenance training",
      "Architectural walkthroughs and planning",
      "Immersive gaming and entertainment",
      "Many more evolving application areas",
    ],
    industries: [
      "Aerospace",
      "Defense",
      "Homeland Security",
      "Automotive",
      "Engineering",
      "Mining",
      "Transport",
      "Healthcare",
      "Manufacturing",
      "Gaming",
    ],
  },
  "augmented-reality-ar": {
    features: [
      "Marker-based and markerless AR solutions for maintenance, assembly, and operational guidance",
      "Object tracking and alignment for accurate interaction with real-world equipment",
      "Development of mobile AR applications for iOS and Android platforms",
      "AR-powered remote assistance with live expert guidance, annotations, and real-time collaboration",
      "Interactive AR instruction manuals and digital documentation for step-by-step guidance",
      "Product visualization and configuration for retail, e-commerce, and customer engagement",
      "Integration with enterprise systems (such as IoT platforms)",
      "Real-time data visualization overlays on physical equipment and environments",
      "3D model overlay and alignment with real-world objects for accurate guidance",
      "Cloud-based AR deployment for scalability and remote accessibility",
      "Wide range of platforms supported: Android, iOS, Windows, across mobile devices, tablets, and AR glasses such as RealWear, Vuzix and other popular AR glasses",
      "Multi-user collaborative AR environments for shared experiences and training",
      "Localization and multi-language support for global deployments",
      "Secure access and role-based controls for enterprise usage",
      "High-performance 2D and 3D content development and optimization for real-time rendering on mobile devices",
      "Custom UI/UX development for intuitive interaction and control",
      "Offline functionality for use in low or no connectivity environments",
    ],
    applicationAreas: [
      "Maintenance, repair, and operations (MRO) guidance for industrial equipment",
      "Assembly and disassembly assistance in manufacturing environments",
      "Field service and remote technical support",
      "Training and skill development for industrial and technical workforce",
      "Quality inspection and validation processes",
      "Product visualization and virtual try-before-you-buy experiences",
      "Retail and e-commerce interactive experiences",
      "Healthcare applications (equipment guidance, training, visualization)",
      "Pharmaceutical manufacturing and process training",
      "Construction and infrastructure visualization (on-site overlays, planning)",
      "Architecture and interior design visualization",
      "Logistics and warehouse operations (picking, navigation, optimization)",
      "Automotive service and maintenance guidance",
      "Aerospace and defense maintenance and training applications",
      "Tourism, education, and museum experiences",
      "Marketing campaigns and brand engagement experiences",
      "Smart city and urban planning visualization",
      "AR based games and entertainment",
      "Many more evolving application areas",
    ],
    industries: [
      "Aerospace",
      "Defense",
      "Homeland Security",
      "Automotive",
      "Engineering",
      "Mining",
      "Transport",
      "Healthcare",
      "Manufacturing",
      "Gaming",
    ],
  },
  "mixed-reality-mr": {
    features: [
      "Mixed Reality application development for enterprise and industrial use cases",
      "Spatial mapping and environment understanding for accurate placement of holographic content in real-world settings",
      "Holographic visualization of 3D models and data within physical environments",
      "Collaborative design reviews with real-time, remote stakeholder participation",
      "Hands-free MR workflows for field technicians, engineers, and operators",
      "Design visualization and validation",
      "Gesture-based and voice-controlled interfaces for intuitive and hands-free interaction",
      "Real-time data overlays on physical systems for monitoring and diagnostics",
      "Multi-user shared MR environments for collaborative training and operations",
      "Digital Twin integration for synchronized physical and virtual system interaction",
      "IoT integration for live data streaming and contextual visualization",
      "Step-by-step guided workflows for maintenance, assembly, and inspection tasks",
      "Remote expert assistance with live annotations and spatial guidance",
      "Object tracking and alignment for accurate interaction with real-world equipment",
      "Secure enterprise deployment with user authentication and role-based access",
      "Cloud connectivity for data synchronization, updates, and scalability",
      "Wide range of platforms supported: Microsoft HoloLens, Magic Leap, MR headsets and supporting platforms",
      "High-performance 2D and 3D content development and optimization for real-time rendering on MR devices",
      "Custom UI/UX development for intuitive interaction and control",
    ],
    applicationAreas: [
      "Industrial maintenance and repair (MRO) with hands-free guidance",
      "Assembly and disassembly workflows with real-time visual instructions",
      "Design reviews and virtual prototyping in real-world environments",
      "Manufacturing process visualization and optimization",
      "Quality inspection and validation using overlay-based comparisons",
      "Field service and remote technical assistance",
      "Training and skill development for technicians and engineers",
      "Aerospace and defense system maintenance and operations",
      "Automotive design, assembly, and service applications",
      "Healthcare applications (equipment guidance, surgical planning, training)",
      "Construction and infrastructure planning and visualization",
      "Energy, oil & gas, and utilities maintenance support",
      "Warehouse, logistics, and supply chain operations",
      "Product visualization and customer experience enhancement",
      "Safety training and hazard identification in real environments",
      "Smart factory and Industry 4.0 applications",
      "Research, education, and simulation environments",
      "MR based games and entertainment",
      "Many more evolving application areas",
    ],
    industries: [
      "Aerospace",
      "Defense",
      "Homeland Security",
      "Automotive",
      "Engineering",
      "Mining",
      "Transport",
      "Healthcare",
      "Manufacturing",
      "Gaming",
    ],
  },
  "visual-simulation-vs": {
    features: [
      "Development of high-quality, optimized 3D models for real-time simulation environments",
      "3D optimized terrain development, including geo-specific, geo-typic, and generic terrains",
      "Visual simulation application development for training, analysis, and decision support",
      "Desktop-based interactive learning applications for technical and operational training",
      "Desktop simulator development for various domain-specific applications",
      "Hardware-in-the-loop (HIL) simulator development, with integration of real-world physical controls and motion platforms for realistic simulation experiences",
      "Real-time rendering and visualization for high-fidelity simulation experiences",
      "Scenario-based simulation environments with configurable parameters and workflows",
      "Physics-based modeling and behavior simulation for realistic system interactions",
      "Multi-user and networked simulation environments for collaborative training and operations",
      "AI-driven simulation models for intelligent behavior and predictive analysis",
      "Data-driven simulation and analytics for performance evaluation and insights",
      "Support for large-scale environments and complex system simulations",
      "Digital Twin integration for system-level simulation and monitoring",
      "Custom UI/UX development for intuitive interaction and control",
      "High-performance optimization for real-time execution of complex simulations",
      "Secure and scalable deployment for enterprise and defense applications",
    ],
    applicationAreas: [
      "Aerospace, aviation, and space systems simulation (operations, maintenance, mission planning)",
      "Defense, army, navy, and homeland security training and mission simulation",
      "Weapon systems and combat simulation environments",
      "Air traffic control (ATC) and airport operations simulation",
      "Driver, vehicle, and transport system simulators (rail, road, marine, aviation)",
      "Industrial process simulation and operator training",
      "Manufacturing and assembly line simulation and optimization",
      "Mining operations and heavy equipment simulation",
      "Oil & gas exploration, drilling, and operations simulation",
      "Energy and utilities systems simulation (power plants, grid operations)",
      "Healthcare and pharmaceutical process and equipment simulation",
      "Engineering system design, validation, and performance analysis",
      "Emergency response and disaster management simulation",
      "Urban planning, infrastructure, and smart city simulations",
      "Gaming and entertainment simulation environments",
      "Research, education, and advanced simulation studies",
      "Many more evolving application areas",
    ],
    industries: [
      "Aerospace",
      "Defense",
      "Homeland Security",
      "Automotive",
      "Engineering",
      "Mining",
      "Transport",
      "Healthcare",
      "Manufacturing",
      "Gaming",
    ],
  },
  "digital-twins-dt": {
    features: [
      "Real-time synchronization between physical assets and their virtual counterparts for accurate monitoring and control",
      "Predictive maintenance using sensor data and ML-based anomaly detection to minimize downtime and optimize asset performance",
      "Remote monitoring dashboards with interactive 3D visualization for intuitive system insights",
      "Performance simulation and what-if scenario analysis for optimization and decision-making",
      "Integration with VR and AR technologies for interactive and immersive digital twin experiences",
      "Development of optimized visual content for high-performance, real-time applications",
      "Custom UI/UX design for intuitive interaction, control, and data visualization",
      "Data-driven analytics and reporting tools for performance tracking and insights",
      "Secure data handling and role-based access control for enterprise environments",
      "Scalable architecture to support large and complex systems",
    ],
    applicationAreas: [
      "Industrial equipment monitoring and predictive maintenance",
      "Manufacturing process optimization and smart factory applications",
      "Energy, oil & gas, and utilities asset management (power plants, grids, pipelines)",
      "Aerospace and defense systems monitoring and simulation",
      "Automotive and transport systems performance monitoring and optimization",
      "Infrastructure and smart city management (buildings, traffic, utilities)",
      "Healthcare and pharmaceutical equipment monitoring and process optimization",
      "Mining and heavy equipment performance tracking",
      "Training and simulation using real-world system data",
      "Many more evolving application areas",
    ],
    industries: [
      "Aerospace",
      "Defense",
      "Homeland Security",
      "Automotive",
      "Engineering",
      "Mining",
      "Transport",
      "Healthcare",
      "Manufacturing",
      "Gaming",
    ],
  },
  // keep old key for backward compat
  "digital-twins": {
    features: [
      "Real-time synchronization between physical assets and their virtual counterparts for accurate monitoring and control",
      "Predictive maintenance using sensor data and ML-based anomaly detection to minimize downtime and optimize asset performance",
      "Remote monitoring dashboards with interactive 3D visualization for intuitive system insights",
      "Performance simulation and what-if scenario analysis for optimization and decision-making",
      "Integration with VR and AR technologies for interactive and immersive digital twin experiences",
      "Development of optimized visual content for high-performance, real-time applications",
      "Custom UI/UX design for intuitive interaction, control, and data visualization",
      "Data-driven analytics and reporting tools for performance tracking and insights",
      "Secure data handling and role-based access control for enterprise environments",
      "Scalable architecture to support large and complex systems",
    ],
    applicationAreas: [
      "Industrial equipment monitoring and predictive maintenance",
      "Manufacturing process optimization and smart factory applications",
      "Energy, oil & gas, and utilities asset management (power plants, grids, pipelines)",
      "Aerospace and defense systems monitoring and simulation",
      "Automotive and transport systems performance monitoring and optimization",
      "Infrastructure and smart city management (buildings, traffic, utilities)",
      "Healthcare and pharmaceutical equipment monitoring and process optimization",
      "Mining and heavy equipment performance tracking",
      "Training and simulation using real-world system data",
      "Many more evolving application areas",
    ],
    industries: [
      "Aerospace",
      "Defense",
      "Homeland Security",
      "Automotive",
      "Engineering",
      "Mining",
      "Transport",
      "Healthcare",
      "Manufacturing",
      "Gaming",
    ],
  },
  "artificial-intelligence-ai": {
    features: [
      "Machine Learning-based object recognition and classification for real-time identification and tracking",
      "Computer Vision integration based quality inspection, defect detection, and maintenance support",
      "Predictive analytics for equipment failure detection and preventive maintenance",
      "AI-powered performance analytics for measuring training effectiveness and user behavior insights",
      "Intelligent chatbots and virtual assistants for guidance, customer interaction, and technical support",
      "AI-driven adaptive learning systems for personalized training experiences in VR/AR/MR/VS environments",
      "Data fusion from IoT sensors and enterprise systems for intelligent decision-making",
      "AI-driven digital twin enhancement for predictive modeling and system optimization",
      "Secure AI pipelines with data privacy, access control, and compliance",
    ],
    applicationAreas: [
      "AI-enhanced VR/AR/MR training systems with adaptive learning and real-time feedback",
      "Predictive maintenance for industrial equipment, vehicles, and infrastructure",
      "Field service and remote assistance with AI-guided troubleshooting",
      "Customer support using intelligent chatbots and virtual assistants",
      "Safety equipment monitoring and compliance confirmation",
      "Many more evolving application areas",
    ],
    industries: [
      "Aerospace",
      "Defense",
      "Homeland Security",
      "Automotive",
      "Engineering",
      "Mining",
      "Transport",
      "Healthcare",
      "Manufacturing",
      "Gaming",
    ],
  },
};

export const PRODUCT_DETAILS: Record<
  string,
  { features: string[]; highlights: string[]; applicationAreas?: string[] }
> = {
  trian3dbuilder: {
    features: [
      "Automated terrain generation from real-world GIS data (e.g., OpenStreetMap, raster, vector, imagery)",
      "Creation of geo-specific, geo-typical, and generic terrains for different simulation needs",
      "Development of large-scale, high-detail environments optimized for real-time rendering",
      "Ability to generate complete environments including roads, rail networks, buildings, airports, ports, and landscapes",
      "High level of automation with project wizards for quick setup and faster production",
      "Intuitive 2D/3D editing (WYSIWYG) for easy modification and visualization of terrains",
      "Support for multiple data formats (vector, raster, geometry, imagery) with automatic rule assignment",
      "Real-time optimized output suitable for simulation engines and game engines",
      "Export support for Unity, OpenSceneGraph, OpenFlight, FBX, OBJ, Collada, and more",
      "Integrated 3D viewer for preview and validation of terrains and models",
      "Built-in libraries of 3D models, textures, and generation rules for faster content creation",
      "Advanced modifiers system to create complex structures, place objects, and control generation rules",
      "Support for procedural terrain generation and automatic object placement",
      "Scalable terrain generation with support for very large databases, LOD, and streaming/paging",
      "Customization and extensibility via SDK, plugins, and scripting for tailored workflows",
      "Workflow optimization tools including intelligent updates and fast rebuild capabilities",
    ],
    applicationAreas: [
      "Flight simulation and airport modeling",
      "Defense and mission simulation environments",
      "Automotive and autonomous driving simulation",
      "Maritime and naval simulation",
      "Gaming and serious games environments",
      "Urban planning and infrastructure visualization",
    ],
    highlights: [
      "GIS data automation",
      "Multi-format export (OpenFlight, FBX, Unity)",
      "Scalable large-scale terrain databases",
      "Procedural terrain generation",
    ],
  },
  remo3d: {
    features: [
      "Creation and modification of 3D models optimized for real-time visualization",
      "Scene graph-based modeling approach for structured and efficient model management",
      "Support for OpenFlight\u00ae format and multiple import/export formats (FBX, OBJ, COLLADA, etc.)",
      "Level-of-Detail (LOD) management for performance optimization",
      "Degree-of-Freedom (DOF) node editing for simulation-ready models",
      "Ability to handle large-scale models using external references and multi-tiling",
      "Multiple viewports with customizable viewing configurations",
      "Real-time rendering and visualization with lighting and shading controls",
      "WYSIWYG 3D editing environment for intuitive model creation",
      "Advanced geometry editing tools (transform, selection, soft selection, snapping)",
      "Scene graph hierarchy management with drag-and-drop operations",
      "Scripting support (Lua) for automation and customization",
      "Support for OpenGL and shader-based rendering",
      "Visualization tools for normals, vertices, and model attributes",
      "Undo/redo and efficient workflow tools for productivity",
      "Cross-platform support: Windows and Linux",
    ],
    applicationAreas: [
      "Flight simulation and airport modeling",
      "Defense and mission simulation environments",
      "Automotive and autonomous driving simulation",
      "Maritime and naval simulation",
      "Gaming and serious games environments",
      "Urban planning and infrastructure visualization",
    ],
    highlights: [
      "OpenFlight native editor",
      "LOD & DOF management",
      "Lua scripting support",
      "Windows and Linux support",
    ],
  },
  remoscape: {
    features: [
      "Real-time 3D landscape and scene visualization",
      "High-fidelity terrain and environment rendering",
      "Scene composition tools for complex 3D environments",
      "Support for large-scale geographic datasets",
      "Integration with simulation and visualization pipelines",
      "Interactive camera and viewpoint control",
      "Export to standard 3D formats for downstream use",
      "Optimized rendering for real-time performance",
    ],
    applicationAreas: [
      "Landscape and terrain visualization for simulation",
      "Scene composition for training environments",
      "Geographic data visualization",
      "Urban and infrastructure planning visualization",
      "Defense and aerospace terrain preview",
    ],
    highlights: [
      "Real-time 3D rendering",
      "Large-scale terrain support",
      "Scene composition tools",
      "Simulation pipeline integration",
    ],
  },
  ssg: {
    features: [
      "Tactical scenario creation with real-world terrain data",
      "Multi-force wargaming support with configurable units and behaviors",
      "AI-driven opponent simulation for realistic adversarial training",
      "After-action review and debrief tools for training effectiveness",
      "Integration with command and control (C2) systems",
      "Scenario export for use in live exercises and simulations",
    ],
    highlights: [
      "Real-world terrain integration",
      "AI adversarial simulation",
      "After-action review tools",
      "C2 system integration",
    ],
  },
  silverlining: {
    features: [
      "Physically-based sky and atmospheric scattering simulation",
      "Dynamic weather system with clouds, rain, snow, and fog",
      "GPU-accelerated 3D volumetric cloud rendering",
      "Day/night cycle with accurate solar and lunar positioning",
      "API integration with OpenGL, OpenSceneGraph, and VSIGL",
      "Real-time weather data feed support",
    ],
    highlights: [
      "GPU-accelerated clouds",
      "Physically-based atmosphere",
      "Dynamic weather system",
      "Real-time weather feeds",
    ],
  },
  triton: {
    features: [
      "Real-time 3D ocean surface simulation using spectral wave models",
      "Dynamic wake and vessel interaction effects",
      "Underwater visibility simulation for naval training",
      "Integration with OpenGL and DirectX rendering pipelines",
      "Support for OpenSceneGraph, osgEarth, and custom engines",
      "Configurable sea state and wind speed parameters",
    ],
    highlights: [
      "Spectral wave models",
      "Wake and vessel effects",
      "Underwater visibility",
      "Multi-engine support",
    ],
  },
  videre: {
    features: [
      "Real-time 3D CAD model visualization and design review",
      "Multi-user collaborative review sessions with annotation tools",
      "Exploded view and assembly sequence visualization",
      "Integration with CAD formats: STEP, IGES, OBJ, FBX",
      "VR headset support for immersive design review",
      "Measurement tools and section view capabilities",
    ],
    highlights: [
      "Multi-user collaboration",
      "VR headset support",
      "CAD format integration",
      "Annotation and measurement",
    ],
  },
  vrsafe: {
    features: [
      "Immersive VR-based fire safety training scenarios",
      "Realistic fire behavior simulation with smoke and heat effects",
      "Interactive extinguisher operation and evacuation training",
      "Performance tracking and trainee assessment reporting",
      "Customizable building layouts and fire scenarios",
      "Multi-platform support: Oculus, HTC Vive, and desktop VR",
    ],
    highlights: [
      "Realistic fire simulation",
      "Performance tracking",
      "Customizable scenarios",
      "Multi-platform VR support",
    ],
  },
  augmentor: {
    features: [
      "Real-time AR-based remote assistance for field technicians",
      "Live video streaming with annotation and markup tools",
      "Step-by-step guided maintenance and repair workflows",
      "Integration with enterprise ticketing and knowledge management systems",
      "Offline capability for low-connectivity field environments",
      "Multi-device support: smartphones, tablets, and AR glasses",
    ],
    highlights: [
      "Live AR annotation",
      "Guided maintenance workflows",
      "Enterprise system integration",
      "Offline field capability",
    ],
  },
  farnish: {
    features: [
      "AR-based furniture and home d\u00e9cor visualization on mobile devices",
      "Real-scale 3D product placement using ARKit and ARCore",
      "Photo-realistic rendering of products in real environments",
      "Product catalogue integration with e-commerce platforms",
      "Social sharing and wishlist features",
      "Custom branding and white-label deployment options",
    ],
    highlights: [
      "ARKit and ARCore support",
      "Photo-realistic rendering",
      "E-commerce integration",
      "White-label deployment",
    ],
  },
  prodoc: {
    features: [
      "Create step-by-step visual instructions with basic animations and views",
      "Convert CAD models into optimized 3D content",
      "Add text and visual guidance for better clarity",
      "Use interactive elements such as hotspots for explanations",
      "Add audio, video and graphical content",
      "No coding required for creating and managing manuals",
      "Support for offline and web-based usage",
      "Supported platforms: Windows, Android, iOS, and Web",
      "Export content for easy sharing and deployment",
      "Can have Augmented Reality as add-on capability",
      "Continuously evolving with new features",
      "Can be customized to meet specific enterprise requirements",
      "Simplifies complex technical documentation with interactive content",
      "Improves clarity compared to static manuals",
      "Supports training, maintenance, product demonstration, marketing use cases",
      "Focused on ease of use and practical workflows",
    ],
    applicationAreas: [
      "Assembly and disassembly manuals for industrial equipment",
      "Service and maintenance documentation for field technicians",
      "Product demonstration and marketing content",
      "Training materials for operational and safety procedures",
      "Interactive product experience for customers",
    ],
    highlights: [
      "No coding required",
      "CAD to 3D content conversion",
      "AR add-on capability",
      "Windows, Android, iOS, Web support",
    ],
  },
  layar: {
    features: [
      "ML-based object recognition and AR overlay triggering",
      "Marker and markerless AR experiences for print and packaging",
      "Real-time product information display on physical objects",
      "Integration with CMS for dynamic content updates",
      "Analytics dashboard for AR experience tracking",
      "iOS and Android SDK for seamless app integration",
    ],
    highlights: [
      "ML object recognition",
      "Marker and markerless AR",
      "Dynamic CMS integration",
      "Cross-platform SDK",
    ],
  },
  intbot: {
    features: [
      "AI-powered chatbot for product and service assistance",
      "Natural language understanding with intent classification",
      "Integration with knowledge bases, FAQs, and CRM systems",
      "Multi-channel deployment: web, mobile, and messaging platforms",
      "Escalation workflows to human agents with context handover",
      "Analytics and conversation insights dashboard",
    ],
    highlights: [
      "NLU intent classification",
      "CRM system integration",
      "Multi-channel deployment",
      "Analytics dashboard",
    ],
  },
  paintx: {
    features: [
      "VR-based paint application training for automotive and industrial use",
      "Realistic spray gun simulation with pressure and distance feedback",
      "Coverage analysis and defect detection for quality training",
      "Multiple paint scenarios: priming, base coat, clear coat",
      "Performance metrics and trainee progress tracking",
      "Compatible with leading VR headsets and haptic gloves",
    ],
    highlights: [
      "Realistic spray simulation",
      "Coverage analysis",
      "Performance metrics",
      "Haptic glove support",
    ],
  },
  torque: {
    features: [
      "Multiplayer car stunt racing with real-time physics",
      "Customizable vehicles and stunt tracks",
      "Competitive leaderboards and tournament modes",
      "Cross-platform multiplayer support",
      "High-fidelity 3D graphics with dynamic lighting",
      "Regular content updates with new cars and tracks",
    ],
    highlights: [
      "Real-time physics engine",
      "Multiplayer support",
      "Competitive leaderboards",
      "Dynamic 3D graphics",
    ],
  },
  collab: {
    features: [
      "Synchronized multi-user VR sessions across locations",
      "Voice and gesture communication in shared virtual spaces",
      "Collaborative 3D model review and annotation",
      "Session recording and playback for asynchronous collaboration",
      "Integration with enterprise collaboration platforms",
      "Scalable architecture supporting large group sessions",
    ],
    highlights: [
      "Multi-user synchronization",
      "Voice and gesture comms",
      "Session recording",
      "Enterprise integration",
    ],
  },
};

export const INDUSTRY_SOLUTIONS: Record<
  string,
  { services: string[]; products: string[]; applicationAreas?: string[] }
> = {
  aerospace: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "TRIAN3DBUILDER",
      "SILVERLINING",
      "TRITON",
      "VIDERE",
      "SSG",
      "Remo 3D",
      "AUGMENTOR",
      "PRODOC",
      "INTBOT",
    ],
    applicationAreas: [
      "Flight simulation and aircrew training",
      "Aircraft systems operation and maintenance training",
      "Mission planning and rehearsal simulation",
      "Avionics and instrument procedure training",
      "Air traffic control (ATC) simulation",
      "3D terrain and airfield visualization",
      "Design review and engineering visualization",
      "Digital twin monitoring for aircraft and systems",
    ],
  },
  defense: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "TRIAN3DBUILDER",
      "SSG",
      "SILVERLINING",
      "TRITON",
      "Remo 3D",
      "VIDERE",
      "VRSAFE",
      "AUGMENTOR",
      "PRODOC",
    ],
    applicationAreas: [
      "Tank, ship, army, and navy systems training",
      "Weapon simulator development and training",
      "Tactical scenario and wargaming simulation",
      "Mission rehearsal and combat simulation",
      "Defence equipment maintenance training",
      "Command and control (C2/C3I) system integration",
      "Homeland security and crisis response training",
    ],
  },
  "homeland-security": {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "SSG",
      "SILVERLINING",
      "VIDERE",
      "VRSAFE",
      "TRIAN3DBUILDER",
      "INTBOT",
      "AUGMENTOR",
    ],
    applicationAreas: [
      "Crisis response and emergency management simulation",
      "Border security and surveillance training",
      "Fire safety and evacuation training",
      "Disaster management and recovery simulation",
      "Security personnel training and assessment",
      "Command and control system training",
    ],
  },
  automotive: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "VIDERE",
      "PAINTX",
      "PRODOC",
      "AUGMENTOR",
      "LAYAR",
      "INTBOT",
      "FARNISH",
    ],
    applicationAreas: [
      "Vehicle design review and visualization",
      "Assembly and manufacturing process training",
      "Driver training and simulation",
      "Paint application and quality training",
      "Product launch and marketing visualization",
      "Digital twin monitoring for vehicle systems",
      "AR-guided maintenance and service operations",
    ],
  },
  engineering: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "VIDERE",
      "AUGMENTOR",
      "PRODOC",
      "Remo 3D",
      "LAYAR",
      "INTBOT",
      "COLLAB",
    ],
    applicationAreas: [
      "CAD design visualization and review",
      "Equipment maintenance and repair training",
      "Process simulation and optimization",
      "AR-guided field service and maintenance",
      "Collaborative virtual design reviews",
      "Technical documentation and instruction",
      "Product visualization and experience",
    ],
  },
  mining: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "TRIAN3DBUILDER",
      "VRSAFE",
      "Remo 3D",
      "AUGMENTOR",
      "PRODOC",
      "INTBOT",
    ],
    applicationAreas: [
      "Underground navigation and safety training",
      "Heavy equipment operation and maintenance training",
      "Mine safety and emergency response training",
      "Industrial equipment usage simulation",
      "Mining operations and process simulation",
      "AR-guided field maintenance support",
    ],
  },
  transport: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "TRIAN3DBUILDER",
      "SILVERLINING",
      "PRODOC",
      "AUGMENTOR",
      "LAYAR",
      "INTBOT",
      "TRITON",
    ],
    applicationAreas: [
      "Rail, road, and water transport systems training",
      "Driver and operator simulation and assessment",
      "Route planning and operational simulation",
      "Vehicle maintenance and technical training",
      "Logistics and warehouse operations support",
      "Transport infrastructure visualization",
    ],
  },
  healthcare: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: ["VRSAFE", "PRODOC", "INTBOT", "AUGMENTOR", "LAYAR", "VIDERE"],
    applicationAreas: [
      "Medical equipment training and simulation",
      "Pharmaceutical manufacturing and process training",
      "Healthcare procedure visualization and training",
      "Patient care and emergency response simulation",
      "Surgical planning and visualization",
      "AR-guided equipment guidance and support",
    ],
  },
  manufacturing: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "AUGMENTOR",
      "PRODOC",
      "LAYAR",
      "INTBOT",
      "VIDERE",
      "VRSAFE",
      "PAINTX",
      "Remo 3D",
    ],
    applicationAreas: [
      "AR-guided assembly and disassembly workflows",
      "Quality inspection and validation",
      "Smart factory and Industry 4.0 applications",
      "Production process simulation and optimization",
      "Worker safety and compliance training",
      "Digital twin for manufacturing process monitoring",
      "Equipment maintenance and operator training",
    ],
  },
  gaming: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
      "Digital Twins (DT)",
      "Artificial Intelligence (AI)",
    ],
    products: [
      "TORQUE",
      "COLLAB",
      "Remo 3D",
      "SILVERLINING",
      "TRITON",
      "INTBOT",
    ],
    applicationAreas: [
      "Immersive VR and AR game development",
      "Multiplayer simulation and gaming experiences",
      "Serious games for training and education",
      "Interactive 3D content and animation",
      "Car stunt racing and vehicle simulation games",
      "Entertainment and interactive experience design",
    ],
  },
};

// Suppress unused import warning for Glasses
const _glasses = Glasses;
void _glasses;
