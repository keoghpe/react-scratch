import React from 'react';
import moment from 'moment';

const GigList = () => {
    const gigListData = [
        {
            date: new Date(2020, 0, 25),
            venue: 'De Barra\'s',
            location: 'Clonakilty',
            link: 'https://www.eventbrite.ie/e/the-scratch-live-in-de-barras-rescheduled-tickets-61109974579',
            onSale: true
        },
        {
            date: new Date(2020, 11, 18),
            venue: 'The Academy',
            location: 'Dublin',
            link: 'https://www.ticketmaster.ie/the-scratch-dublin-10-04-2020/event/1800578DCDFDF5AA',
            onSale: true
        },
        {
            date: new Date(2020, 11, 19),
            venue: 'Limelight 2',
            location: 'Belfast',
            link: 'https://www.ticketmaster.ie/the-scratch-belfast-11-04-2020/event/3800578DD2A81F42?fbclid=IwAR2miTCwQycwSSnkX0wuDzmHNFcH6oK85k1PkKhmLB3Po09iRnFNl2Z8-gI',
            onSale: true
        },
        {
            date: new Date(2020, 11, 4),
            venue: 'Cyprus Avenue',
            location: 'Cork',
            link: 'https://www.eventbrite.ie/e/the-scratch-tickets-86209634337?fbclid=IwAR3yc9MctYKhy6g3d6I1T4KlYbA2jguUdZ0DXoPqN03oklz18fvEs5IDv9M',
            onSale: true
        },
        {
            date: new Date(2020, 11, 10),
            venue: 'Roisin Dubh',
            location: 'Galway',
            link: 'https://www.roisindubh.net/gig-details.html?listingID=10500&fbclid=IwAR2K9rXrvM9A0kDimWef8L7HoeDklWOBM9g70zhljY1oVTVRzSSH7IFVg4g',
            onSale: true
        },
        {
            date: new Date(2020, 11, 12),
            venue: 'Dolans',
            location: 'Limerick',
            link: 'https://dolans.yapsody.com/event/index/505651/the-scratch?fbclid=IwAR29N57saKpDKtnoxz7HWL6zlamfce6KiEwX-XqrLpRaRW4sYBD_msChRGc',
            onSale: true
        }]

    return gigListData.length ? gigListData
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .filter(({date}) => date >= new Date())
        .map((props) => <Gig {...props}/>) : <h2>...Loading</h2>
}

const Gig = ({link, date, venue, location, onSale}) => (
    <tr className={onSale ? 'hasLink' : ''} onClick={() => {
        window.open(link, '_blank')
    }}>
        <td className="gigDate">
            {moment(date).format('DD-MMM-YYYY')}
        </td>
        <td className="gigVenue">
            {venue}
        </td>
        <td className="gigLocation">
            {location}
        </td>
        <td className="buyNow">
            {onSale &&
            <span>Buy Tickets</span>
            }</td>
    </tr>
);

export default GigList;
