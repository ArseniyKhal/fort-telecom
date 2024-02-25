import { ChangeEvent, MouseEvent, useState } from 'react'
import { DataType } from '../../App'
import * as S from './ResultItem.styles'

export const ResultItem = ({ dataItem }: { dataItem: DataType }) => {
  const [checked, setChecked] = useState(false)

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
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setChecked(!checked)
      }}
    >
      <S.ResultsItemCol1>
        <S.InputСheckbox
          type="checkbox"
          id={dataItem.id}
          checked={checked}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.stopPropagation()
            setChecked(!checked)
          }}
        ></S.InputСheckbox>
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
