import * as S from './App.styles'
import { ResultItem } from './components/ResultItem/ResultItem'

export interface DataType {
  id: number
  name: string
  IMEI: string
  value: number
}

function App() {
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
            <S.BodyTable>
              <ResultItem></ResultItem>
              <ResultItem></ResultItem>
              <ResultItem></ResultItem>
              <ResultItem></ResultItem>
            </S.BodyTable>
            <S.FooterTable>
              <S.FooterText>
                Объектов: <span>15</span>
              </S.FooterText>
              <S.FooterText>
                Из них с сильным отставанием: <span>5</span>
              </S.FooterText>
              <S.FooterText>
                Показано: <span>15</span>
              </S.FooterText>
            </S.FooterTable>
          </S.MyComponent>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App
