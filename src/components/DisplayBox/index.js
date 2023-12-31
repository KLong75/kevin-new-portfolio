import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';



const DisplayBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  // backgroundColor: 'hsla(130, 100%, 50%,1)',
  // color: 'hsla(130, 100%, 50%,1)',
  // backgroundColor: 'hsla(0, 0%, 98%, 1)', // Light grey background
  backgroundColor: 'hsla(0, 0%, 90%, 0.6)'
  // color: 'hsla(210, 100%, 25%, 1)', // Dark blue text for contrast and readability
}));

export default DisplayBox;