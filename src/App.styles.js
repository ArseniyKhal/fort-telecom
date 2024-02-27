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
`
export const Container = styled.div`
  width: 1190px;
  padding: 0 15px;
  margin: 0 auto;
`
