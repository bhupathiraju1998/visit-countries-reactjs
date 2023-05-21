import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161624;
  //   height: 100vh;
  //   background-size: cover;
  padding: 25px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 900;
`
export const UnOrderedContainer = styled.div`
  border-radius: 8px;
  border-color: #94a3b8;
  border-width: 2px;
  height: 400px;
  overflow-y: scroll;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
`

export const EachContainer = styled.div`
  background-color: #1f1f2f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`
export const BreakTag = styled.hr`
  height: 1px;
  background-color: #1f1f2f;
  width: 100%;
  margin: 0px;
`
export const Name = styled.p`
  color: #ffffff;
`
export const MainEachContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VisitButton = styled.button`
  color: ${props => (props.outline ? '#cbd5e1' : '#ffffff')};
  background-color: ${props => (props.outline ? '#1f1f2f ' : ' #3b82f6')};
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 80px;
  cursor: pointer;
`
export const ImageCont = styled.img`
  height: 150px;
  width: 300px;
`
export const NameButton = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`
export const MainEachFlagContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SubCont = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const UnorderedFlagList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const NoCountries = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Roboto;
  height: 300px;
`
