import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Welcome </span> */}
        {/* <span className="headerTitleLg">Blog</span> */}
      </div>

      <img
        className="headerImg"
        src="https://rare-gallery.com/uploads/posts/1041876-sunlight-trees-landscape-forest-nature-reflection-grass-shadow-branch-sunrise-green-evening-morning-mist-Sun-sun-rays-atmosphere-light-tree-fog-leaf-weather-dawn-plant-.jpg"
        alt="profile-pic"
      />
    </div>
  );
}
