import { useCallback, useState } from 'react';

import Grid from '@eduzz/houston-ui/Grid';
import styled, { IStyledProp } from '@eduzz/houston-ui/styles/styled';
import Typography from '@eduzz/houston-ui/Typography';

import UsuarioCards from './Cards';
import UserForm from './Form';

import Toolbar from '@/components/Layout/Toolbar';

const UserPage: React.FC<IStyledProp> = ({ className }) => {
  const [formOpened, setFormOpened] = useState(false);
  const [current, setCurrent] = useState();

  const formCancel = useCallback(() => setFormOpened(false), []);

  const handleCreate = useCallback(() => {
    setFormOpened(true);
    setCurrent(null);
  }, []);

  return (
    <div className={className}>
      <Toolbar />
      <UserForm opened={formOpened} data={current} onComplete={formCancel} onCancel={formCancel} />

      <div className='header'>
        <Grid.Row alignItems='center' justifyContent='center'>
          <Grid.Column xs={12} sm={true}>
            <Typography className='title' onClick={handleCreate} size='x-large' fontWeight='bold' >Gerencie seu usuário</Typography>
          </Grid.Column>
          <Grid.Row alignItems='center' className="cards">
            <Grid.Column xs={12} sm={true}>
              <UsuarioCards />
            </Grid.Column>
          </Grid.Row>

        </Grid.Row>
      </div>
    </div>
  );
};

export default styled(UserPage)`
  & > .header {
    margin: ${({ theme }) => theme.spacing(8)} 0;
  }
  & .title {
    width: 100%;
    text-align:center;
  }
  & .cards{
    margin-top: 3em
  }
`;
