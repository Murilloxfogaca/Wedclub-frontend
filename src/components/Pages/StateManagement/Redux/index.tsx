import { useCallback, useState } from 'react';
import { useHistory } from "react-router-dom";
import CardContent from '@mui/material/CardContent';

import Button from '@eduzz/houston-ui/Button';
import Grid from '@eduzz/houston-ui/Grid';
import Typography from '@eduzz/houston-ui/Typography';

import AutoCompleteRedux from './AutoCompleteRedux';

const ReduxExample = () => {
  const [loading, setLoading] = useState(false);

  const onLogin = useCallback(async () => {
    setLoading(true);
    setLoading(false);
  }, []);

  const history = useHistory();

  const onLogout = () => {
    history.push('/logout');
  }

  return (
    <>
      <CardContent>
        <Typography size='medium'>Redux</Typography>
        <ul>
          <li>Recomendado para estados globais.</li>
          <li>Para componentes de “página” usamos uma única vez, nesse caso iniciar e limpar usando o useEffect.</li>
          <li>Possibilidade de simplificar os services e usar promises.</li>
        </ul>
      </CardContent>
      <CardContent>
        <Typography fontWeight='bold' marginBottom>
          👍 Exemplo Recomendado: Login e autenticação do usuário.
        </Typography>
        <Button onClick={onLogin} loading={loading} disabled={loading}>
          Entrar
        </Button>
        &nbsp;
        <Button onClick={onLogout} disabled={loading}>
          Sair
        </Button>
      </CardContent>

      <CardContent>
        <Typography fontWeight='bold' marginBottom>
          👎 Exemplo Não Recomendado: Componentes compartilhados que podem ser utilizados mais de uma vez.
        </Typography>
        <ul>
          <li>
            Como podem ver abaixo o conteúdo de uma instância é compartilhado com a outra, pois ambos usam o redux como
            base. Nessa caso é melhor utilizar o Context API.
          </li>
        </ul>
      </CardContent>

      <Grid.Row>
        <Grid.Column xs={true}>
          <AutoCompleteRedux />
        </Grid.Column>
        <Grid.Column xs={true}>
          <AutoCompleteRedux />
        </Grid.Column>
      </Grid.Row>
    </>
  );
};

export default ReduxExample;
