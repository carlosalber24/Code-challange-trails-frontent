import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Utils from '../../utils/helpers';
import { ITrailList } from '../../interfaces/home';
import CreationButton from '../../components/CreateBtn';
import SearchBoxes from '../../components/SearchBoxes';
import { getTrailList } from './services';

const columns = [
  {
    dataField: "name",
    text: "Name",
    sort: true
  },
  {
    dataField: "description",
    text: "Description",
    sort: true
  },
  {
    dataField: "latitude",
    text: "Latitude"
  },
  {
    dataField: "longitude",
    text: "Longitude"
  },
  {
    dataField: "difficulty",
    text: "Difficulty"
  },
  {
    dataField: "lengthRate",
    text: "Length Rate"
  },
  {
    dataField: "rating",
    text: "Rating"
  }
];

function Home() {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [defaultLocation, setDefaultLocation] = useState<Array<number>>([0, 0]);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [lengthRate, setLength] = useState<string | null>(null);
  const [rating, setRating] = useState<string | null>(null);
  const [trailsList, setTrailsList] = useState<Array<ITrailList>>([]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setDefaultLocation([ position.coords.latitude, position.coords.longitude ]);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [difficulty, lengthRate, rating, defaultLocation]);

  const fetchData = async () => {
    const params = Utils.serialize({
      defaultLocation,
      difficulty,
      lengthRate,
      rating,
    })
    
    const response = await getTrailList(params);
    if (response.status) {
      setTrailsList(response.data);
    }

    setIsReady(true);
  }

  if (!isReady) {
    return ( 
      <Spinner animation="border" role="status" className="spinner-load">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  if (!trailsList.length) {
    return ( 
      <Container className="spinner-load">
        <CreationButton />
        <SearchBoxes 
          setDifficulty={setDifficulty}
          setLength={setLength}
          setRating={setRating}
        />
        <br />
        <span>No trails data</span>
      </Container>
    )
  }

  return (
    <Container>
      <CreationButton />
      <SearchBoxes 
        setDifficulty={setDifficulty}
        setLength={setLength}
        setRating={setRating}
      />
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={trailsList}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
    </Container>
  );
}

export default Home;
