import React from 'react';
import moment from 'moment';

const GigList = () => {
    const gigListData = [
        {
            date: new Date(2021, 4, 28),
            venue: 'Olympia Theatre',
            location: 'Dublin',
            link: 'https://www.ticketmaster.ie/venueartist/198239/5263810',
            onSale: true
        },
        {
            date: new Date(2021, 4, 29),
            venue: 'Cyprus Avenue',
            location: 'Cork',
            link: 'https://www.eventbrite.ie/e/the-scratch-tickets-86209634337',
            onSale: true
        },
        {
            date: new Date(2021, 4, 20),
            venue: 'Roisin Dubh',
            location: 'Galway',
            link: 'https://www.ticketmaster.ie/the-scratch-galway-20-05-2021/event/1800582DA80653BB',
            onSale: true
        },
        {
            date: new Date(2021, 4, 23),
            venue: 'The Limelight 2',
            location: 'Belfast',
            link: 'https://www.ticketmaster.ie/the-scratch-belfast-19-12-2020/event/3800578DD2A81F42',
            onSale: true
        },
        {
            date: new Date(2021, 4, 22),
            venue: 'Dolans',
            location: 'Limerick',
            link: 'https://dolans.yapsody.com/event/index/505651/the-scratch',
            onSale: true
        },
        {
            date: new Date(2021, 4, 21),
            venue: 'Mike the Pies',
            location: 'Listowel',
            link: 'https://mikethepies.com/the-scratch/',
            onSale: true
        },
    ];

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
