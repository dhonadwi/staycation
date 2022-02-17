import React from 'react';
import Button from 'elements/Button';
import BrandIcon from './IconText';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <BrandIcon />
            <p className="text-gray-500">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-md-2 mb-3">
            <h6>For Beginners</h6>
            <ul className="text-gray-500 list-group">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h6>Explore Us</h6>
            <ul className="list-group text-gray-500">
              <li className="list-group-item">
                <Button type="link" href="/carrers">
                  Our Carrers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h6>Contact Us</h6>
            <ul className="list-group text-gray-500">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.com"
                >
                  support@staycation.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6222860123456">
                  022-8601-23456
                </Button>
              </li>
              <li className="list-group-item">
                <span>Cimahi, Jawa Barat</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center copyrights">
          Copyright 2021 * All rights reserved * Staycation
        </div>
      </div>
    </footer>
  );
}
