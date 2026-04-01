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
    tag: "Training · Education · Defence",
    image: "/assets/generated/service-vr.dim_800x500.jpg",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Augmented Reality (AR)",
    desc: "Augmented Reality (AR) solutions for maintenance training, education, technical assistance, product trials, interactive walkthroughs, and sales and marketing applications.",
    tag: "Manufacturing · Healthcare · Retail",
    image: "/assets/generated/service-ar.dim_800x500.jpg",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Mixed Reality (MR)",
    desc: "Blended MR experiences that merge physical and digital worlds for advanced training, collaboration, and design review.",
    tag: "Aerospace · Engineering · Design",
    image: "/assets/generated/service-mr.dim_800x500.jpg",
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Visual Simulation (VS)",
    desc: "Visual Simulation services encompassing optimized 3D model and terrain development, scenario creation, high performance visual simulation application development, and desktop as well as hardware-in-the-loop simulator development.",
    tag: "Aerospace · Defence · Automotive",
    image: "/assets/generated/service-vs.dim_800x500.jpg",
  },
  {
    icon: <Network className="w-7 h-7" />,
    title: "Digital Twins (DT)",
    desc: "Real-time virtual replicas of physical assets, systems, and processes — enabling predictive maintenance, performance optimization, and remote monitoring.",
    tag: "Manufacturing · Aerospace · Infrastructure",
    image: "/assets/generated/service-digitaltwin.dim_800x500.jpg",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Artificial Intelligence (AI)",
    desc: "AI-powered solutions including intelligent bots for assistance, machine learning–based object recognition, predictive analytics, intelligent automation, and data-driven decision-making across industries.",
    tag: "Machine Learning · Automation · Analytics",
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
    name: "REMO3D",
    desc: "3D model development software",
    image: "/assets/generated/product-remo3d.dim_600x380.jpg",
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
  },
];

// Extended details for detail pages
export const SERVICE_DETAILS: Record<
  string,
  { features: string[]; industries: string[] }
