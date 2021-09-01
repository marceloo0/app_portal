import styled from 'styled-components/native'

export const Container = styled.View`
  height: 55px;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: row;
  width: 100%;
`
export const Icon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  position: absolute;
  top: 16px;
  right: 0;
`
export const Title = styled.Text``
