import { memo } from 'react';

import Grid from '@eduzz/houston-ui/Grid';
import styled, { IStyledProp } from '@eduzz/houston-ui/styles/styled';
import Card from './Card';

const UsersCards: React.FC<IStyledProp> = ({ className }) => {
  return (
    <div className={className}>
      <Grid.Row  alignItems='center' justifyContent='center'>
          <Grid.Column xs={12} md={6}>
            <Card name={'Raul'} surname={'Padilha'} avatar={''} age={'18'} id={'19'} />
          </Grid.Column>
      </Grid.Row>
      
    </div>
  );
};

export default styled(memo(UsersCards))`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
