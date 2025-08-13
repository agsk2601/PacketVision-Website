import React from 'react';
import { IoAlertCircleOutline, IoMapOutline, IoSchoolOutline } from "react-icons/io5";
import '../css/Home.css';

function Home() {
  return (
    <div className="home">
      <div className='packet-background'>
        {
            Array.from({length:20}).map((_,i)=>(
                <span key={i} className='packet'></span>
            ))
        }
      </div>
      <section className="hero">
        <h1>Welcome to <span>PacketVision</span></h1>
        <p>Visualize networks, simulate traffic, and detect threats in real-time.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <IoMapOutline size={40} />
          <h3>Interactive Topology</h3>
          <p>Design and explore dynamic network maps with real-time status updates.</p>
        </div>
        <div className="feature-card">
          <IoAlertCircleOutline size={40} />
          <h3>Security Alerts</h3>
          <p>Receive simulated alerts for threats like ARP spoofing, DDoS, and port scans.</p>
        </div>
        <div className="feature-card">
          <IoSchoolOutline size={40} />
          <h3>Learning Mode</h3>
          <p>Understand protocols through OSI layer visualization and mini-quizzes.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
