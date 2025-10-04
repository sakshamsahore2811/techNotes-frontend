import React, {useState, useEffect} from "react";
import {
  Search,
  File,
  Folder,
  BookOpen,
} from "lucide-react";
import {Link} from "react-router-dom";
import bg from "../assets/bg.jpg";

const menuItems = [
  { icon: <Search size={18} />, label: "Login", path:"/login" },
  { icon: <File size={18} />, label: "Sign Up", path:"/signup"  },
  { icon: <Folder size={18} />, label: "About", path:"/about"},
  { icon: <BookOpen size={18} />, label: "Github Repo", path:"/github" },
];

export default function Public() {
    const [time, setTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const hawaiiTime = new Date().toLocaleString("en-US", {
      timeZone: "Pacific/Honolulu",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setTime(hawaiiTime);
  };

  updateTime(); // run once immediately
  const interval = setInterval(updateTime, 1000);

  return () => clearInterval(interval); // cleanup
}, []);
  return (
    <div className="welcome-container pixelify-sans-text">
      {/* Main content */}
      <div className="main-content">
        <h1 className="title pixelify-sans-text">TECH NOTES</h1>

        <div className="menu">
          {menuItems.map((item, idx) => (
            <Link to={item.path}>
            <div key={idx} className="menu-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="footer pixelify-sans-text">
        Time in Hawai : {time}
      </div>

      <img src={bg} alt="bg" className="bg-image" />
    </div>
  );
}
