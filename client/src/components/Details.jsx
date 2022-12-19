import { Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Details.css";
import { useContext } from 'react';
import { listContextStates } from "../App";
import { useState} from 'react';

function Details(props) {
  const [currentDetails, setCurrentDetails] = useState(listContextStates)
  return (
      <section className="section-detail">
        <div className="div-header">
          <hgroup className="hgroup">
            <h3 className="h3-title">
              <span className="span">Details</span>
            </h3>
          </hgroup>
        </div>
        <div className="div-details">
          <ul className="first-ul">
            <li className="first-li">
              <a className="li-detail-name">Release Date</a>
              <div className="div-results">
                <ul className="second-ul">
                  <li className="second-li">
                  <a className="second-a">{props.details.releasedate}</a>
                  </li>
                </ul>
              </div>
              <a className="li-detail-arrow-a">
                <sgv className="arrow">&gt;</sgv>
              </a>
            </li>
            <li className="first-li">
              <a className="li-detail-name">Studio</a>
              <div className="div-results">
                <ul className="second-ul">
                  <li className="second-li">
                  <a className="second-a">{props.details.studio}</a>
                  </li>
                </ul>
              </div>
              <a className="li-detail-arrow-a">
                <sgv className="arrow">&gt;</sgv>
              </a>
            </li>
            <li className="first-li">
              <a className="li-detail-name">Language</a>
              <div className="div-results">
                <ul className="second-ul">
                  <li className="second-li">
                  <a className="second-a">{props.details.language}</a>
                  </li>
                </ul>
              </div>
              <a className="li-detail-arrow-a">
                <sgv className="arrow">&gt;</sgv>
              </a>
            </li>
            <li className="first-li">
              <a className="li-detail-name">Budget</a> 
              <div className="div-results">
                <ul className="second-ul">
                  <li className="second-li">
                  <a className="second-a">{props.details.budget}</a>
                  </li>
                </ul>
              </div>
              <a className="li-detail-arrow-a">
                <sgv className="arrow">&gt;</sgv>
              </a>
            </li>
            <li className="bottom-li">
              <a className="li-detail-name">Sales</a> 
              <div className="div-results">
                <ul className="second-ul">
                <li className="second-li">
                  <a className="second-a">{props.details.globalsales}</a>
                  </li>
                </ul>
              </div>
              <a className="li-detail-arrow-a">
                <sgv className="arrow">&gt;</sgv>
              </a>
            </li>
          </ul>
        </div>
      </section>  

  );
}

export default Details;