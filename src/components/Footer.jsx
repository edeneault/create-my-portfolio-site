import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MyInfoContext from '../context/MyInfoContext';

import Modal from './Modal';

const useStyles = makeStyles((theme) => ({
	footer : {
        padding: theme.spacing(8),
        align: 'center'
	}
}));
const Footer = () => {
	const { navigation: { name } } = useContext(MyInfoContext);
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant='body1' align='center' color='textSecondary' component='p'>
				{name} {new Date().getFullYear()}
            </Typography>
            <Modal/>
		</footer>
	);
};
export default Footer;
