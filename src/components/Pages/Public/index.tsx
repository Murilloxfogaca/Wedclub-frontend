import { Route, Switch } from 'react-router-dom';

import styled, { breakpoints, IStyledProp } from '@eduzz/houston-ui/styles/styled';

import LoginPage from './Login';;
import splashImage from '@/assets/images/logo-white.png';

const PublicPage: React.FC<IStyledProp> = ({ className }) => {
  return (
    <div className={className}>
      <div className='container'>
        <img src={splashImage} className="logo-site" />
        <Switch>
          <Route path='/login' exact component={LoginPage} />
        </Switch>
      </div>
    </div>
  );
};

export default styled(PublicPage)`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;

  .logo-site {
    margin-bottom: 1em;
  }
  & > .container {
    padding: ${({ theme }) => theme.spacing(8)};
    align-items:center;
    width: 100%;
    margin: auto;
    max-width: 1080px;
    background-color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${breakpoints.down('sm')} {
      padding: ${({ theme }) => theme.spacing(4)};
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      cursor: pointer;
      display: block;
      font-weight: 600;
    }

    & > .content {
      flex: 1;
      justify-content: center;
      align-items: center;
      display: flex;
      min-width: 400px;
      margin-top: -100px;

      ${breakpoints.down('sm')} {
        align-items: flex-start;
        min-width: 0;
        margin-top: 0;
      }

      & > div {
        width: 100%;
      }

      .title {
        margin-bottom: ${({ theme }) => theme.spacing(8)};

        ${breakpoints.down('sm')} {
          margin-bottom: ${({ theme }) => theme.spacing(4)};
        }
      }

      .subtitle {
        margin-bottom: ${({ theme }) => theme.spacing(4)};
      }

      .link {
        cursor: pointer;
        margin-top: ${({ theme }) => theme.spacing(6)};

        & > span {
          color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }

    & > .footer {
      align-self: flex-start;
    }
  }
`;
