import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { DataType } from '../../App'
import * as S from './ResultItem.styles'

interface ResultItemProps {
  dataItem: DataType
  checkedCount: number[]
  setCheckedCount: React.Dispatch<React.SetStateAction<number[]>>
}

export const ResultItem = ({
  dataItem,
  checkedCount,
  setCheckedCount,
}: ResultItemProps) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('checkedArr') !== null) {
      const checkedArr = JSON.parse(
        sessionStorage.getItem('checkedArr') || '[]',
      )
      if (checkedArr.includes(dataItem.id)) {
        setChecked(true)
      }
    }
  }, [])

  // выделение строки
  const handleCheck = () => {
    setChecked(!checked)
    if (sessionStorage.getItem('checkedArr') === null) {
      sessionStorage.setItem('checkedArr', JSON.stringify([dataItem.id]))
    } else {
      const checkedArr = JSON.parse(
        sessionStorage.getItem('checkedArr') || '[]',
      )

      if (checkedArr.includes(dataItem.id)) {
        const setLS = JSON.stringify(
          checkedArr.filter((el: number) => el !== dataItem.id),
        )
        sessionStorage.setItem('checkedArr', setLS)
      } else {
        const setLS = JSON.stringify([...checkedArr, dataItem.id])
        sessionStorage.setItem('checkedArr', setLS)
      }

      if (!checkedCount.includes(dataItem.id)) {
        setCheckedCount([...checkedCount, dataItem.id])
      } else {
        setCheckedCount(checkedCount.filter((el) => el !== dataItem.id))
      }
    }
  }

  let colorTextValue: string
  if (dataItem.packs === '-') {
    colorTextValue = 'white'
  } else if (dataItem.packs) {
    colorTextValue = 'red'
  } else {
    colorTextValue = 'green'
  }

  return (
    <S.ResultsItem onClick={() => handleCheck()}>
      <S.ResultsItemCol1>
        <S.InputСheckbox
          type="checkbox"
          checked={checked}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.stopPropagation()
          }}
          onClick={(e: MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
        ></S.InputСheckbox>
        <S.InputLabel />
      </S.ResultsItemCol1>
      <S.ResultsItemCol2>{dataItem.name}</S.ResultsItemCol2>
      <S.ResultsItemCol3>{dataItem.IMEI}</S.ResultsItemCol3>
      <S.ResultsItemCol4
        style={{
          color: `${colorTextValue}`,
        }}
      >
        {dataItem.packs}
      </S.ResultsItemCol4>
    </S.ResultsItem>
  )
}
