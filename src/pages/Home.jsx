
import { IoAlertCircleOutline, IoMapOutline, IoSchoolOutline } from "react-icons/io5";
import '../css/Home.css';
import { useNavigate } from "react-router-dom";
import {features} from '../services/api.jsx';

function Home() {
   const navigate = useNavigate();
  const handleStart = () =>{
    const username = localStorage.getItem('username');
    username ? navigate('/topology') : navigate('/login');
  }
  const handleLearnBtn = () =>{
      const el = document.getElementById('descrptions');
    if(el) el.scrollIntoView({behavior:"smooth", block:'start'})
  }
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
          <button className="btn-primary" onClick={handleStart}>Get Started</button>
          <button className="btn-secondary" onClick={handleLearnBtn}>Learn More</button>
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

      <section className="descrptions" id="descrptions">
        <h2>Features</h2>
        {
          features.map((feature, index)=>(
            <div className="" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Home;
