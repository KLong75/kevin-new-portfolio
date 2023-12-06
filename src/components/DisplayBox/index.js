import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';



const DisplayBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  // backgroundColor: 'hsla(120,100%,50%,.4)',
  backgroundColor: `hsla(0, 0%, 98%, 1)`,
}));

export default DisplayBox;