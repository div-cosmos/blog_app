import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://st.focusedcollection.com/14026668/i/650/focused_490872850-stock-photo-smiling-man-looking-smart-phone.jpg"
          alt="about-pic"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          necessitatibus laudantium maiores odit fuga culpa. Delectus placeat
          provident obcaecati natus quas, laborum laboriosam alias. Culpa sit
          voluptatibus distinctio doloremque? Aspernatur magni deserunt
          architecto explicabo praesentium enim! Corporis ad earum ab.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`} key={uuidv4()}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle fu">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
