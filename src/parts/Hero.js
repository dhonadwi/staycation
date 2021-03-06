import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import ImageHero from 'assets/images/img-hero.jpg';
import IconCities from 'assets/images/icons/icon-cities.png';
import IconTraveller from 'assets/images/icons/icon-traveller.png';
import IconTreasure from 'assets/images/icons/icon-treasure.png';
import Button from 'elements/Button';
import numberFormat from 'utils/formatNumbering';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <section className="container pt-4">
      <Zoom cascade>
        <div className="row align-item-center">
          <div className="col-sm-12 col-md-6 mb-5 mx-auto">
            {/* style={{ width: 530 }} */}
            <h1 className="h2 font-weight-bold line-height-1 mb-3">
              Forget Busy Work,
              <br />
              Start Next Vacation
            </h1>
            <p className="mb-5 font-weight-light text-gray-500 w-75">
              We provide what you need to enjoy your holiday with familiy. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me
            </Button>
            <div className="row mt-5">
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconTraveller}
                  alt={`${props.data.travelers} Travellers`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    Travellers
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          {/* </Zoom> */}
          {/* <Zoom delay={1500}> */}
          <div className="col-sm-12 col-md-6 mt-3 mx-auto">
            <img
              src={ImageHero}
              alt="Room with couches"
              style={{ width: '100%' }}
              // className="img-fluid mb-2"
              // style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
            />
            {/* <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid"
                style={{ margin: '0 -15px -15px 0' }}
              /> */}
          </div>
        </div>
      </Zoom>
    </section>
  );
}
