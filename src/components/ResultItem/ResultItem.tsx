import { useState } from 'react'
import { DataType } from '../../App'
import * as S from './ResultItem.styles'

export const ResultItem = ({ dataItem }: { dataItem: DataType }) => {
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
        <S.InputLabel htmlFor="checkbox"></S.InputLabel>
      </S.ResultsItemCol1>
      <S.ResultsItemCol2>{dataItem.name}</S.ResultsItemCol2>
      <S.ResultsItemCol3>{dataItem.IMEI}</S.ResultsItemCol3>
      <S.ResultsItemCol4>{dataItem.value}</S.ResultsItemCol4>
    </S.ResultsItem>
  )
}
