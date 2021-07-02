import {Fragment } from "react";
import "./home.css";
import {useHistory} from "react-router-dom";
function Home(){
    const history = useHistory();
    function awayHandler(){
        history.push("/booknow")
    }
    return <Fragment>
        <div id="bg">
        <section id="home" data-aos="fade-right">
        <h1 className="heading-w mg-l">Go. Find. Explore.</h1>
        <h1 className="text-big-w">travelling made as easy as a walk in the park</h1>
        <button className="btn-lg-w" onClick={awayHandler}>book now</button>
        </section>
        </div>
    </Fragment>
}
export default Home