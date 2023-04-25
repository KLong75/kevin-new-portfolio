import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';



const DisplayBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  backgroundColor: 'hsla(120,100%,50%,.8)',
}));

export default DisplayBox;