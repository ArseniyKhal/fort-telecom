import styled from 'styled-components'

export const ResultsItem = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr;
  align-items: center;
  height: 34px;
  padding: 20px 0;
  gap: 8px;
  wrap: wrap;
  border-top: 1px solid #797980;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #45454e;
  }
`
export const ResultsColumns = styled.div`
  align-items: center;
  overflow: hidden;
  gap: 8px;
  font-weight: 600;
`
export const ResultsItemCol1 = styled(ResultsColumns)`
  display: flex;
  justify-content: center;
`
export const ResultsItemCol2 = styled(ResultsColumns)``
export const ResultsItemCol3 = styled(ResultsColumns)``
export const ResultsItemCol4 = styled(ResultsColumns)``

export const InputLabel = styled.label``
export const InputСheckbox = styled.input`
  position: absolute;
  left: 8px;
  z-index: -1;
  opacity: 0;
  & + ${InputLabel} {
    display: inline-flex;
    align-items: center;
    user-select: none;
    &::before {
      content: '';
      cursor: pointer;
      display: inline-block;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #adb5bd;
      border-radius: 6px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 70% 70%;
    }
  }
  &:checked + ${InputLabel}::before {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
`

export const ItemPicture = styled.div`
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
`

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const ItemLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
