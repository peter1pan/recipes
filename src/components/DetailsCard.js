import React from 'react'

function DetailsCard({ tarif }) {
    return (
        <>
            <div className="col-4">
                <img src={`/img/${tarif.resim}`} alt={tarif.baslik} className='img-fluid rounded' />
            </div>
            <div className="col-8">
                <h5>{tarif.baslik}</h5>
                <p>{tarif.aciklama}</p>
                <ul>
                    {
                        tarif.malzemeler.map(malzeme => (
                            <li>{malzeme}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-12 mt-3">
                <p>{tarif.hazirlanisi}</p>
                <a href={tarif.url} className='btn btn-outline-primary'>Tarifi İncele</a>
            </div>
        </>
    )
}

export default DetailsCard