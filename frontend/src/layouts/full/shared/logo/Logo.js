import { Link } from 'react-router-dom';
import { ReactComponent as LogoDark } from 'src/assets/images/logos/eyeseeu.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '80px', 
  width: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft:'50px',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <LogoDark style={{ height: '400px', width: 'auto', overflow: 'visible' }} />
    </LinkStyled>
  );
};


export default Logo;
