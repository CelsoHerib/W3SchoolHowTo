import styled from "styled-components";


export default function Navbar(){
    return(
        <NavBar>
        <div class="sidebar">
            <a href="#home"><img src="./src/images/logo.png" alt="logo" /></a>
  <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#about"><i class="fa fa-fw fa-address-card"></i> About</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Testimonials</a>
  <a href="#projects"><i class="fa fa-fw fa-folder"></i> Projects</a>
  <a href="#skills"><i class="fa fa-fw fa-code"></i> Skills</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
</div>
</NavBar>
    )
}


const NavBar = styled.div`
.sidebar {
max-height: 100vh;
overflow-y: auto;
width: 160px;
position: fixed;
z-index: 1;
  height: auto;
  top: 0;
  bottom: 0;

  background-color: #111;
  padding-top: 36px;
  transition: 0.5s;
  font-size: 18px;
  color: #f1f1f1;
  font-weight: bold;
  text-align: center;
}

/* Style sidebar links */
.sidebar a {
  padding: 26px 18px 26px 18px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

/* Style links on mouse-over */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Style the main content */
.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}

/* Add media queries for small screens (when the height of the screen is less than 450px, add a smaller padding and font-size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}

`