> = {
  "virtual-reality-vr": {
    features: [
      "Immersive head-mounted display (HMD) experiences for training and simulation",
      "Multi-user collaborative VR environments for team training scenarios",
      "Cross-platform support: Oculus, HTC Vive, Windows Mixed Reality, and custom hardware",
      "Real-time physics and interaction systems for realistic training fidelity",
      "VR content authoring tools for rapid scenario development",
      "Performance analytics and trainee assessment dashboards",
    ],
    industries: ["Defence", "Aerospace", "Healthcare", "Mining", "Automotive"],
  },
  "augmented-reality-ar": {
    features: [
      "Marker-based and markerless AR overlays for maintenance and assembly guidance",
      "Mobile AR apps for iOS and Android platforms",
      "AR-powered remote assistance and expert guidance systems",
      "Furniture and product visualization for retail and e-commerce",
      "AR-based interactive instruction manuals and documentation",
      "Integration with existing enterprise systems and workflows",
    ],
    industries: [
      "Manufacturing",
      "Healthcare",
      "Retail",
      "Engineering",
      "Transport",
    ],
  },
  "mixed-reality-mr": {
    features: [
      "Microsoft HoloLens and Magic Leap application development",
      "Spatial mapping and holographic content for industrial environments",
      "Collaborative design review with remote stakeholder participation",
      "Hands-free MR workflows for field technicians and engineers",
      "Integration with CAD/CAM tools for real-time design visualization",
      "Gesture and voice-controlled interactive interfaces",
    ],
    industries: ["Aerospace", "Engineering", "Design", "Automotive", "Defence"],
  },
  "visual-simulation-vs": {
    features: [
      "High-fidelity 3D terrain and environment development",
      "Real-time rendering using OpenGL, Vulkan, and DirectX",
      "Integration with simulation frameworks like CIGI, HLA, and DIS",
      "Custom scenario editors for training system developers",
      "Sensor simulation: EO/IR, radar, sonar, and SAR imagery",
      "Database management tools for large-scale terrain datasets",
    ],
    industries: ["Aerospace", "Defence", "Automotive", "Mining", "Transport"],
  },
  "digital-twins-dt": {
    features: [
      "Real-time synchronization between physical assets and their virtual counterparts",
      "Predictive maintenance using sensor data and ML-based anomaly detection",
      "Remote monitoring dashboards with 3D interactive visualization",
      "Integration with IoT sensors, SCADA systems, and industrial protocols",
      "Performance simulation for what-if scenario analysis and optimization",
      "Digital twin lifecycle management from design through decommissioning",
      "Integration with VR/AR for immersive digital twin interaction",
    ],
    industries: [
      "Manufacturing",
      "Aerospace",
      "Infrastructure",
      "Energy",
      "Defence",
    ],
  },
  // keep old key for backward compat
  "digital-twins": {
    features: [
      "Real-time synchronization between physical assets and their virtual counterparts",
      "Predictive maintenance using sensor data and ML-based anomaly detection",
      "Remote monitoring dashboards with 3D interactive visualization",
      "Integration with IoT sensors, SCADA systems, and industrial protocols",
      "Performance simulation for what-if scenario analysis and optimization",
      "Digital twin lifecycle management from design through decommissioning",
      "Integration with VR/AR for immersive digital twin interaction",
    ],
    industries: [
      "Manufacturing",
      "Aerospace",
      "Infrastructure",
      "Energy",
      "Defence",
    ],
  },
  "artificial-intelligence-ai": {
    features: [
      "Machine Learning model development for object recognition and classification",
      "Computer Vision integration for AR/VR-based quality inspection and maintenance",
      "Predictive analytics for equipment failure detection and preventive maintenance",
      "Natural Language Processing for intelligent chatbot and documentation systems",
      "Deep learning pipelines for training data generation from simulation environments",
      "AI-powered performance analytics for training system effectiveness measurement",
      "Edge AI deployment for low-latency inference on industrial hardware",
    ],
    industries: [
      "Manufacturing",
      "Aerospace",
      "Defence",
      "Healthcare",
      "Automotive",
    ],
  },
};

export const PRODUCT_DETAILS: Record<
  string,
  { features: string[]; highlights: string[] }
