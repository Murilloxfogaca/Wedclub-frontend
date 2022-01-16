import { memo } from 'react';

import Grid from '@eduzz/houston-ui/Grid';
import styled, { IStyledProp } from '@eduzz/houston-ui/styles/styled';
import Card from './Card';

const UserCards: React.FC<IStyledProp> = ({ className }) => {
  
  return (
    <div className={className}>
      <Grid.Row>
          <Grid.Column xs={12} md={4} >
            <Card name={'Raul'} surname={'Padilha'} avatar={''} age={'18'} id={'1'} />
          </Grid.Column>

          <Grid.Column xs={12} md={4} >
            <Card name={'Raul'} surname={'Padilha'} avatar={''} age={'18'} id={'2'} />
          </Grid.Column>

          <Grid.Column xs={12} md={4} >
            <Card name={'Raul'} surname={'Padilha'} avatar={''} age={'18'} id={'3'} />
          </Grid.Column>

          <Grid.Column xs={12} md={4} >
            <Card name={'Raul'} surname={'Padilha'} avatar={''} age={'18'} id={'4'} />
          </Grid.Column>

          <Grid.Column xs={12} md={4} >
            <Card name={'Raul'} surname={'Padilha'} avatar={''} age={'18'} id={'5'} />
          </Grid.Column>

          <Grid.Column xs={12} md={4} >
            <Card name={'Raul'} surname={'Padilha'} avatar={''} age={'18'} id={'6'} />
          </Grid.Column>

      </Grid.Row>
      
    </div>
  );
};

export default styled(memo(UserCards))`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
