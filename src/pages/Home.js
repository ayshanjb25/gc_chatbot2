import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Makeup from "../models/Makeup";
import { CardsCarousel } from "../components/CardsCarousel";
import {
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Polyline,
  CornerBox,
  Triangle,
} from "react-shapes";
import chatIcon from "../assets/3d/chat.png";
import { Header } from "../components/Header";
import { useSpring, a } from "@react-spring/three";
import IntroCard from "../components/IntroCard";

const Home = () => {
  const adjustMakeupForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenPosition, screenScale];
  };

  const [makeupScale, makeupPosition] = adjustMakeupForScreenSize();

  const [scrollY, setScrollY] = useState(0);
  const [{ rotation }, setRotation] = useSpring(() => ({
    rotation: [0, 20, 0],
  }));

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setRotation({ rotation: [0, window.scrollY / 100, 0] });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setRotation]);
  return (
    <div>
      <Header />
      <main>
        {/* <p>
          Anjas is mad
        </p> */}
        <div style={{ display: "flex", flexDirection: "column", alignItems:"center"}}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap:'200px'}}>
            <Canvas style={{ height: "800px", width:"500px" }}>
              <Suspense fallback={null}>
                <directionalLight position={[1, 1, 1]} intensity={6} />
                <ambientLight intensity={1.5} />
                <pointLight intensity={40} color="#997A8D" />
                <spotLight intensity={-1.5} />
                <hemisphereLight groundColor="#000000" intensity={2} />
                <Makeup
                  postion={makeupPosition}
                  scale={[0.3, 0.3, 0.3]}
                  rotation={rotation}
                />
                <OrbitControls />
              </Suspense>
            </Canvas>
            
            <IntroCard  />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CardsCarousel />
          </div>
        </div>

        <div
          style={{ position: "fixed", bottom: "10%", right: "5%", zIndex: "1" }}
        >
          <img
            src={chatIcon}
            alt="chat icon"
            style={{ width: "100px", justifyContent: "right" }}
          />
        </div>

        {/* <Rectangle width={100} height={100} fill={{color:'#997A8D'}} stroke={{color:'#893843'}} strokeWidth={3} /> */}
        <Circle
          r={50}
          fill={{ color: "transparent" }}
          stroke={{ color: "#893843" }}
          strokeWidth={2}
        />
        {/* <Ellipse rx={300} ry={100} fill={{color:'#2409ba'}} stroke={{color:'#893843'}} strokeWidth={3} />
<Line x1={25} x2={350} y1={25} y2={350}  stroke={{color:'#893843'}} strokeWidth={3} />
<Polyline points='25,25 25,350 500,350 500,500 305,250 20,15' fill={{color:'#2409ba'}} stroke={{color:'#893843'}} strokeWidth={3} />
<CornerBox size={400} width={150} orientation='topLeft' fill={{color:'#2409ba'}} stroke={{color:'#893843'}}strokeWidth={3} />
<Triangle width={150} height={150} fill={{color:'#2409ba'}} stroke={{color:'#893843'}} strokeWidth={3} /> */}
        <div
          style={{
            position: "fixed",
            margin: "-100px 20px 20px -250px",
            top: "10%",
            left: "10%",
            zIndex: "-1",
          }}
        >
          <Circle
            r={200}
            fill={{ color: "transparent" }}
            stroke={{ color: "#893843" }}
            strokeWidth={2}
          />
          <div style={{ position: "absolute", top: "20%", left: "20%" }}>
            <Circle
              r={120}
              fill={{ color: "transparent" }}
              stroke={{ color: "#893843" }}
              strokeWidth={2}
            />
            <div style={{ position: "absolute", top: "30%", left: "30%" }}>
              <Circle
                r={50}
                fill={{ color: "transparent" }}
                stroke={{ color: "#893843" }}
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
