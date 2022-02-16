import React from 'react';
import image1 from 'assets/images/image-mostpicked-1.jpg';
import image2 from 'assets/images/image-mostpicked-2.jpg';
import image3 from 'assets/images/image-mostpicked-3.jpg';
import image4 from 'assets/images/image-mostpicked-4.jpg';
import image5 from 'assets/images/image-mostpicked-5.jpg';

export default function MostPicked() {
  return (
    <div className="container mt-3">
      <h3>Most Picked</h3>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="well">
              <img src={image1} style={{ width: '100%' }} />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
          <div class="col-md-12 col-lg-8">
            <div class="row">
              <div class="col-md-6  mb-3">
                <div class="well">
                  <img src={image2} style={{ width: '100%' }} />
                </div>
              </div>
              <div class="col-md-6  mb-3">
                <div class="well">
                  <img src={image3} style={{ width: '100%' }} />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6  mb-3">
                <div class="well">
                  <img src={image4} style={{ width: '100%' }} />
                </div>
              </div>
              <div class="col-md-6  mb-3">
                <div class="well">
                  <img src={image5} style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
