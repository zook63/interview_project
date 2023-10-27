import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import './OrderSummary.css';
import { FaChevronDown } from "react-icons/fa";

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>

      <div className='order-child sender' aria-describedby={id} variant="contained" onClick={handleClick}>{props.name}  <FaChevronDown/></div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ px: 1 }}>{props.address1}</Typography>
        <Typography sx={{ px: 1 }}>{props.address2}</Typography>
        <Typography sx={{ px: 1 }}>{props.city+', '+props.state+' '+props.zipcode}</Typography>
        <Typography sx={{ px: 1 }}>United States</Typography>
      </Popover>
    </div>
  );
}