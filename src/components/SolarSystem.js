import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import linha from '../images/Line1.png';

class SolarSystem extends React.Component {
  render() {
    const planetas = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ planetas } />
        <div className="solarSystem">
          <img id="imglinhaplaneta" src={ linha } alt="linha" />
          {planets
            .map(({ name, image }) => (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />
            ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
