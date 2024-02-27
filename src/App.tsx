import { MyComponent } from './components/MyComponent/MyComponent'
import { fileData } from './data'
import * as S from './App.styles'

export interface SettingsType {
  search: boolean
  inputs: boolean
  columns: SettingsColType[]
}
export interface SettingsColType {
  name: string
  type: string
  sorting: boolean
}

const settings: SettingsType = {
  search: true,
  inputs: true,
  columns: [
    {
      name: 'Объект',
      type: 'name',
      sorting: true,
    },
    {
      name: 'IMEI для регистрации',
      type: 'IMEI',
      sorting: true,
    },
    {
      name: 'Пакетов не передано',
      type: 'packs',
      sorting: true,
    },
  ],
}

export const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <MyComponent fileData={fileData} set={settings} />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
