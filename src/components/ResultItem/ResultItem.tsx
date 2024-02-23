import { useState } from 'react'
import { DataType } from '../../App'
import * as S from './ResultItem.styles'

export const ResultItem = ({ dataItem }: { dataItem: DataType }) => {
  let colorTextValue: string
  if (dataItem.value === undefined) {
    colorTextValue = 'white'
  } else if (dataItem.value) {
    colorTextValue = 'red'
  } else {
    colorTextValue = 'green'
  }
  return (
    <S.ResultsItem
    // onClick={() => handleClickUser()}
    // style={{
    //   height: `${isVisibleUser ? '200px' : ''}`,
    //   gridTemplateColumns: `${isVisibleUser ? '200px 1fr ' : ''}`,
    // }}
    >
      <S.ResultsItemCol1>
        <S.InputСheckbox type="checkbox" id={dataItem.id}></S.InputСheckbox>
        <S.InputLabel htmlFor={dataItem.id}></S.InputLabel>
      </S.ResultsItemCol1>
      <S.ResultsItemCol2>{dataItem.name}</S.ResultsItemCol2>
      <S.ResultsItemCol3>{dataItem.IMEI}</S.ResultsItemCol3>
      <S.ResultsItemCol4
        style={{
          color: `${colorTextValue}`,
        }}
      >
        {dataItem.value === undefined ? '-' : dataItem.value}
      </S.ResultsItemCol4>
    </S.ResultsItem>
  )
}
