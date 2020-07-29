import React, { Fragment, useState, useEffect } from 'react';
import Inputs from './components/Inputs';
import Parcelas from './components/Parcelas';
import css from './app.module.css';
import { CSSTransition } from 'react-transition-group';
import './appanimation.css';

export default function App() {

  const [capital, setCapital] = useState(0.0);
  const [juros, setJuros] = useState(0.0);
  const [tempo, setTempo] = useState(1);
  const [showParcelas, setShowParcelas] = useState(false);

  const handleCapitalChange = (capitalChange) => {
    setCapital(capitalChange);
  }
  const handleJuroslChange = (jurosChange) => {
    setJuros(jurosChange);
  }
  const handleTempoChange = (tempoChange) => {
    setTempo(tempoChange);
  }

  useEffect(() => {
    if (capital > 0.0 && (juros < 0 || juros > 0)) {
      setShowParcelas(true);
    } else {
      setShowParcelas(false);
    }
  }, [capital, juros]);

  return (
    <Fragment>
      <div className='container'>
        <h1 className={css.title}>Juros compostos</h1>
          <Inputs
            capital={capital}
            onCapital={handleCapitalChange}
            juros={juros}
            onJuros={handleJuroslChange}
            tempo={tempo}
            onTempo={handleTempoChange}
          />
        {showParcelas && (
          <CSSTransition
              in={true}
              timeout={300}
              classNames="parcelas"
              unmountOnExit
            >
          <Parcelas
            capital={capital}
            juros={juros}
            tempo={tempo}
          />
          </CSSTransition>
        )}
      </div>
    </Fragment>
  );
}