import {Fragment} from "react";
import "./nav.css";
import {FaSearch}from "react-icons/fa"
import {useHistory ,Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Nav(){
    const history = useHistory();
    function awayHandler(){
        history.push("/booknow")
    }
    return (<Fragment>
        <nav data-aos="fade-down">
        <div id="leftside">
            <h1><Link to="/">Traversta</Link></h1>
            </div>
            <div id="rightside">
            <button className="btn-sm-w button" onClick={awayHandler}>book now</button>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Need Help?
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/aboutus">About Us</Dropdown.Item>
    <Dropdown.Item href="/ourteam">Our Team</Dropdown.Item>
    <Dropdown.Item href="/findus">Contact Us</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            <FaSearch className="icons" title="Search here"/>   
            </div>
            </nav>
        </Fragment>)
}
export default Nav
AOS.init(
  {duration:1200}
);