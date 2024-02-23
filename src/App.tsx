import { ResultItem } from './components/ResultItem/ResultItem'
import { fileData } from './data'
import * as S from './App.styles'

export interface DataType {
  id: number
  name: string
  IMEI: string
  value: number | undefined | string
}

function App() {
  const lastMap = fileData.map((el: DataType) => {
    return <ResultItem key={el.id} dataItem={el}></ResultItem>
  })

  const slowPackets = fileData.filter(
    (el: DataType) => el.value !== 0 && el.value !== undefined,
  )
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.MyComponent>
            <S.SearchSection>
              <S.SearchBG>
                <S.SearchText
                  type="text"
                  placeholder="Фильтрация 2344"
                  // value={searchText}
                  // onChange={(e) => {
                  //   setSearchText(e.target.value)
                  // }}
                />
              </S.SearchBG>
            </S.SearchSection>
            <S.HeaderTable>
              <S.ResultsTitleCol1></S.ResultsTitleCol1>
              <S.ResultsTitleCol2>Объект</S.ResultsTitleCol2>
              <S.ResultsTitleCol3>IMEI для регистрации</S.ResultsTitleCol3>
              <S.ResultsTitleCol4>Пакетов не передано</S.ResultsTitleCol4>
            </S.HeaderTable>
            <S.BodyTable>{lastMap}</S.BodyTable>
            <S.FooterTable>
              <S.FooterText>
                Объектов: <span>{fileData.length}</span>
              </S.FooterText>
              <S.FooterText>
                Из них с сильным отставанием: <span>{slowPackets.length}</span>
              </S.FooterText>
              <S.FooterText>
                Показано: <span>{fileData.length}</span>
              </S.FooterText>
            </S.FooterTable>
          </S.MyComponent>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App
