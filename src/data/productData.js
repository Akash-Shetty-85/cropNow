import seed from '@/assets/Products/SEED.png';
import nest from '@/assets/Products/NEST.png';
import kaptor from '@/assets/Products/KAPTOR_C7.png';
import aowcm from '@/assets/Products/AOWCM.png';
import seedx from '@/assets/Products/SEED_X.png';

const productData = [
  {
    id: 1,
    title: 'SEED',
    src: seedx,
    description: 'Autonomous agricultural rover for precision farming.',
    details: [
      { title: 'Structure', description: 'Portable and easy to deploy for small-scale farming. Weather-resistant coating for enhanced durability.' },
      { title: 'Power System', description: 'Rechargeable lithium-ion battery with extended runtime. Solar charging capability for sustainable operation.' },
      { title: 'Data Handling', description: 'AI-powered onboard computer for real-time crop analysis. Cloud connectivity for data storage and remote access.' },
      { title: 'Communication Systems', description: 'Wi-Fi and SIM module for long-range, high-speed data transfer. Strong network connectivity for real-time monitoring and remote control.' },
      { title: 'Onboard Sensors', description: 'AI-powered imaging for precise crop health analysis. Smooth navigation across diverse agricultural terrains while avoiding obstacles.' },
      { title: 'Remote Control', description: 'User-friendly controls ensure seamless operation with minimal effort. Ensures precise spraying of pesticides and medicine only where required.' },
      { title: 'Form Factor', description: 'Autonomous Rover. Material: High-Durability Lightweight Composite. Mass: 40Kg.' }
    ],
  },
  {
    id: 2,
    title: 'SEED X',
    description: 'Compact and efficient agricultural rover with advanced data handling.',
    src: seed,
    details: [
      { title: 'Structure', description: 'Small size, compact & sturdy. Weather-resistant coating for enhanced durability.' },
      { title: 'Power System', description: 'Rechargeable lithium-ion battery with extended runtime.' },
      { title: 'Data Handling', description: 'AI-powered onboard computer for real-time crop analysis. Cloud connectivity for data storage and remote access.' },
      { title: 'Communication Systems', description: 'Wi-Fi and SIM module for long-range, high-speed data transfer. Strong network connectivity for real-time monitoring and remote control.' },
      { title: 'Onboard Sensors', description: 'AI-powered imaging for precise crop health analysis. Smooth navigation across diverse agricultural terrains while avoiding obstacles.' },
      { title: 'Remote Control', description: 'User-friendly controls ensure seamless operation with minimal effort. Enables accurate navigation and task execution for optimal performance.' },
      { title: 'Form Factor', description: 'Autonomous Rover. Material: High-Durability Lightweight Composite. Mass: 15Kg.' }
    ],
  },
  {
    id: 3,
    title: 'NEST',
    description: 'Advanced composting system with intelligent sensing and connectivity.',
    src: nest,
    details: [
      { title: 'Durable & Scalable Design', description: 'Compact and modular build for easy installation in various environments. Weatherproof enclosure ensures long-lasting outdoor performance.' },
      { title: 'Efficient Power Management', description: 'Fully automated system requiring minimal maintenance. Solar-powered option enables sustainable, off-grid functionality.' },
      { title: 'Advanced Data Processing', description: 'Real-time data collection with cloud-based storage for remote accessibility. AI-driven insights enhance decision-making and resource optimization.' },
      { title: 'Seamless Connectivity', description: 'Integrated Wi-Fi and SIM module for long-range, high-speed data transmission. Secure and stable communication for uninterrupted monitoring.' },
      { title: 'Intelligent Sensing Technology', description: 'High-precision sensors track air, soil, and water conditions in real time. Smart analytics detect anomalies and support proactive management.' }
    ],
  },
  {
    id: 4,
    title: 'Kaptor-C7',
    description: 'Advanced drone for precision agriculture and multi-domain applications.',
    src: kaptor,
    details: [
      { title: 'Precision Agriculture', description: 'Efficient pesticide and medicine spraying with targeted application. High-resolution imaging for accurate crop health monitoring and land mapping.' },
      { title: 'High Payload & Endurance', description: 'Strong lift capacity for carrying agricultural inputs and sensors. Long battery life with rapid charging for extended operations.' },
      { title: 'Smart Navigation & Control', description: 'GPS-guided autonomous flight with real-time obstacle detection. Remote monitoring and AI-powered autopilot for seamless operation.' }
    ],
  },
  {
    id: 5,
    title: 'AOWCM',
    src: aowcm,
    details: [
      { title: 'Structure', description: 'Small size, compact & sturdy. Weather-resistant coating for enhanced durability.' },
      { title: 'Power System', description: 'Rechargeable lithium-ion battery with extended runtime.' },
      { title: 'Data Handling', description: 'AI-powered onboard computer for real-time crop analysis. Cloud connectivity for data storage and remote access.' },
      { title: 'Communication Systems', description: 'Wi-Fi and SIM module for long-range, high-speed data transfer. Strong network connectivity for real-time monitoring and remote control.' },
      { title: 'Onboard Sensors', description: 'AI-powered imaging for precise crop health analysis. Smooth navigation across diverse agricultural terrains while avoiding obstacles.' },
      { title: 'Remote Control', description: 'User-friendly controls ensure seamless operation with minimal effort. Enables accurate navigation and task execution for optimal performance.' },
      { title: 'Form Factor', description: 'Autonomous Rover. Material: High-Durability Lightweight Composite. Mass: 15Kg.' }
    ],
  },
];


export default productData;