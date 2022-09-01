import React from 'react';
import { ImStarFull } from 'react-icons/im';
import { ImStarHalf } from 'react-icons/im';
import { ImStarEmpty } from 'react-icons/im';

const Rating = ({ rating, numReviews, caption }) => {
  return (
    <div className="rating">
      <span>
        <i>
          {rating >= 1 ? (
            <ImStarFull />
          ) : rating >= 0.5 ? (
            <ImStarHalf />
          ) : (
            <ImStarEmpty />
          )}
        </i>
      </span>
      <span>
        <i>
          {rating >= 2 ? (
            <ImStarFull />
          ) : rating >= 1.5 ? (
            <ImStarHalf />
          ) : (
            <ImStarEmpty />
          )}
        </i>
      </span>
      <span>
        <i>
          {rating >= 3 ? (
            <ImStarFull />
          ) : rating >= 2.5 ? (
            <ImStarHalf />
          ) : (
            <ImStarEmpty />
          )}
        </i>
      </span>
      <span>
        <i>
          {rating >= 4 ? (
            <ImStarFull />
          ) : rating >= 3.5 ? (
            <ImStarHalf />
          ) : (
            <ImStarEmpty />
          )}
        </i>
      </span>
      <span>
        <i>
          {rating >= 5 ? (
            <ImStarFull />
          ) : rating >= 4.5 ? (
            <ImStarHalf />
          ) : (
            <ImStarEmpty />
          )}
        </i>
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{'' + numReviews + ' reviews'}</span>
      )}
    </div>
  );
};

export default Rating;
