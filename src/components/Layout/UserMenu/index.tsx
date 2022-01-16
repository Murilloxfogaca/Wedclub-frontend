import { memo } from 'react';

import Button from '@mui/material/Button';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import ChevronDown from '@eduzz/houston-icons/ChevronDown';
import Exit from '@eduzz/houston-icons/Exit';
import LockedSolid from '@eduzz/houston-icons/LockedSolid';
import styled, { IStyledProp } from '@eduzz/houston-ui/styles/styled';
import Typography from '@eduzz/houston-ui/Typography';

import ChangePasswordDialog from './ChangePassword';

import DropdownMenu from '@/components/Shared/DropdownMenu';
import OptionItem from '@/components/Shared/DropdownMenu/OptionItem';
const UserMenu: React.FC<IStyledProp> = ({ className }) => {
  const [changePassword, , showChangePassword, hideChangePassword] = useBoolean(false);

  return (
    <div className={className}>
      <ChangePasswordDialog opened={changePassword} onComplete={hideChangePassword} />

      <DropdownMenu anchorOrigin={{ vertical: 35, horizontal: 'right' }}>
        <div className='wrapper'>
          <Button color='inherit' className='button'>
            <Typography className='name'>Usuário temporário</Typography>
            <ChevronDown />
          </Button>
        </div>
        <OptionItem text='Trocar senha' icon={LockedSolid} handler={showChangePassword} />
        <OptionItem text='Sair' icon={Exit} handler={showChangePassword} />
      </DropdownMenu>
    </div>
  );
};

export default styled(memo(UserMenu))`
  .name {
    margin: ${({ theme }) => `0 ${theme.spacing(2)}`};
  }

  .wrapper {
    display: flex;
    justify-content: center;
  }

  .button {
    margin-left: ${({ theme }) => theme.spacing(1)};
    padding-left: ${({ theme }) => theme.spacing(1)};
    padding-right: ${({ theme }) => theme.spacing(2)};
  }
`;
