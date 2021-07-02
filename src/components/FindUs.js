import { useState } from "react";
import "./findus.css";
import Modal from "../Modals/Modal"
import * as React from 'react';
import ReactMapGL from 'react-map-gl';
function FindUs() {
  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude:40.712776,
    longitude: -74.005974,
    zoom: 8
  });
  const [isOpen,setIsOpen]=useState(false);

  function openHandler(){
    setIsOpen(true)
  }
  function closeHandler(){
    setIsOpen(false)
  }
  return (
    <div className="fbox">
      <div id="lft" className="pd-side" data-aos="fade-right">
        <h className="heading-b">find us</h>
        <p className="sub-heading-b">contact</p>
        <p className="para-b">
          805-212-6021 <br />
          213-303-5696 <br />
          4llsru5wgdk@temporary-mail.net
        </p>
        <br />
        <p className="sub-heading-b">location</p>
        <p className="para-b">
          343 Adonais Way <br />
          Saint regis falls <br />
          New York <br />
          12980
        </p>
        <a href="#" className="link-b aside no" onClick={openHandler}>
          view in google maps
        </a>
        <Modal open={isOpen}>
        <div id="mapbox"><ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPMOX_TOKEN_1}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
          <button className="btn-sm-b btn-map" onClick={closeHandler}>Close</button></div>
        </Modal>
      </div>
      <div id="rgt" className="pd-side" data-aos="fade-left">
        <input
          type="text"
          name=""
          id=""
          className="line text-small-b pd-side mg-front"
          placeholder="name"
        />
        <input
          type="text"
          name=""
          id=""
          className="line text-small-b pd-side mg-front"
          placeholder="email"
        />
        <input
          type="text"
          name=""
          id=""
          className="line text-small-b pd-side mg-front"
          placeholder="phone"
        />
        <textarea
          name=""
          id=""
          cols="20"
          rows="5"
          placeholder="comments"
          className="line text-small-b pd-side mg-front"
        ></textarea>
        <a href="#" className="link-b aside">
          submit
        </a>
      </div>
    </div>
  );
}
export default FindUs;
