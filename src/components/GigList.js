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
    },
    {
      date: '11 Apr 2020',
      venue: 'Limelight 2',
      location: 'Belfast',
      link: 'https://www.ticketmaster.ie/the-scratch-belfast-11-04-2020/event/3800578DD2A81F42?fbclid=IwAR2miTCwQycwSSnkX0wuDzmHNFcH6oK85k1PkKhmLB3Po09iRnFNl2Z8-gI',
      onSale: true
    },
    {
      date: '17 Apr 2020',
      venue: 'Cyprus Avenue',
      location: 'Cork',
      link: 'https://www.eventbrite.ie/e/the-scratch-tickets-86209634337?fbclid=IwAR3yc9MctYKhy6g3d6I1T4KlYbA2jguUdZ0DXoPqN03oklz18fvEs5IDv9M',
      onSale: true
    },
    {
      date: '24 Apr 2020',
      venue: 'Roisin Dubh',
      location: 'Galway',
      link: 'https://www.roisindubh.net/gig-details.html?listingID=10500&fbclid=IwAR2K9rXrvM9A0kDimWef8L7HoeDklWOBM9g70zhljY1oVTVRzSSH7IFVg4g',
      onSale: true
    },
    {
      date: '25 Apr 2020',
      venue: 'Dolans',
      location: 'Limerick',
      link: 'https://dolans.yapsody.com/event/index/505651/the-scratch?fbclid=IwAR29N57saKpDKtnoxz7HWL6zlamfce6KiEwX-XqrLpRaRW4sYBD_msChRGc',
      onSale: true
    },
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
