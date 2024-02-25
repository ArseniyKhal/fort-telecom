import { styled, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	}
*:before,
*:after {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
a,
a:visited {
	font-family: "Montserrat", sans-serif;
	text-decoration: none;
	cursor: pointer;
	decoration: none;
	color: inherit;
}
ul li {
	list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-style: normal;
	font-weight: 400;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

::-webkit-scrollbar {
	width: 6px;
  }
 ::-webkit-scrollbar-track {
	background: #FFF;

 }
 ::-webkit-scrollbar-thumb {
	background-color: #D9D9D9;
	border-radius: 10px;
 }

html, body {
	font-family: "Montserrat", sans-serif;
	color: #bcbcc4;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
   user-select: none;
	scrollbar-width: thin;
	scrollbar-color:  #D9D9D9 #FFF;
}
`
export const Wrapper = styled.div`
  background-color: #2d2d33;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  width: 1190px;
  padding: 0 15px;
  margin: 0 auto;
`

export const MyComponent = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`
export const SearchSection = styled.div`
  width: 100%;
  padding: 15px;
`
export const SearchBG = styled.div`
  background-color: #45454e;
  padding: 15px;
  border-radius: 10px;
  position: relative;
`
export const FilterSvg = styled.svg`
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
    color: var(--text-color-input);
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    line-height: 150%;
    color: var(--text-color-input);
  }
  &::placeholder {
    background-color: transparent;
    line-height: 150%;
    color: var(--text-color-white);
  }
`
export const HeaderTable = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 20px;
  gap: 8px;
`
export const BodyTable = styled.ul`
  //   flex: 1 1 auto;
`

export const ResultsTitleColumns = styled.div`
  overflow: hidden;
  //   display: flex;
  //   justify-content: center;
  //   border-bottom: 2px solid #fff;
`
export const ResultsTitleCol1 = styled(ResultsTitleColumns)``
export const ResultsTitleCol2 = styled(ResultsTitleColumns)``
export const ResultsTitleCol3 = styled(ResultsTitleColumns)``
export const ResultsTitleCol4 = styled(ResultsTitleColumns)``

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
