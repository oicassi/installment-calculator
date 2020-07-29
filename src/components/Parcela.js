import React from 'react'
import { formatNumber } from '../helpers/FormatHelper'
import css from './parcelas.module.css';

export default function Parcela({ mes, acc, mensal, juro, classBase }) {

  const valorClass = (juro > 0 ? 'positivo' : 'negativo');
  return (
    <div className={css.singleParcela}>
      <div>
        <span style={styles.destaque}>{mes}</span>
      </div>
      <div className={css.parcelaInfo}>
        <span style={styles.destaque} className={css[valorClass]}>{formatNumber(acc)}</span>
        <span style={styles.destaque} className={css[valorClass]}>{formatNumber(mensal)}</span>
        <span className={css[`${valorClass}Juro`]}>{juro.toFixed(2) + '%'}</span>
      </div>
    </div>
  )
}

const styles = {
  destaque: {
    fontWeight: 'bold',
  }
}
