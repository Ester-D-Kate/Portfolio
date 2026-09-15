export type ProjectIcon =
  | "eye"
  | "hand-pointer"
  | "robot"
  | "microchip"
  | "recycle"
  | "heart-pulse"
  | "cat"
  | "audio";

export type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  href?: string;
  liveHref?: string;
  tone: string;
  icon: ProjectIcon;
  status: "Completed" | "Working demo";
  source: "open-source" | "release" | "private";
};

export const completedProjects: Project[] = [
  {
    number: "01",
    name: "AudioFlow",
    type: "Voice workflow desktop app",
    description:
      "A focused desktop voice workflow that turns spoken thoughts into formatted, usable text while keeping language, custom vocabulary, screen context, and highlighted text in view.",
    stack: ["Next.js", "Bun", "Deepgram", "OpenRouter"],
    href: "https://github.com/Ester-D-Kate/audio-flow-releases/releases",
    liveHref: "https://audioflow.in/",
    tone: "cream",
    icon: "audio",
    status: "Completed",
    source: "release",
  },
  {
    number: "02",
    name: "Gyro-Neural Band",
    type: "Gesture-recognition wearable",
    description:
      "A gyro ring and ESP32 wristband that recognizes index-finger characters and turns those gestures into real keystrokes over Bluetooth HID.",
    stack: ["ESP32", "IMU", "TinyML", "Bluetooth HID"],
    href: "https://github.com/Ester-D-Kate/gyro-neural-band",
    tone: "sage",
    icon: "hand-pointer",
    status: "Completed",
    source: "open-source",
  },
  {
    number: "03",
    name: "Zero",
    type: "Robotic arm · First project",
    description:
      "My first-ever build: a seven-servo robotic arm with inverse kinematics, AI, glove, and web control, supported by custom H-bridge motor drivers.",
    stack: ["Kinematics", "ESP32", "MQTT", "Motor Control"],
    href: "https://github.com/Ester-D-Kate/zero-the-robo-arm",
    tone: "sand",
    icon: "robot",
    status: "Completed",
    source: "open-source",
  },
  {
    number: "04",
    name: "Eye Tracker",
    type: "Assistive eye tracking",
    description:
      "My strongest project: a robust pupil-tracking system for gaze estimation and hands-free interaction, built to work across real-world lighting, resolution, and calibration constraints.",
    stack: ["Python", "OpenCV", "NumPy", "Pupil Detection"],
    tone: "cream",
    icon: "eye",
    status: "Completed",
    source: "private",
  },
];

export const incompleteProjects: Project[] = [
  {
    number: "05",
    name: "Automation Hardware",
    type: "Agentic × physical systems",
    description:
      "A working personal-agent demo with RAG memory, activity context, semantic search, and a control layer spanning OS automation and ESP32/Pico hardware.",
    stack: ["FastAPI", "Qdrant", "RAG", "ESP32", "MQTT"],
    href: "https://github.com/Ester-D-Kate/automation-hardware",
    tone: "clay",
    icon: "microchip",
    status: "Working demo",
    source: "open-source",
  },
  {
    number: "06",
    name: "Wastewhirl",
    type: "Smart waste hardware",
    description:
      "A working smart-bin demo combining ML-based waste sorting, RFID identity and payments, fill-level sensing, and collection alerts.",
    stack: ["Edge ML", "RFID", "ESP32", "MQTT"],
    href: "https://github.com/Ester-D-Kate/waste-whirl",
    tone: "moss",
    icon: "recycle",
    status: "Working demo",
    source: "open-source",
  },
  {
    number: "07",
    name: "BioTrack",
    type: "Connected health monitoring",
    description:
      "A working patient-monitoring demo with live vitals, fall detection, emergency alerts, rehabilitation support, and a connected clinical dashboard.",
    stack: ["Next.js", "FastAPI", "ESP12E", "Sensors"],
    href: "https://github.com/Ester-D-Kate/bio_track360",
    tone: "blue",
    icon: "heart-pulse",
    status: "Working demo",
    source: "open-source",
  },
  {
    number: "08",
    name: "Crack Lane",
    type: "Agentic pet robot",
    description:
      "A working embodied-agent demo that follows people, searches the web, speaks answers, and can operate a computer through generated HID automation.",
    stack: ["Computer Vision", "FastAPI", "ESP8266", "Robotics"],
    href: "https://github.com/Ester-D-Kate/Crack",
    tone: "rose",
    icon: "cat",
    status: "Working demo",
    source: "open-source",
  },
];

export const skillGroups = [
  {
    title: "Intelligence",
    note: "Systems that reason",
    skills: [
      "Agentic workflows",
      "RAG pipelines",
      "LLM integration",
      "Vector databases",
      "Computer vision",
    ],
  },
  {
    title: "Proofs & systems",
    note: "Trust without disclosure",
    skills: [
      "Zero-knowledge systems",
      "Protocol thinking",
      "Python",
      "C / C++",
      "TypeScript",
    ],
  },
  {
    title: "The web layer",
    note: "Interfaces that connect",
    skills: ["FastAPI", "Elysia JS", "REST APIs", "WebSockets", "MQTT"],
  },
  {
    title: "The physical layer",
    note: "Things that move",
    skills: [
      "ESP32 / STM32",
      "Raspberry Pi",
      "PCB design",
      "Sensor fusion",
      "Robot kinematics",
    ],
  },
];

export const achievements = [
  "Hackmol 7.0 · 1st",
  "HackerWrath · 1st",
  "I am Engineer · 1st",
  "StatusBrew · 2nd",
  "CodeWars · 2nd",
  "Robowar · 3rd",
];
