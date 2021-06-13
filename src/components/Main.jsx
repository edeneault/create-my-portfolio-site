import React, { useContext } from 'react';
import MyInfoContext from '../context/MyInfoContext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import genericUser from '../genericUser.svg';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	main           : {
		padding      : theme.spacing(4, 0, 2),
        marginBottom: theme.spacing(4),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        color: "rgba(0,0,0,0.75)"
	},
	cardsTitle     : {
        paddingBottom: theme.spacing(6),
        color: "rgba(255,255,255,1)"
	},
	cardGrid       : {
		paddingTop    : theme.spacing(2),
		paddingBottom : theme.spacing(8)
	},
	card           : {
		height        : '100%',
		display       : 'flex',
        flexDirection: 'column',
        backgroundColor: "rgba(255,255,255,0.75)"
	},
	cardMedia      : {
		paddingTop : '56.25%'
	},
	cardContent    : {
        flexGrow: 1,
        color: "rgba(0,0,0,0.75)"
	},
    profilePicture: {
        padding: theme.spacing(2), 
		float       : 'left',
        marginLeft: '2rem'
	},
    mainBlurb: {
        padding: theme.spacing(2), 
        paddingBottom: theme.spacing(1),
        color: "rgba(0,0,0,0.75)",
        borderRadius: "4px",
        minHeight: '5rem'
    },
    card2: {
        backgroundColor: "rgba(255,255,255,0.75)"
    },
    divider: {
        marginBottom: theme.spacing(2)
    },
    links: {
        marginTop: theme.spacing(1)
    },
    topCardTitle: {
        fontSize: '2rem',
        display: 'block'
    }
   
}));


const Main = () => {
	const classes = useStyles();
    const { main, work } = useContext(MyInfoContext);
    
	return (
		<React.Fragment>
			{/** Main unit */}
            <div className={classes.main}>
                
                
                <Grid container spacing={4}
                    direction="row"
                    justify="center"
                    alignItems="center"

                >
                    <Grid item xs={12} sm={12} md={10} lg={10} >
                        <Card className={classes.card2}>
                            <Grid item xs={12} sm={12} lg={2} >
                                <div className={classes.profilePicture}>
                                    <img
                                    height={'160px'}
                                        src={main.profileImage.url || genericUser}
                                        alt={main.profileImage.altText}
                                    />
                                </div>
                            </Grid>

                            <Grid item sm={12} md={12} lg={10}>
                                <div>
                                    <Typography
                                        className={classes.mainBlurb}
                                        variant='body1'
                                        align='left'                                    
                                        gutterBottom
                                    >
                                        <Typography
                                            className={classes.topCardTitle}
                                            component='span'
                                            variant='body1'
                                            align='left'
                                            gutterBottom 
                                        >
                                            {main.greeting}
                                        </Typography>
                                        
                                        {main.blurb}
                                    </Typography>
                                </div>
                            </Grid>
                        </Card>
                    </Grid>
				</Grid>
				
			</div>

            {/** End Main unit */}
            {/* < Divider /> */}
			{/** Cards unit */}

			<Container maxWidth='lg' className={classes.cardGrid}>
				<div className={classes.cardsTitle}>
					<Typography
						variant='h5'
						component='h4'
						align='center'
                        gutterBottom
                        color='textPrimary'
					>
						{work.categoryName}
					</Typography>
				</div>
				<Grid container spacing={4}>
					{work.projects.map((w) => (
						<Grid item key={w.projectName} xs={12} sm={6} md={4} lg={3}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image={w.image.url}
									title={w.image.altText}
                                />

                                <Divider />

								<CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'
                                        component='h5'
                                        align='center'
                                    >
										{w.projectName}
                                    </Typography>
                                    <Divider className={classes.divider} />

                                    <Typography variant='body2'>{w.description}</Typography>
                                </CardContent>
                                
                                <CardActions>
                               
									<Button
										size='small'
										color='secondary'
										onClick={() => window.open(w.url)}
                                    >
                                        { w.projectName === "Smart Garden" ? work.buttonName3 : work.buttonName }
                                    </Button>
                                    <Button
										size='small'
										color='secondary'
										onClick={() => window.open(w.links.link2)}
									>
										{work.buttonName2}
                                    </Button>
                                    
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
            
            
            <Container maxWidth='lg' className={classes.cardGrid}>
				<div className={classes.cardsTitle}>
					<Typography
						variant='h5'
						component='h4'
						align='center'
                        gutterBottom
                        color='textPrimary'
					>
						{work.categoryName2}
					</Typography>
				</div>
                <Grid container spacing={4}

                    justify="center"

                >
					{work.addProjects.map((w) => (
						<Grid item key={w.projectName} xs={6} sm={6} md={4} lg={3}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image={w.image.url}
									title={w.image.altText}
                                />

                                <Divider />

								<CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'
                                        component='h5'
                                        align='center'
                                    >
										{w.projectName}
                                    </Typography>
                                    <Divider className={classes.divider} />

                                    <Typography variant='body2'>{w.description}</Typography>
                                </CardContent>
                                
                                <CardActions>
                               
									<Button
										size='small'
										color='secondary'
										onClick={() => window.open(w.url)}
                                    >
                                        { w.projectName === "Smart Garden" ? work.buttonName3 : work.buttonName }
                                    </Button>
                                    <Button
										size='small'
										color='secondary'
										onClick={() => window.open(w.links.link2)}
									>
										{work.buttonName2}
                                    </Button>
                                    
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
            </Container>
            {/** End Cards unit */}
		</React.Fragment>
	);
};
export default Main;
