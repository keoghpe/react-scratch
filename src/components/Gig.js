import React, {Component} from 'react';

const Gig = ({link, date, location}) => (
  <tr>
    <a href={link} target="_blank">
      <td className="gigDate">{date}</td>
      <td className="gigLocation">{location}</td>
    </a>
  </tr>
);

export default Gig;
