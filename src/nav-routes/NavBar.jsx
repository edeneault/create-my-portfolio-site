import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MyInfoContext from '../context/MyInfoContext';
import { makeStyles } from '@material-ui/core/styles';
import MyNavButton from './MyNavButton';




const useStyles = makeStyles(() => ({
	root       : {
        flexGrow: 1
	},
	title      : {
		flexGrow    : 2,
        paddingLeft: '2rem'
           
	},
	navButtons : {
        paddingRight: '2rem'
    },
    navBar: {
        backgroundColor: 'rgba(0,0,0,0.75)',
    }
    
}));

const NavBar = () => {
	const { navigation: { menu, name } } = useContext(MyInfoContext);
    const classes = useStyles();
    console.log(classes);
	return (
        <AppBar position='static' className={classes.navBar}>
            
			<Toolbar >
				<Typography variant='h6' className={classes.title}>
					{name}
				</Typography>
				<div className={classes.navButtons}>
					{menu.map((e, i) => {
						return <MyNavButton key={i} to={e.url} text={e.text} target={e.target} />;
					})}
				</div>
			</Toolbar>
		</AppBar>
	);
};
export default NavBar;
