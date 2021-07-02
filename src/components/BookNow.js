import {Fragment ,useState } from "react"
import {Carousel} from "react-bootstrap"
import Modal from "../Modals/Modal"
import "./booknow.css"
import * as React from 'react';
import ReactMapGL from 'react-map-gl';

function BookNow(){
  const [viewport1, setViewport1] = useState({
    width: 500,
    height: 500,
    latitude:56.589405,
    longitude: -3.337832,
    zoom: 8
  });
  const [viewport2, setViewport2] = useState({
    width: 500,
    height: 500,
    latitude:42.005840,
    longitude: 13.280080,
    zoom: 8
  });
  const [viewport3, setViewport3] = useState({
    width: 500,
    height: 500,
    latitude:-8.99283995963232,
    longitude:  -77.6721087374959,
    zoom: 8
  });

const [isOpen1,setIsOpen1]=useState(false);
const [isOpen2,setIsOpen2]=useState(false);
const [isOpen3,setIsOpen3]=useState(false);
function maps1(){
  setIsOpen1(true)
}
function maps2(){
  setIsOpen2(true)
}
function maps3(){
  setIsOpen3(true)
}
function closeHandler1(){
  setIsOpen1(false)
}
function closeHandler2(){
  setIsOpen2(false)
}
function closeHandler3(){
  setIsOpen3(false)
}

    return <Fragment><Carousel>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1609716833720-1836ba085bbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="sub-heading-w">Blairgowrie VIC, Australia</h3>
        <p className="para-w"> Maxime, sint quae ab temporibus soluta quisquam rellum assumenda quia.
        </p>
        <a className="link-w" onClick={maps1}>view location</a>
        <Modal open={isOpen1} >
          <div id="mapbox" ><ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPMOX_TOKEN_1}
      {...viewport1}
      onViewportChange={nextViewport => setViewport1(nextViewport)}
    />
          <button className="btn-sm-w" onClick={closeHandler1}>Close1</button></div>
        </Modal>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3 className="sub-heading-w">Cappadocia, central turkey</h3>
        <p className="para-w">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a onClick={maps2} className="link-w">view location</a>
        <Modal open={isOpen2}>
          <div id="mapbox" ><ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPMOX_TOKEN_1}
      {...viewport2}
      onViewportChange={nextViewport => setViewport2(nextViewport)}
    />
          <button className="btn-sm-w" onClick={closeHandler2}>Close2</button></div>
        </Modal>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1528255915607-9012fda0f838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3 className="sub-heading-w">Paron Lake, Peru</h3>
        <p className="para-w">Praerem ipsum dolor, sit ame inventore est dor Fuga, officia obcaecati.</p>
        <a onClick={maps3} className="link-w">view location</a>
        <Modal open={isOpen3}>
          <div id="mapbox" ><ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPMOX_TOKEN_1}
      {...viewport3}
      onViewportChange={nextViewport => setViewport3(nextViewport)}
    />
          <button className="btn-sm-w" onClick={closeHandler3}>Close3</button></div>
        </Modal>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></Fragment>
  
}
export default BookNow