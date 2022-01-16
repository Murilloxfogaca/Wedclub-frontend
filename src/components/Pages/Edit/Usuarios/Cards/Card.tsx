import { useHistory } from "react-router-dom";
import ButtonBase from '@mui/material/ButtonBase';
import styled, { IStyledProp } from '@eduzz/houston-ui/styles/styled';
import Button from '@eduzz/houston-ui/Button';
import Avatar from '@eduzz/houston-ui/Avatar';
import DateField from '@eduzz/houston-ui/Forms/DatePicker';
import Form from '@eduzz/houston-ui/Forms/Form';
import useForm from '@eduzz/houston-forms/useForm';
import TextField from '@eduzz/houston-ui/Forms/Text';
import PasswordField from '@eduzz/houston-ui/Forms/Password';
import Toast from '@eduzz/houston-ui/Toast';
import Src from './../../../../../assets/images/jaiminho.jpg';

import IUser from '@/interfaces/models/user';

interface IProps extends IStyledProp {
  name: string;
  surname: string;
  avatar: string;
  age: string;
  id: string;
  onClick?: () => void;
}

const Card: React.FC<IProps> = ({ className, name, surname, id, avatar, age, onClick }) => {
  const history = useHistory();
  const CallClick = (redirect: string) => {
    history.push('/admin/');
  }

  const form = useForm<IUser>({
    validationSchema: yup =>
      yup.object().shape({
        name: yup.string().min(3).max(250),
        surname: yup.string().min(3).max(250),
        password: yup.string().min(3).max(250),
        date: yup.date().required(),
      }),
    async onSubmit(model) {
      Toast.success(`Usuário Editado com sucesso.`);
      history.push('/admin/');
    }
  });

  const simpleFile = () => {
    document.getElementById('file').click();
  }

  return (
    <ButtonBase className={className} onClick={onClick}>
      <div>
        <Avatar src={Src} className='avatar' />
          <Form context={form} className={className}>
            <Button variant="outlined" className='buttonavatar' onClick={simpleFile}>Alterar Imagem</Button>
            <input type="file" id='file' accept="image/png, image/gif, image/jpeg" className="hidden" />
            <TextField label='Nome' name='name' value={name} />
            <TextField label='Sobrenome' name='surname' value={surname} />
            <PasswordField label="Senha" name='password' value={surname} placeholder='Digite sua senha'/>
            <DateField label='Data de Nascimento' name='date' />
            <Button type='submit' disabled={form.isSubmitting} loading={form.isSubmitting}>
            Salvar
          </Button>
        </Form>
        <Button onClick={() => CallClick(id)}>
          Voltar	
        </Button>
      </div>
    </ButtonBase>
  );
};

export default styled(Card)`
width: 100%;
display: block;
position: relative;
text-align: center;

& p, & .MuiAvatar-root {
  width:100%;
}

& .avatar{
  margin: auto;
  width: 100px;
  height: 100px;
  display: block;
}
& .MuiButton-root {
	text-align: center;
	width: 100%;
	margin: 5px 0;
}
& > div {
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.radius(1)}px;
  background: white;
  border: ${({ theme }) => theme.colors.grey[300]} 1px solid;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
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
& buttonavatar {
  width: 100%;
  height: 45px;
  position: relative;
  top: 3px;
}

& .loader {
  position: absolute;
  bottom: 1px;
  left: 1px;
  right: 1px;
  border-bottom-left-radius: ${({ theme }) => theme.radius(1)}px;
  border-bottom-right-radius: ${({ theme }) => theme.radius(1)}px;
}

& .title {
  color: ${({ theme }) => theme.colors.primary.main};
  text-transform: uppercase;
}

& .value {
  color: ${({ theme }) => theme.colors.primary.main};
}

& .icon {
  color: ${({ theme }) => theme.colors.primary.main};
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
}
`;
