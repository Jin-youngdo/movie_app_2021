import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const LS = location.state;
    if (location.state) {
      return (
        <div className="detail__pages">
          <img src={LS.poster} alt={LS.title} title={LS.title} />
          <h3 className="detail__pages_title">{LS.title}</h3>
          <h5 className="detail__pages_year">{LS.year}</h5>
          <ul className="detail__pages_genres">
            {LS.genres.map((genre, index) => (
              <li key={index} className="detail__pages_genres_genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="detail__pages_summary">{LS.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
