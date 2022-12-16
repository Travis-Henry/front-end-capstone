import { CardGroup } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import CastCard from "./CastCard";

function Cast(props) {
  console.log(props);
  const cast = props.currentMovie.cast;
  // console.log(cast);
  return (
    <CardGroup>
      {/* <CastCard props={props} /> */}
      {cast && cast.map((items) => <CastCard items={items} />)}
    </CardGroup>
  );
}

export default Cast;
