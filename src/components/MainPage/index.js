import {useState, useEffect} from 'react'
import {
  MainContainer,
  Heading,
  UnOrderedContainer,
  UnorderedList,
  EachContainer,
  BreakTag,
  Name,
  MainEachContainer,
  VisitButton,
  NameButton,
  ImageCont,
  MainEachFlagContainer,
  NameContainer,
  SubCont,
  UnorderedFlagList,
  NoCountries,
} from './styledComponents'

const MainPage = ({initialCountriesList}) => {
  const [list, setList] = useState(initialCountriesList)
  const [flagList, setFlagList] = useState([])

  useEffect(() => {
    const filteredList = list.filter(
      eachCountry => eachCountry.isVisited === true,
    )
    setFlagList(filteredList)
  }, [list])

  const clickVisited = passedId => {
    const updatedList = list.map(obj => {
      if (obj.id === passedId) {
        return {...obj, isVisited: !obj.isVisited}
      }
      return obj
    })

    setList(updatedList)
  }

  return (
    <MainContainer>
      <Heading>Countries</Heading>
      <UnOrderedContainer>
        <UnorderedList>
          {list.map(eachCountry => (
            <li key={eachCountry.id}>
              <MainEachContainer>
                <EachContainer>
                  <Name>{eachCountry.name}</Name>
                  <div>
                    {eachCountry.isVisited ? (
                      <p>Visited</p>
                    ) : (
                      <VisitButton
                        type="button"
                        outline={eachCountry.isVisited}
                        onClick={() => clickVisited(eachCountry.id)}
                      >
                        Visit
                      </VisitButton>
                    )}
                  </div>
                </EachContainer>
                <BreakTag />
              </MainEachContainer>
            </li>
          ))}
        </UnorderedList>
      </UnOrderedContainer>
      <Heading>Visited Countries</Heading>
      {flagList.length ? (
        <UnorderedFlagList>
          {flagList.map(eachFlag => (
            <li key={eachFlag.id}>
              <MainEachFlagContainer>
                <div>
                  <ImageCont src={eachFlag.imageUrl} alt="thumbnail" />
                </div>
                <NameButton>
                  <Name>{eachFlag.name} </Name>
                  <div>
                    <button onClick={() => clickVisited(eachFlag.id)}>
                      Remove
                    </button>
                  </div>
                </NameButton>
              </MainEachFlagContainer>
            </li>
          ))}
        </UnorderedFlagList>
      ) : (
        <NoCountries>No Countries Visited Yet!</NoCountries>
      )}
    </MainContainer>
  )
}

export default MainPage
