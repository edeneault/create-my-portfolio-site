import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import MyInfoContext from '../context/MyInfoContext';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const useStyles = makeStyles((theme) => ({
    dialogText: {
        align: 'center',
        padding: theme.spacing(2)
    
    },
    button: {
        color: 'rgba(0,0,0,0.75)'
    }

}));

function SimpleDialog(props) {
    const classes = useStyles();
    const { navigation: { description, templateUrl } } = useContext(MyInfoContext);
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose}
            open={open}
            TransitionComponent={Transition}
            keepMounted
        >
            <DialogTitle id="REACT TEMPLATE BY BRIAN TRAN">About This React Website</DialogTitle>
            <Typography className={classes.dialogText} variant="body1">
                {description}
            </Typography>
            <Typography className={classes.dialogText} variant="body1">
                {templateUrl}
            </Typography>

        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default function SimpleDialogDemo() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div align="center">
        
        <Button  className={classes.button} variant="outlined" align="center" onClick={handleClickOpen}>
            About This React Website
        </Button>
        <SimpleDialog  open={open} onClose={handleClose} />
        </div>
    );
}
