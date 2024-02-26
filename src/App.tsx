import { ChangeEvent, useEffect, useState } from 'react'
import { ResultItem } from './components/ResultItem/ResultItem'
import { fileData } from './data'
import { useDispatch, useSelector } from 'react-redux'
import { setList } from './store/slices/listSlice'
import { ResultsTitleCol } from './components/TitleColumn/TitleColumn'
import * as S from './App.styles'

const title1Col = 'Объект'
const title2Col = 'IMEI для регистрации'
const title3Col = 'Пакетов не передано'
export interface DataType {
  id: number
  name: string
  IMEI: string
  packs: number | string | undefined
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

  // выделенные строки id в footer-е
  useEffect(() => {
    if (sessionStorage.getItem('checkedArr') !== null) {
      const checkedArr = JSON.parse(
        sessionStorage.getItem('checkedArr') || '[]',
      )
      setCheckedCount(checkedArr)
    }
  }, [])

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