> = {
  trian3dbuilder: {
    features: [
      "Import and process geospatial data from multiple sources (DTED, GeoTIFF, shapefiles)",
      "Automated LOD generation for optimized real-time rendering performance",
      "Support for culture features: roads, buildings, vegetation, and water bodies",
      "Batch processing tools for large-scale terrain database creation",
      "Export to OpenFlight, FBX, and other standard 3D formats",
      "Built-in quality assurance and validation tools",
    ],
    highlights: [
      "Multi-format GIS data import",
      "OpenFlight export support",
      "Automated LOD generation",
      "Scalable batch processing",
    ],
  },
  remo3d: {
    features: [
      "Intuitive 3D modelling environment optimised for simulation databases",
      "OpenFlight native editor with full hierarchy support",
      "Texture management with automatic mipmap generation",
      "LOD management and polygon reduction tools",
      "Animation and articulation support for dynamic models",
      "Scripting interface for automated model processing pipelines",
    ],
    highlights: [
      "OpenFlight native editing",
      "LOD & polygon reduction",
      "Texture management",
      "Animation support",
    ],
  },
  simax: {
    features: [
      "Multi-player networked war gaming with HLA/DIS protocol support",
      "Realistic weapons effects, ballistics, and damage modelling",
      "AI-driven enemy behaviour and tactical decision systems",
      "After-action review and mission replay tools",
      "Configurable scenario editor for custom mission design",
      "Integration with external C2 and sensor systems",
    ],
    highlights: [
      "HLA/DIS protocol support",
      "Multi-player networking",
      "AI tactical behaviour",
      "After-action review",
    ],
  },
  silverlining: {
    features: [
      "Physically-based sky, cloud, and atmospheric rendering",
      "Dynamic weather system with time-of-day transitions",
      "Cumulus, stratus, cumulonimbus, and cirrus cloud types",
      "OpenGL and OpenSceneGraph integration",
      "Precipitation effects: rain, snow, hail, and fog",
      "Aviation weather presets and real-world METAR data support",
    ],
    highlights: [
      "Physically-based rendering",
      "Dynamic weather",
      "OpenGL/OSG integration",
      "METAR data support",
    ],
  },
  triton: {
    features: [
      "Real-time ocean surface simulation with Beaufort scale sea states",
      "Wave spectrum models: Philips, JONSWAP, and Pierson-Moskowitz",
      "Underwater visibility and scattering effects",
      "Wake and bow wave simulation for vessels",
      "OpenGL and DirectX rendering backends",
      "Integration with SilverLining for combined environment SDK",
    ],
    highlights: [
      "Realistic wave spectra",
      "Underwater effects",
      "Vessel wakes",
      "OpenGL/DirectX backends",
    ],
  },
  videre: {
    features: [
      "Import CAD models from CATIA, NX, SolidWorks, and STEP formats",
      "Collaborative multi-user review sessions over network",
      "Annotation and markup tools for design feedback",
      "VR headset support for immersive design reviews",
      "Cross-section, explode, and measurement tools",
      "Report generation for design review meetings",
    ],
    highlights: [
      "Multi-CAD import",
      "Collaborative review",
      "VR headset support",
      "Measurement tools",
    ],
  },
  vrsafe: {
    features: [
      "Realistic fire propagation and smoke simulation",
      "Interactive fire extinguisher and evacuation training scenarios",
      "Multi-user training sessions for team coordination drills",
      "Customisable facility layouts based on actual building blueprints",
      "Performance scoring and compliance reporting",
      "Compatible with major VR headsets (Oculus, Vive, Valve Index)",
    ],
    highlights: [
      "Fire propagation simulation",
      "Multi-user training",
      "Compliance reporting",
      "Custom facility layouts",
    ],
  },
  augmentor: {
    features: [
      "Live video streaming with AR annotation overlay capabilities",
      "Remote expert can draw, highlight, and annotate on the live feed",
      "Supports smartphones, tablets, and smart glasses",
      "Secure end-to-end encrypted communication channels",
      "Session recording and playback for training documentation",
      "Works in low-bandwidth and offline-capable modes",
    ],
    highlights: [
      "Live AR annotation",
      "Smart glasses support",
      "Session recording",
      "Low-bandwidth mode",
    ],
  },
  farnish: {
    features: [
      "Photorealistic AR furniture placement in real environments",
      "Extensive product catalogue management for retailers",
      "Room scanning and spatial measurement for accurate placement",
      "iOS and Android mobile application",
      "E-commerce integration with add-to-cart functionality",
      "Analytics dashboard for customer engagement tracking",
    ],
    highlights: [
      "Photorealistic placement",
      "Room scanning",
      "E-commerce integration",
      "iOS & Android apps",
    ],
  },
  prodoc: {
    features: [
      "Embed 3D models, animations, and AR markers in product documents",
      "Interactive step-by-step assembly and maintenance guides",
      "Multi-language support for global product documentation",
      "QR code integration for instant mobile document access",
      "Analytics on document usage and step completion rates",
      "Export to PDF, web, and mobile app formats",
    ],
    highlights: [
      "Embedded 3D models",
      "Interactive guides",
      "QR code access",
      "Multi-language support",
    ],
  },
  layar: {
    features: [
      "ML-based real-time object recognition using deep learning models",
      "Virtual content overlay on detected real-world objects",
      "Supports 2D and 3D augmentation on recognized targets",
      "Works on smartphones, tablets, and AR headsets",
      "Offline inference capability without internet connectivity",
      "Custom model training pipeline for domain-specific objects",
    ],
    highlights: [
      "ML object recognition",
      "3D AR overlay",
      "Offline inference",
      "Custom training",
    ],
  },
  intbot: {
    features: [
      "Conversational AI for product information and spare parts lookup",
      "Integration with product documentation and service manuals",
      "Natural language understanding for technical queries",
      "Multi-turn dialogue for guided troubleshooting",
      "Escalation to human support when needed",
      "Analytics dashboard for common query tracking",
    ],
    highlights: [
      "Conversational AI",
      "Parts lookup",
      "Tech query NLU",
      "Analytics dashboard",
    ],
  },
  paintx: {
    features: [
      "Realistic VR-based car painting simulation with accurate spray dynamics",
      "Training scenarios covering surface preparation, primer, base coat, and clear coat",
      "Real-time feedback on coverage, distance, and spray angle",
      "Performance scoring and progress tracking for trainees",
      "Compatible with major VR headsets",
      "Customizable vehicle models and paint specifications",
    ],
    highlights: [
      "Spray dynamics simulation",
      "Real-time feedback",
      "Performance scoring",
      "Multi-vehicle support",
    ],
  },
  torque: {
    features: [
      "Multiplayer online racing with real-time physics-based car dynamics",
      "Stunt tracks with ramps, loops, obstacles, and aerial challenges",
      "Multiple car classes with customizable performance and visual tuning",
      "Real-time leaderboards and competitive match-making",
      "Cross-platform support for PC, mobile, and VR headsets",
      "Replay system for reviewing and sharing race highlights",
    ],
    highlights: [
      "Multiplayer racing",
      "Stunt physics engine",
      "Car customization",
      "Cross-platform play",
    ],
  },
  collab: {
    features: [
      "Multi-user shared virtual reality environments for remote collaboration",
      "Real-time voice communication and spatial audio within VR sessions",
      "3D model import and shared review with annotation tools",
      "Role-based access for presenters, reviewers, and observers",
      "Session recording and playback for asynchronous review",
      "Integration with popular CAD and design tool formats",
    ],
    highlights: [
      "Multi-user VR sessions",
      "Spatial audio",
      "3D annotation tools",
      "Session recording",
    ],
  },
};

