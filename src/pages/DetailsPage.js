import React, { Component } from 'react';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';

import ItemDetails from 'json/itemDetails.json';

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 pr-5">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-lg-6 col-sm-12">Booking Form</div>
          </div>
        </section>
      </>
    );
  }
}
