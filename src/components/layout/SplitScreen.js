import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   gap: ${props => props.gap};
   flex-wrap: wrap;
`;
const Pane = styled.div`
   flex: ${props => props.weight};

`
const SplitScreen = ({ leftWeight = 1, rightWeight = 1, children, gap = '1rem' }) => {

   const [left, right] = children;
   return (
      <Container gap={gap}>
         <Pane weight={leftWeight} >
            {left}
         </Pane>
         <Pane weight={rightWeight}>
            {right}
         </Pane>
      </Container>
   )
}

export default SplitScreen
