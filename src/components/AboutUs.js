import bgvid2 from "../img/bgvid2.mp4"
import poster from "../img/poster.jpg"
import "./aboutus.css"
function AboutUs(){
    return <div id="aboutus" >
        <video loop autoPlay muted poster={poster} width="100vw" className="bgvid">
            <source src={bgvid2} type="video/mp4"/>
        </video>
        <div id="l" className="para-b" data-aos="fade-right">
        We aim at creating travelling easy , affordable and available in the pandemic ensuring complete safety by conversing 24/7 through our Traversta Virtual Assistant and after booking through our agents . To help you have a great experience we have provided a first traveller discounts ranging from 10% to 20%. offer valid till 30 July. 
        </div>
        <div id="c" className="heading-w" data-aos="fade-in">
            about us
        </div>
        <div id="r" className="para-b" data-aos="fade-left">
        We are a bunch of travel enthusiasts aiding to make others’ travel dreams come true.
Take the pledge to join our movement and voice your commitment to responsible tourism. We're building a movement of one million people committed to traveling better. Eco-friendly travel. Zero waste business. 
        </div>
    </div>
}
export default AboutUs