import React from 'react'
import css from './inputs.module.css';

export default function Inputs({capital, onCapital, juros, onJuros, tempo, onTempo}) {

  const handleCapital = (event) => {
    onCapital(event.target.value);
  }
  const handleJuros = (event) => {
    onJuros(event.target.value);
  }
  const handleTempo = (event) => {
    onTempo(event.target.value);
  }

  return (
    <div className={css.inputsContainer}>
      <div className={css.singleInput}>
        <label htmlFor="inputCapital">Capital</label>
        <input type="number" id="inputCapital" min="0" step="100" value={capital} onChange={handleCapital}/>
      </div>
      <div className={css.singleInput}>
        <label htmlFor="inputJuros">Taxa de juros mensal</label>
        <input type="number" id="inputJuros" step="0.01" value={juros} onChange={handleJuros}/>
      </div>
      <div className={css.singleInput}>
        <label htmlFor="inputTempo">Periodo (meses)</label>
        <input type="number" id="inputTempo" min="1" step="1" value={tempo} onChange={handleTempo}/>
      </div>
    </div>
  )
}
