import { useDispatch, useSelector } from 'react-redux'
import { setList } from '../../store/slices/listSlice'
import { fileData } from '../../data'
import * as S from './TitleColumn.styles'

interface BoxProps {
  title: string
  sort: string
  setSort: React.Dispatch<React.SetStateAction<string>>
  sortBy: string
}

// компонент заголовка колонки
export const ResultsTitleCol = ({ title, sort, setSort, sortBy }: BoxProps) => {
  const dispatch = useDispatch()
  const { dataList } = useSelector((state: any) => state.dataList)

  // клик по сортировке
  const handleClick = () => {
    const arrForSort = [...dataList]
    const arrWithUndefined = arrForSort.filter((el) => el[sortBy] === undefined)
    const arrWithoutUnd = arrForSort.filter((el) => el[sortBy] !== undefined)

    if ((sort !== `up ${title}` && sort !== `down ${title}`) || sort === ``) {
      setSort(`up ${title}`)

      dispatch(
        setList(
          arrWithoutUnd
            .sort(function (a, b) {
              return a[sortBy] > b[sortBy] ? 1 : -1
            })
            .concat(arrWithUndefined),
        ),
      )
    } else if (sort === `up ${title}`) {
      setSort(`down ${title}`)
      dispatch(
        setList(
          arrWithoutUnd
            .sort(function (a, b) {
              return a[sortBy] < b[sortBy] ? 1 : -1
            })
            .concat(arrWithUndefined),
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
    <S.ResultsTitleColumn
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
    </S.ResultsTitleColumn>
  )
}
