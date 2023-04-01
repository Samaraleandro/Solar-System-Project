import React from 'react';
import PropTypes from 'prop-types';
import calendar from '../images/Vector.png';
import localizacao from '../images/localizacao.png';
import bandeira from '../images/bandeira.png';
import linha from '../images/Line1.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="eachMission">
        <div id="titleMission">
          <h3 data-testid="mission-name">{ name }</h3>
          <img id="imglinha" src={ linha } alt="linha" />
        </div>
        <div className="dadosMission">
          <div className="year">
            <img id="imgCalendar" src={ calendar } alt="calendario" />
            <p data-testid="mission-year">{ year }</p>
          </div>
          <div className="location">
            <img id="imgLocalizacao" src={ localizacao } alt="localizacao" />
            <p data-testid="mission-country">{ country }</p>
          </div>
          <div className="bandeira">
            <img id="imgBandeira" src={ bandeira } alt="bandeira" />
            <p data-testid="mission-destination">{ destination }</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
