export default function Rating(props) {
  const { rating } = props;

  const styledImage = { width: '16px', height: '16px', 'margin-left': '2px' };

  return (
    <div className="ratingFilter">
      {rating >= 1 ? (
        <img src="star-rated.png" alt="rated" style={styledImage} />
      ) : (
        <img src="star.png" alt="not-rated" style={styledImage} />
      )}
      {rating >= 2 ? (
        <img src="star-rated.png" alt="rated" style={styledImage} />
      ) : (
        <img src="star.png" alt="not-rated" style={styledImage} />
      )}
      {rating >= 3 ? (
        <img src="star-rated.png" alt="rated" style={styledImage} />
      ) : (
        <img src="star.png" alt="not-rated" style={styledImage} />
      )}
      {rating >= 4 ? (
        <img src="star-rated.png" alt="rated" style={styledImage} />
      ) : (
        <img src="star.png" alt="not-rated" style={styledImage} />
      )}
      {rating >= 5 ? (
        <img src="star-rated.png" alt="rated" style={styledImage} />
      ) : (
        <img src="star.png" alt="not-rated" style={styledImage} />
      )}
    </div>
  );
}
