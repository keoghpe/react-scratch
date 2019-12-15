import React from 'react';

const GigList = () => {
  const gigListData = [
    {
      date: '25 Jan 2020',
      venue: 'De Barra\'s',
      location: 'Clonakilty',
      link: 'https://www.eventbrite.ie/e/the-scratch-live-in-de-barras-rescheduled-tickets-61109974579',
      onSale: true
    },
    {date: '1 Feb 2020', venue: 'McHugh\'s Bar', location: 'Carrick-on-Shannon', link: '#'},
    {
      date: '10 Apr 2020',
      venue: 'The Academy',
      location: 'Dublin',
      link: 'https://www.ticketmaster.ie/the-scratch-dublin-10-04-2020/event/1800578DCDFDF5AA',
      onSale: true
    }
  ]

  return gigListData.length ? gigListData.map((props) => <Gig {...props}/>) : <h2>...Loading</h2>
}

const Gig = ({link, date, venue, location, onSale}) => (
  <tr>
    <td className="gigDate">
      <a href={link} target="_blank">
        {date}
      </a>
    </td>
    <td className="gigVenue">
      <a href={link} target="_blank">
        {venue}
      </a>
    </td>
    <td className="gigLocation">
      <a href={link} target="_blank">
        {location}
      </a>
    </td>
    <td className="buyNow">
      {onSale &&
      <a href={link} target="_blank">
        <td>Buy Tickets</td>
      </a>
      }</td>
  </tr>
);

export default GigList;
