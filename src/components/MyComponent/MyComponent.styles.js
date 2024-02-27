import styled from 'styled-components'

export const MyComponent = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`
export const SearchSection = styled.div`
  width: 100%;
  padding: 15px 15px 0;
`
export const SearchBG = styled.div`
  background-color: #45454e;
  padding: 15px;
  border-radius: 10px;
  position: relative;
`

export const SearchSvg = styled.svg`
  height: 24px;
  width: 24px;
  fill: #adb5bd;
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
`

export const SearchText = styled.input`
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px;
  border: none;
  background: #2d2d33;
  padding: 10px 15px 10px 42px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #bcbcc4;
  outline: none;
  min-width: 50%;
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::-webkit-input-placeholder {
    background-color: transparent;
    line-height: 150%;
    color: #bcbcc4;
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    line-height: 150%;
    color: #bcbcc4;
  }
  &::placeholder {
    background-color: transparent;
    line-height: 150%;
    color: #bcbcc4;
  }
`
export const HeaderTable = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr;

  align-items: center;
  padding: 15px 0;
  gap: 8px;
`
export const BodyTable = styled.ul``

export const ResultsTitleColumns = styled.div`
  overflow: hidden;
  cursor: pointer;
`
export const ResultsTitleCol1 = styled(ResultsTitleColumns)``
export const ResultsTitleCol2 = styled(ResultsTitleColumns)`
  display: flex;
  gap: 5px;
`
export const FooterTable = styled.div`
  padding: 10px;
  display: flex;
  gap: 25px;
  border-top: 1px solid #797980;
`
export const FooterText = styled.p`
  & span {
    font-weight: 700;
  }
`
