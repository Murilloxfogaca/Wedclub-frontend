import { useHistory } from "react-router-dom";
import ButtonBase from '@mui/material/ButtonBase';
import styled, { IStyledProp } from '@eduzz/houston-ui/styles/styled';
import Typography from '@eduzz/houston-ui/Typography';
import Button from '@eduzz/houston-ui/Button';
import Avatar from '@eduzz/houston-ui/Avatar';
import Src from './../../../../../assets/images/jaiminho.jpg';

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
  const handleEditClick = (redirect: string) => {
    let red = '/admin/edit/'+redirect;
    history.push(red);
  }
  const CallClick = (redirect: string) => {
    history.push('/admin/');
  }

  return (
    <ButtonBase className={className} onClick={onClick}>
      <div>
        <Avatar src={Src} className='avatar' />
        <Typography size='large' fontWeight='bold' className='name'>
        {name} {surname}
        </Typography>
        <Typography size='large' fontWeight='bold' className='title'>
          Idade: {age}
        </Typography>
        <Button onClick={() => handleEditClick(id)}>
          Atualizar usuário
        </Button>
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
