import { useCallback, memo } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import useForm from '@eduzz/houston-forms/useForm';
import Button from '@eduzz/houston-ui/Button';
import DateField from '@eduzz/houston-ui/Forms/DatePicker';
import Form from '@eduzz/houston-ui/Forms/Form';
import TextField from '@eduzz/houston-ui/Forms/Text';
import PasswordField from '@eduzz/houston-ui/Forms/Password';
import Grid from '@eduzz/houston-ui/Grid';
import styled, { IStyledProp } from '@eduzz/houston-ui/styles/styled';
import Toast from '@eduzz/houston-ui/Toast';

import IUser from '@/interfaces/models/user';

interface IProps extends IStyledProp {
  opened: boolean;
  data?: IUser;
  onComplete: (data: IUser) => void;
  onCancel: () => void;
}

const UserForm: React.FC<IProps> = ({ opened, data, onComplete, onCancel, className }) => {
  const form = useForm<IUser>({
    validationSchema: yup =>
      yup.object().shape({
        name: yup.string().required().min(3).max(250),
        surname: yup.string().required().min(3).max(250),
        password: yup.string().required().min(3).max(250),
        date: yup.date().required(),
      }),
    async onSubmit(model) {
      Toast.success(`Usuário cadastrado com sucesso.`);
      onCancel();
    }
  });

  const simpleFile = () => {
    document.getElementById('file').click();
  }

  const handleEnter = useCallback(() => {
    form.setValues(data ?? {}, false);
  }, [form, data]);

  const handleExited = useCallback(() => {
    form.reset();
  }, [form]);

  return (
    <Dialog open={opened} disableEscapeKeyDown TransitionProps={{ onEnter: handleEnter, onExited: handleExited }}>
      <Form context={form} className={className}>
        <DialogTitle>{form.values.id ? 'Editar usuário' : 'Cadastrar um novo usuário'} </DialogTitle>
        <DialogContent className='content'>
          <TextField label='Nome' name='name' />
          <TextField label='Sobrenome' name='surname' />
          <PasswordField label="Senha" name='password' placeholder='Digite sua senha'/>
          <Grid.Row>
            <Grid.Column xs={12} sm={6}>
              <DateField label='Data de Nascimento' name='date' />
            </Grid.Column>
            <Grid.Column xs={12} sm={6}>
              <Button variant="outlined" className='avatar' onClick={simpleFile}>Adicionar Imagem</Button>
              <input type="file" id='file' accept="image/png, image/gif, image/jpeg" className="hidden" />
            </Grid.Column>
          </Grid.Row>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={onCancel}>
            Cancelar
          </Button>
          <Button type='submit' disabled={form.isSubmitting} loading={form.isSubmitting}>
            Salvar
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default styled(memo(UserForm))`
  & .content {
    width: 600;
    max-width: calc(95vw - 50px);
  }
  .hidden{
    font-size: 0;
    background: transparent;
    height: 0;
    width: 0;
  }
  & .avatar {
    width: 100%;
    height: 45px;
    position: relative;
    top: 3px;
  }
`;
