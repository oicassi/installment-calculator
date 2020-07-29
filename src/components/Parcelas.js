import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import Parcela from './Parcela';
import css from './parcelas.module.css';
import './animation.css';

export default function Parcelas({ capital, juros, tempo }) {

  const [allParcelas, setAllParcelas] = useState([]);
  const classBase = (juros > 0 ? 'positivo' : 'negativo');
  const calculaParcelas = () => {
    let tempParcelas = [];
    let acc = parseFloat(capital);
    let jurosAcc = 0.0;
    let mensalAcc = 0.0;
    let juroCalc = parseFloat(juros) / 100;

    for (let i = 0; i < parseInt(tempo); i++) {
      let valorMensal = acc * juroCalc;
      let jurosParcial = (valorMensal / capital) * 100.0;

      acc += valorMensal;
      jurosAcc += jurosParcial;
      mensalAcc += valorMensal;

      tempParcelas.push({
        mes: i + 1,
        acc,
        mensalAcc,
        jurosAcc,
      })
    }
    setAllParcelas(tempParcelas);
  }

  useEffect(() => {
    calculaParcelas();
  }, [capital, juros, tempo])

  return (
    <div className={css.parcelasContainer}>
      {
        allParcelas.map(parcela => {
          const { mes, acc, mensalAcc, jurosAcc } = parcela
          return (
            <CSSTransition
              in={true}
              timeout={300}
              classNames="fade"
              unmountOnExit
              key={mes}
            >
              <Parcela key={mes} mes={mes} acc={acc} mensal={mensalAcc} juro={jurosAcc} classBase={classBase} />
            </CSSTransition>
          )
        })
      }
    </div>
  )
}
