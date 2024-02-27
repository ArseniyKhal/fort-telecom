import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { DataType } from '../MyComponent/MyComponent'
import { SettingsColType, SettingsType } from '../../App'
import { colimnConstructor } from '../MyComponent/MyComponent'
import * as S from './ResultItem.styles'

interface ResultItemProps {
  dataItem: DataType
  checkedCount: number[]
  setCheckedCount: React.Dispatch<React.SetStateAction<number[]>>
  settings: SettingsType
}

// компонент строки таблицы
export const ResultItem = ({
  dataItem,
  checkedCount,
  setCheckedCount,
  settings,
}: ResultItemProps) => {
  const [checked, setChecked] = useState(false)

  // загрузка из sessionStorage отметки checked
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

  // выделение строки и сохранение в sessionStorage
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

  // колонки таблицы
  //   const ItemColtMap = settings.columns.map((col: SettingsColType) => {
  //     const type = `{dataItem.${col.type}}`
  //     return <S.ResultsColumn key={`${col.name}_column`}>{type}</S.ResultsColumn>
  //   })

  // покраска текста
  let colorTextValue: string
  if (dataItem.packs === undefined) {
    colorTextValue = 'white'
  } else if (dataItem.packs) {
    colorTextValue = 'red'
  } else {
    colorTextValue = 'green'
  }

  return (
    <S.ResultsItem
      onClick={() => handleCheck()}
      style={{ gridTemplateColumns: colimnConstructor(settings) }}
    >
      {settings.inputs && (
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
      )}
      {/* {ItemColtMap} */}
      <S.ResultsColumn>{dataItem.name}</S.ResultsColumn>
      <S.ResultsColumn>{dataItem.IMEI}</S.ResultsColumn>
      <S.ResultsColumn
        style={{
          color: `${colorTextValue}`,
        }}
      >
        {dataItem.packs === undefined ? '-' : dataItem.packs}
      </S.ResultsColumn>
    </S.ResultsItem>
  )
}
