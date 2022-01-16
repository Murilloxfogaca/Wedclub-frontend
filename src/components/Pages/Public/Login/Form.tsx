import { memo, MouseEvent } from 'react';

import { useHistory } from 'react-router-dom';

import useForm from '@eduzz/houston-forms/useForm';
import Button from '@eduzz/houston-ui/Button';
import Form from '@eduzz/houston-ui/Forms/Form';
import PasswordField from '@eduzz/houston-ui/Forms/Password';
import TextField from '@eduzz/houston-ui/Forms/Text';
import styled, { IStyledProp } from '@eduzz/houston-ui/styles/styled';
import Typography from '@eduzz/houston-ui/Typography';
import Toast from '@eduzz/houston-ui/Toast';

interface IProps extends IStyledProp {
  onCreate: (e: MouseEvent<HTMLElement>) => void;
  onRecoveryAccess: (e: MouseEvent<HTMLElement>) => void;
}

const LoginForm: React.FC<IProps> = ({ onRecoveryAccess, onCreate, className }) => {
  
  const history = useHistory();
  const handleAdmin = () => {
    history.push('/Admin');
  };

  const form = useForm({
    initialValues: { email: '', password: '' },
    validationSchema: yup =>
      yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().min(5).required()
      }),
    async onSubmit(model) {
      handleAdmin();
      Toast.success('Login feito com sucesso!');
    }
  });

  return (
    <Form context={form} className={className}>
      <Typography size='large' fontWeight='bold' className='title'>
        Entrar
      </Typography>
      <Typography className='subtitle'>Preencha seus dados para entrar</Typography>

      <TextField name='email' label='Email' type='email' />
      <PasswordField label='Senha' name='password' />

      <Typography className='resetButton' onClick={onRecoveryAccess}>
        Esqueci minha senha
      </Typography>

      <Button disabled={form.isSubmitting} type='submit' fullWidth>
        Entrar
      </Button>

      <Typography className='link' onClick={onCreate}>
        Ainda não tem uma conta? <span>Crie uma conta agora</span>
      </Typography>
    </Form>
  );
};

export default styled(memo(LoginForm))`
  & .resetButton {
    cursor: pointer;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    color: ${({ theme }) => theme.colors.primary.main};
    float: right;
  }
`;
