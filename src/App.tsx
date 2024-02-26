import { ChangeEvent, useEffect, useState } from 'react'
import { ResultItem } from './components/ResultItem/ResultItem'
import { fileData } from './data'
import { useDispatch, useSelector } from 'react-redux'
import { setList } from './store/slices/listSlice'
import * as S from './App.styles'

const title1Col = 'Объект'
const title2Col = 'IMEI для регистрации'
const title3Col = 'Пакетов не передано'
export interface DataType {
  id: number
  name: string
  IMEI: string
  packs: number | string
}

export const App = () => {
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

  // подсчет пакетов с отставанием
  const slowPackets = dataList?.filter(
    (el: DataType) => el.packs !== 0 && el.packs !== '-',
  )

  const ListMap = dataList.map((el: DataType) => {
    return (
      <ResultItem
        key={el.id}
        dataItem={el}
        checkedCount={checkedCount}
        setCheckedCount={setCheckedCount}
      ></ResultItem>
    )
  })

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.MyComponent>
            <S.SearchSection>
              <S.SearchBG>
                <S.SearchSvg viewBox="0 0 32 32">
                  <path d="  M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646z" />
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
            <S.HeaderTable>
              <S.ResultsTitleCol1></S.ResultsTitleCol1>
              <ResultsTitleCol
                title={title1Col}
                sort={sort}
                setSort={setSort}
                sortBy="name"
              />
              <ResultsTitleCol
                title={title2Col}
                sort={sort}
                setSort={setSort}
                sortBy="IMEI"
              />
              <ResultsTitleCol
                title={title3Col}
                sort={sort}
                setSort={setSort}
                sortBy="packs"
              />
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
        </S.Container>
      </S.Wrapper>
    </>
  )
}

// клик по фильтру
interface BoxProps {
  title: string
  sort: string
  setSort: React.Dispatch<React.SetStateAction<string>>
  sortBy: string
}

const ResultsTitleCol = ({ title, sort, setSort, sortBy }: BoxProps) => {
  const dispatch = useDispatch()
  const { dataList } = useSelector((state: any) => state.dataList)

  const handleClick = () => {
    const arrayForSort = [...dataList]
    if ((sort !== `up ${title}` && sort !== `down ${title}`) || sort === ``) {
      setSort(`up ${title}`)
      dispatch(
        setList(
          arrayForSort.sort(function (a, b) {
            return a[sortBy] > b[sortBy] ? 1 : -1
          }),
        ),
      )
    } else if (sort === `up ${title}`) {
      setSort(`down ${title}`)
      dispatch(
        setList(
          arrayForSort.sort(function (a, b) {
            return a[sortBy] < b[sortBy] ? 1 : -1
          }),
        ),
      )
    } else {
      setSort('')
      dispatch(setList(fileData))
    }
  }

  // скрывает стрелочку сортировки
  let visibleArrow = false
  if (sort === `up ${title}` || sort === `down ${title}`) {
    visibleArrow = true
  }
  return (
    <S.ResultsTitleCol2
      onClick={() => {
        handleClick()
      }}
    >
      <S.ColTitle>{title}</S.ColTitle>
      {visibleArrow && (
        <S.ColSort
          style={{
            transform:
              sort === `up ${title}` ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        >
          ↑
        </S.ColSort>
      )}
    </S.ResultsTitleCol2>
  )
}
