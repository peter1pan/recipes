import React from 'react'
import './Details.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetailsCard from '../../components/DetailsCard';

function Details() {
  const { id } = useParams();
  const url = "http://localhost:3000/tarifler/" + id;

  const { data: tarif, isLoading, error } = useFetch(url)


  return (
    <div className='row mt-3'>
      {isLoading && <div className='spinner-border text-primary' role='status'></div>}
      {error && <div className='alert alert-danger'>{error} </div>}

      {
        tarif && (
          <>
            <DetailsCard key={tarif.id} tarif={tarif} />
          </>
        )
      }
    </div>
  )
}

export default Details