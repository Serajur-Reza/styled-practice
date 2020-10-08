import styled, { keyframes } from 'styled-components';

const titleAnimation= keyframes`
from {
    background-color:red;
  }

  to {
    background-color:yellow;
  }
`


export const Title = styled.div`
text-align: center;
animation: ${titleAnimation} 3s linear infinite;
font-size: 1.5rem;
padding: 2rem;
width:100%;
color:white;
`

let color="cyan"

export const Card = styled.div`
background:${(props:any)=> props.background || color};
margin-top:30px;
text-align: center;
padding: 2rem;
box-shadow: 0 5px 8px rgba(0,0,0,0.25);
border-radius: 5px;

h2{
    color:red;
}


:hover{
    cursor:pointer;
    opacity: 0.7;
}
`