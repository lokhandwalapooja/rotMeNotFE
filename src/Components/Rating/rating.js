import React ,{useState}from "react";
import { Rating } from '@mui/material';

const Ratings = (props) => {
    const [ratingValue, setRatingValue] = useState(props.value);

    const {className, value, name, onRatingChange} = props;

  if (props.readOnly) {
    return <Rating name={name} value={value} size={"small"} readOnly />;
  } else {
    return (
      <Rating
        name={name}
        size={"small"}
        value={ratingValue}
        className={className}
        onChange={(event, newValue) => {
            setRatingValue(newValue);
            onRatingChange();
        }}
      />
    );
  }
};

export default Ratings;
