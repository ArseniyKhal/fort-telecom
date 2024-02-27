import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setList } from '../../store/slices/listSlice'
import { ResultItem } from '../ResultItem/ResultItem'
import { ResultsTitleCol } from '../TitleColumn/TitleColumn'
import { SettingsType, SettingsColType } from '../../App'
import * as S from './MyComponent.styles'

const title1Col = 'Объект'
const title2Col = 'IMEI для регистрации'
const title3Col = 'Пакетов не передано'

export const colimnConstructor = (set: SettingsType) => {
  let colStr = ''
  for (let i = 0; i < set.columns.length; ++i) colStr += '1fr '
  return `${set.inputs ? '40px ' : ''}${colStr}`
}

export interface DataType {
  id: number
  name: string
  IMEI: string
  packs: number | string | undefined
}

export const MyComponent = ({
  fileData,
  set,
}: {
  fileData: DataType[]
  set: SettingsType
}) => {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')
  const [checkedCount, setCheckedCount] = useState<number[]>([])
  const [sort, setSort] = useState('')
  const { dataList } = useSelector((state: any) => state.dataList)

  // фильтрация
  useEffect(() => {
    dispatch(
      setList(
        fileData.filter(
          (el: DataType) =>
            el.name.toLowerCase().includes(searchText.toLowerCase()) ||
            el.IMEI.toLowerCase().includes(searchText.toLowerCase()),
        ),
      ),
    )
  }, [searchText])

  // шапка таблицы
  const ColumnTitleMap = set.columns.map((col: SettingsColType) => {
    return (
      <ResultsTitleCol
        key={col.name}
        title={col.name}
        sort={sort}
        setSort={setSort}
        sortBy={col.type}
        sorting={col.sorting}
        fileData={fileData}
      />
    )
  })

  // таблица
  const ListMap = dataList.map((el: DataType) => {
    return (
      <ResultItem
        key={el.id}
        dataItem={el}
        checkedCount={checkedCount}
        setCheckedCount={setCheckedCount}
        settings={set}
      ></ResultItem>
    )
  })

  // выделенные строки id в footer-е
  useEffect(() => {
    if (sessionStorage.getItem('checkedArr') !== null) {
      const checkedArr = JSON.parse(
        sessionStorage.getItem('checkedArr') || '[]',
      )
      setCheckedCount(checkedArr)
    }
  }, [])

  // сброс фильтра при смене сортировки
  useEffect(() => {
    if (sort === '') {
      setSearchText('')
    }
  }, [sort])

  // подсчет пакетов с отставанием
  const slowPackets = dataList?.filter(
    (el: DataType) => el.packs !== 0 && el.packs !== undefined,
  )

  return (
    <S.MyComponent>
      {set.search && (
        <S.SearchSection>
          <S.SearchBG>
            <S.SearchSvg viewBox="0 0 32 32">
              <path d="M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646z" />
            </S.SearchSvg>
            <S.SearchText
              type="text"
              placeholder="Поиск"
              value={searchText}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSearchText(e.target.value)
              }}
            />
          </S.SearchBG>
        </S.SearchSection>
      )}

      <S.HeaderTable style={{ gridTemplateColumns: colimnConstructor(set) }}>
        {set.inputs && <S.ResultsTitleCol1 />}
        {ColumnTitleMap}
      </S.HeaderTable>

      <S.BodyTable>{ListMap}</S.BodyTable>
      <S.FooterTable>
        <S.FooterText>
          Объектов: <span>{dataList.length}</span>
        </S.FooterText>
        <S.FooterText>
          Из них с сильным отставанием: <span>{slowPackets?.length}</span>
        </S.FooterText>
        <S.FooterText>
          Показано: <span>{dataList.length}</span>
        </S.FooterText>
        {checkedCount.length > 0 && (
          <S.FooterText>
            Выделено: <span>{checkedCount.length}</span>
          </S.FooterText>
        )}
      </S.FooterTable>
    </S.MyComponent>
  )
}
