import React from "react";
import PropTypes from "prop-types";

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  };
  renderButtons = () => {
    const years = [2018, 2017, 2016, 2015, 2014];

    return years.map((item, index) => {
      return (
        <button key={index} className="btn" onClick={this.onBtnClick}>
          {item}
        </button>
      );
    });
  };

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props;

    if (error) {
      return <p>Oops, some error</p>;
    }

    if (isFetching) {
      return <p>Loading</p>;
    } else {
      return photos.map(entry => (
        <div key={entry.id}>
          <p>
            <img src={entry[0].url} alt="" />
          </p>
        </div>
      ));
    }
  };

  render() {
    const { year, photos } = this.props;
    return (
      <div className="ib page">
        <p>{this.renderButtons()}</p>
        <h3>
          {year} year [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
};
