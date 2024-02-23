import { useState } from 'react'

import * as S from './ResultItem.styles'

export const ResultItem = () => {
  return (
    <S.ResultsItem
    // onClick={() => handleClickUser()}
    // style={{
    //   height: `${isVisibleUser ? '200px' : ''}`,
    //   gridTemplateColumns: `${isVisibleUser ? '200px 1fr ' : ''}`,
    // }}
    >
      <S.ResultsItemCol1>
        <S.InputСheckbox type="checkbox" id="checkbox"></S.InputСheckbox>
        <label htmlFor="checkbox"></label>
      </S.ResultsItemCol1>
      <S.ResultsItemCol2>КАМАЗ топливозаправочный</S.ResultsItemCol2>
      <S.ResultsItemCol3>000129078657976</S.ResultsItemCol3>
      <S.ResultsItemCol4>509</S.ResultsItemCol4>
    </S.ResultsItem>
  )
}
