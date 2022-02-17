import React from 'react';
import Button from 'elements/Button';

export default function MostPicked(props) {
  return (
    // <div className="container mt-3">
    //   <h3>Most Picked</h3>
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-md-6 col-lg-4">
    //         <div class="well">
    //           <img src={image1} style={{ width: '100%' }} />
    //           <br />
    //           <br />
    //           <br />
    //           <br />
    //           <br />
    //         </div>
    //         <p>{props.data[0].name}</p>
    //       </div>
    //       <div class="col-md-12 col-lg-8">
    //         <div class="row">
    //           <div class="col-md-6  mb-3">
    //             <div class="well">
    //               <img src={image2} style={{ width: '100%' }} />
    //             </div>
    //           </div>
    //           <div class="col-md-6  mb-3">
    //             <div class="well">
    //               <img src={image3} style={{ width: '100%' }} />
    //             </div>
    //           </div>
    //         </div>
    //         <div class="row">
    //           <div class="col-md-6  mb-3">
    //             <div class="well">
    //               <img src={image4} style={{ width: '100%' }} />
    //             </div>
    //           </div>
    //           <div class="col-md-6  mb-3">
    //             <div class="well">
    //               <img src={image5} style={{ width: '100%' }} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //bootstrap
    // <section className="container mt-3">
    //   <h4 className="mb-3">Most Picked</h4>
    //   <div className="row">
    //     <div className="col-lg-4 col-md-6 mb-3">
    //       <div className="card h-100">
    //         <img src={image1} style={{ width: '100%' }} />
    //       </div>
    //     </div>
    //     <div className="col-lg-8 col-md-12">
    //       <div className="row">
    //         <div className="col-lg-6 col-md-6 mb-3">
    //           <img src={image2} style={{ width: '100%' }} />
    //         </div>
    //         <div className="col-lg-6 col-md-6 mb-3">
    //           <img src={image3} style={{ width: '100%' }} />
    //         </div>
    //       </div>
    //       <div className="row mb-3">
    //         <div className="col-lg-6 col-md-6 mb-3">
    //           <img src={image4} style={{ width: '100%' }} />
    //         </div>
    //         <div className="col-lg-6 col-md-6 mb-3">
    //           <img src={image5} style={{ width: '100%' }} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="container mt-3" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`item column-4${index === 0 ? ' row-2' : ' row-1'}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  $ {item.price}
                  <span className="font-weight-light"> per {item.unit} </span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="streched-link d-block text-white"
                    href={`properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