export const INDUSTRY_SOLUTIONS: Record<
  string,
  { services: string[]; products: string[] }
> = {
  aerospace: {
    services: [
      "Visual Simulation (VS)",
      "Virtual Reality (VR)",
      "Mixed Reality (MR)",
    ],
    products: ["TRIAN3DBUILDER", "REMO3D", "SILVERLINING", "TRITON", "VIDERE"],
  },
  defense: {
    services: [
      "Visual Simulation (VS)",
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
    ],
    products: ["SSG", "TRIAN3DBUILDER", "REMO3D", "VRSAFE", "AUGMENTOR"],
  },
  automotive: {
    services: [
      "Mixed Reality (MR)",
      "Visual Simulation (VS)",
      "Augmented Reality (AR)",
    ],
    products: ["VIDERE", "REMO3D", "AUGMENTOR", "PRODOC"],
  },
  engineering: {
    services: [
      "Mixed Reality (MR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
    ],
    products: ["VIDERE", "REMO3D", "AUGMENTOR", "PRODOC", "TRIAN3DBUILDER"],
  },
  mining: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Visual Simulation (VS)",
    ],
    products: ["VRSAFE", "AUGMENTOR", "TRIAN3DBUILDER"],
  },
  transport: {
    services: [
      "Visual Simulation (VS)",
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
    ],
    products: ["TRIAN3DBUILDER", "REMO3D", "SILVERLINING", "TRITON", "PRODOC"],
  },
  healthcare: {
    services: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Mixed Reality (MR)",
    ],
    products: ["VRSAFE", "AUGMENTOR", "PRODOC"],
  },
  manufacturing: {
    services: [
      "Augmented Reality (AR)",
      "Mixed Reality (MR)",
      "Artificial Intelligence (AI)",
    ],
    products: ["LAYAR", "AUGMENTOR", "PRODOC", "INTBOT"],
  },
  "homeland-security": {
    services: [
      "Virtual Reality (VR)",
      "Visual Simulation (VS)",
      "Artificial Intelligence (AI)",
    ],
    products: ["SSG", "VRSAFE", "AUGMENTOR"],
  },
};
