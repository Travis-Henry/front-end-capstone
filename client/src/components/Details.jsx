import { Card } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Details.css";

function Details() {
  return (
      <ListGroup variant="flush" className="movie-details">
        <ListGroup.Item className="details-title"><strong className="strong">|</strong>Movie Details</ListGroup.Item>
        <ListGroup.Item className="details">Release Date</ListGroup.Item>
        <ListGroup.Item className="details">Studio</ListGroup.Item>
        <ListGroup.Item className="details">Language</ListGroup.Item>
        <ListGroup.Item className="details">Budget</ListGroup.Item>
        <ListGroup.Item className="details">Sales</ListGroup.Item>
      </ListGroup>


/* <section className="section-detail">
  <div className="div-header">s
    <hgroup>
      <h3>
        ::before
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
</section> */

  );
}

export default Details;