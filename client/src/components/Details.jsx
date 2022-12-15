import { Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Details.css";
import { useContext } from 'react';
import { listContextStates } from "../App";
import { useState} from 'react';

function Details(props) {
  const [currentDetails, setCurrentDetails] = useState(listContextStates)
  return (
    <div>
        <ListGroup variant="flush" className="movie-details">
          <ListGroup.Item className="details-title"><strong className="strong">|</strong>Movie Details</ListGroup.Item>
          <ListGroup.Item className="details">Release Date {props.details.releasedate}</ListGroup.Item>
          <ListGroup.Item className="details">Studio {props.details.studio}</ListGroup.Item>
          <ListGroup.Item className="details">Language {props.details.language}</ListGroup.Item>
          <ListGroup.Item className="details">Budget {props.details.budget}</ListGroup.Item>
          <ListGroup.Item className="details">Sales {props.details.globalsales}</ListGroup.Item>
        </ListGroup> 
     
    {console.log(props.details)}
    </div>


/* <section className="section-detail">
  <div className="div-header">
    <hgroup>
      <h3 className="h3-title">
        <span>Movie Details</span>
      </h3>
    </hgroup>
  </div>
  <div>
    <ul>
      <li>Release Date
        <div>
          <ul>
            <li>Release Info</li>
          </ul>
        </div>
      </li>
      <li>Studio
        <div>
          <ul>
            <li>Studio Info</li>
          </ul>
        </div>
      </li>
      <li>Language
        <div>
          <ul>
            <li>Language Info</li>
          </ul>
        </div>
      </li>
      <li>Budget
        <div>
          <ul>
            <li>Budget Info</li>
          </ul>
        </div>
      </li>
      <li>Sales
        <div>
          <ul>
            <li>Sales Info</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</section>  */

  );
}

export default Details;