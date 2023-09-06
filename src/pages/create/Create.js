import React, { useState } from 'react'
import './Create.css';

function Create() {
  const [baslik, setBaslik] = useState("")
  const [aciklama, setAciklama] = useState("")
  const [hazirlanis, setHazirlanis] = useState("")
  const [resim, setResim] = useState("")

  const [malzeme, setMalzeme] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(baslik, aciklama, hazirlanis, resim)
  }

  const handleAddMalzeme = (e) => {
    const item = malzeme.trim()

    if (item && !malzemeler.includes(item)) {
      setMalzemeler(prevItems => [...prevItems, item])
    }

  }
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h2>Yeni tarif ekle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="" className='from-label'>Baslik</label>
            <input type="text" name='baslik' id='baslik' className='form-control' onChange={(e) => setBaslik(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="" className='from-label'>Aciklama</label>
            <input type="text" name='Aciklama' id='Aciklama' className='form-control' onChange={(e) => setAciklama(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="" className='from-label'>hazirlanisi</label>
            <textarea type="text" name='hazirlanisi' id='hazirlanisi' className='form-control' onChange={(e) => setHazirlanis(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="malzemeler" className='from-label'>Malzemeler <ul>{malzemeler.map(item => (
              <li key={item}>{item} </li>
            ))}</ul></label>
            <div className="input-group">
              <input type="text" name='malzemeler' className='form-control' onChange={(e) => setMalzeme(e.target.value)} />
              <button className='btn btn-secondary' type="button" onClick={handleAddMalzeme}>+</button>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="" className='from-label'>resim</label>
            <input type="text" name='resim' id='resim' className='form-control' onChange={(e) => setResim(e.target.value)} />
          </div>
          <button type='submit' className='btn btn-primary'>Kaydet</button>

        </form>
      </div>
    </div>
  )
}

export default Create