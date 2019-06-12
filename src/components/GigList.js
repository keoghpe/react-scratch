import React, {useState, useEffect} from 'react';

const url = 'https://api.thescratch.ie/';
const request = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

const GigList = () => {
  const [gigListData, setGigListData] = useState([]);

  useEffect(() => {
    if (!gigListData.length) {
      (async () => {
        let response = await fetch(url, request);
        let json = await response.json();
        setGigListData(json.Items)
      })();
    }
  });

  return gigListData.length ? gigListData.map((props) => <Gig {...props}/>) : <h2>...Loading</h2>
}

const Gig = ({link, date, location}) => (
  <tr>
    <a href={link} target="_blank">
      <td className="gigDate">{date}</td>
      <td className="gigLocation">{location}</td>
    </a>
  </tr>
);

export default GigList;
