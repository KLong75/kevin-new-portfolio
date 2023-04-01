import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const DisplayBox = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  // textAlign: 'left',
  // color: theme.palette.text.secondary,
  backgroundColor: 'hsla(120,100%,75%,0.3)',
  
  // height: '80%'
}));

export default DisplayBox;