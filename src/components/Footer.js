import "./footer.css"
function Footer(){
    return (<div id="footer">
        <section id="f1">
        <p className="para-b">About Us</p> <br/>
        <p className="para-b">Contact Us</p> <br/>
        <p className="para-b">Find Us</p> <br/>
        </section>
        <section id="f2">
            <p className="link-b">view in google maps</p><br/>
            <p className="text-small-b">made by asmi somani</p>
        </section>
        <section id="f3">
            <input type="text" className="line placeholder mg-side" placeholder="Name"/>
            <input type="text" className="line placeholder mg-side" placeholder="Email"/><br/>
            <a href="#" className="link-b mg-side pd-side aside">subscribe</a>
        </section>
    </div>)
}
export default Footer