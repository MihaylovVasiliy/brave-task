import styled, {css} from "styled-components";

const StyledLink = styled.a`
      margin-top: 10px;
      padding: 10px;
      font-size: 20px;
      border-radius: 10px;
      background-color: $color-background;
      
    &:hover {
        background-color: #e0e0e0;
        transition: background-color .5s, color .5s;
    }

  ${props => props.payment && css`
    width: 290px;   
    
    &:hover {
        background-color: #e0e0e0;
        transition: background-color .5s, color .5s;
    }
  `}
  
`;

export default StyledLink;