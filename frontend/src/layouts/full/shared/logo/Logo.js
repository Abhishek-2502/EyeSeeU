import { Link } from 'react-router-dom';
import { ReactComponent as LogoDark } from 'src/assets/images/logos/icu.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '80px', 
  width: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin:'10px 50px'
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <LogoDark style={{ height: '350px', width: 'auto', overflow: 'visible' }} />
    </LinkStyled>
  );
};


export default Logo;
