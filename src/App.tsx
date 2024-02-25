import { ResultItem } from './components/ResultItem/ResultItem'
import { fileData } from './data'
import { ChangeEvent, useState } from 'react'
import * as S from './App.styles'

export interface DataType {
  id: number
  name: string
  IMEI: string
  value: number | undefined | string
}

function App() {
  const [searchText, setSearchText] = useState('')
  let List = fileData

  // фильтрация
  if (searchText) {
    List = fileData.filter(
      (el) =>
        el.name.toLowerCase().includes(searchText.toLowerCase()) ||
        el.IMEI.toLowerCase().includes(searchText.toLowerCase()),
    )
  }

  // подсчет пакетов с отставанием
  const slowPackets = List.filter(
    (el: DataType) => el.value !== 0 && el.value !== undefined,
  )

  const ListMap = List.map((el: DataType) => {
    return <ResultItem key={el.id} dataItem={el}></ResultItem>
  })

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.MyComponent>
            <S.SearchSection>
              <S.SearchBG>
                <S.FilterSvg viewBox="0 0 32 32">
                  <path d="  M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646z" />
                </S.FilterSvg>
                <S.SearchText
                  type="text"
                  placeholder="Фильтрация"
                  value={searchText}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setSearchText(e.target.value)
                  }}
                />
              </S.SearchBG>
            </S.SearchSection>
            <S.HeaderTable>
              <S.ResultsTitleCol1></S.ResultsTitleCol1>
              <S.ResultsTitleCol2>Объект</S.ResultsTitleCol2>
              <S.ResultsTitleCol3>IMEI для регистрации</S.ResultsTitleCol3>
              <S.ResultsTitleCol4>Пакетов не передано</S.ResultsTitleCol4>
            </S.HeaderTable>
            <S.BodyTable>{ListMap}</S.BodyTable>
            <S.FooterTable>
              <S.FooterText>
                Объектов: <span>{List.length}</span>
              </S.FooterText>
              <S.FooterText>
                Из них с сильным отставанием: <span>{slowPackets.length}</span>
              </S.FooterText>
              <S.FooterText>
                Показано: <span>{List.length}</span>
              </S.FooterText>
            </S.FooterTable>
          </S.MyComponent>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App
