import React from 'react';
import Star from 'elements/Star';
import Button from 'elements/Button';

export default function Testimony({ data }) {
  return (
    <section className="container">
      <h5 className="h4 mb-3">Testimony</h5>
      <div className="row align-items-center">
        <div className="col-md-4">
          <figure className="img-wrapper">
            <img src={data.imageUrl} alt={data.name} className="img-cover" />
          </figure>
        </div>
        <div className="col-md-8 align-items-center">
          <h4 className="h3">{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={14}></Star>
          <br></br>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <p className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </p>
          <Button
            className="btn px-5 py-3"
            style={{ marginTop: 40 }}
            hasShadow
            isPrimary
            type="link"
            href={`/testimonial/${data._id}`}
          >
            Read Their Story
          </Button>
        </div>
      </div>
    </section>
  );
}
