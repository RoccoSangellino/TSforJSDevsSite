import styled from 'styled-components'

import { Colors } from '../util/Colors'
import { Emoji } from '../util/util'

const FooterContainer = styled.div`
  margin-top: 24px;
  height: 8vh;
  bottom: 0px;
  color: ${Colors.mainWhite};
`

export const Footer = () => {
  
  return (
  <FooterContainer>
    made with <Emoji symbol="💖" label="sparking heart"/> by Shaundai Person
  </FooterContainer>
)
  }