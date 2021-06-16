import React, { useContext } from 'react';
import MyInfoContext from '../context/MyInfoContext';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
	container        : {
        padding: theme.spacing(6, 0, 6)
    },
    containerBackground        : {
        padding: theme.spacing(6, 0, 6),
        backgroundColor: "rgba(255,255,255,0.75)"
	},
	category         : {
		padding : theme.spacing(4)
	},
	categoryBody     : {
		paddingTop  : theme.spacing(2),
        paddingLeft: theme.spacing(2),
        color: "rgba(0,0,0,0.75)"
	},
	aboutImage       : {
		maxWidth : '700px',
		display  : 'block',
        margin: 'auto',
        boxShadow: '0 0 30px #333'   
	},
	media            : {
        height: 200,
        justifyContent: 'center'
	},
	mediaDescription : {
		paddingTop : theme.spacing(2)
	},
	aboutStatement   : {
		paddingTop    : theme.spacing(1),
        paddingBottom: theme.spacing(1),
        color: "rgba(0,0,0,0.75)"
    },
    aboutStatementLast   : {
		paddingTop    : theme.spacing(1),
        paddingBottom: theme.spacing(4),
        color: "rgba(0,0,0,0.75)"
    },
    skillContent: {
        color: "rgba(0,0,0,0.75)"
    },
    skillSubCategory: {
        color: "rgba(0,0,0,1)"
    }
}));
const About = () => {
	const { about, other: { images } } = useContext(MyInfoContext);

	const { statement1,statement2, statement3, skills, workExperience, education, certifications } = about;
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container maxWidth='md' className={classes.container}>
				<Paper elevation={2} className={classes.containerBackground}>
					{/* About */}
					<div className={classes.category}>
						<Typography variant='h5'>{about.categoryName}</Typography>
						<div className={classes.categoryBody}>
							<Typography variant='subtitle1' className={classes.aboutStatement}>
                                {statement1}
                            </Typography>
                            <Typography variant='subtitle1' className={classes.aboutStatement}>
                                {statement2}
                            </Typography>
                            <Typography variant='subtitle1' className={classes.aboutStatementLast}>
                                {statement3}
                            </Typography>
						</div>

						{/* About Image */}
						{images.length > 0 && (
                            <React.Fragment>
                               
                                <Card className={classes.aboutImage}>
                                <Hidden smDown>
                                    <CardMedia   
                                        image={images[0].image.url}
                                        title={images[0].image.altText}
                                        className={classes.media}
                                    />
                                </Hidden> 
                                </Card>
                                
								<Typography
									color='textSecondary'
									align='center'
									display='block'
									variant='caption'
									className={classes.mediaDescription}
								>
									{images[0].image.description}
								</Typography>
							</React.Fragment>
						)}
						{/* End About Image */}
					</div>
					<Container maxWidth='sm'>
						<Divider />
					</Container>
					{/* End About */}
					{/* Skills */}
					<div className={classes.category}>
						<Typography variant='h5'>{skills.categoryName}</Typography>
						<div className={classes.categoryBody}>
							{skills.items.map((skill, i) => (
								<div className={i} key={i}>
									<Typography className={classes.skillSubCategory} variant='h6' gutterBottom>
                                        {skill.type}
                                        <Typography className={classes.skillContent} >{skill.items.join(' | ')}</Typography>
									</Typography>
									
								</div>
							))}
						</div>
					</div>
					{/* EndSkills */}
					<Container maxWidth='sm'>
						<Divider />
					</Container>
					{/* Work Experience */}
					<div className={classes.category}>
						<Typography variant='h5'>{workExperience.categoryName}</Typography>
						<div className={classes.categoryBody}>
							{workExperience.work.map((w) => (
								<div key={w.company}>
									<Typography className={classes.skillSubCategory} variant='h6' gutterBottom>
										{w.company}
									</Typography>
									<Typography gutterBottom>{w.position}</Typography>
									<Typography gutterBottom>{w.date}</Typography>
									<Typography gutterBottom>{w.description}</Typography>
								</div>
							))}
						</div>
					</div>
					{/* End Work Experience */}
					<Container maxWidth='sm'>
						<Divider />
					</Container>
					{/* Education*/}
					<div className={classes.category}>
						<Typography variant='h5'>{education.categoryName}</Typography>
						<div className={classes.categoryBody}>
							{education.items.map((e) => (
								<div key={e.name}>
									<Typography variant='h6' gutterBottom>
										{e.name}
									</Typography>
									<Typography gutterBottom>{e.curriculum}</Typography>
									<Typography gutterBottom>{e.date}</Typography>
									<Typography gutterBottom>{e.description}</Typography>
								</div>
							))}
						</div>
					</div>
					{/* End Education*/}
					<Container maxWidth='sm'>
						<Divider />
					</Container>
                    {/* Certifications*/}
                    <div className={classes.category}>
                        <Typography variant='h5'>{certifications.categoryName}</Typography>
                        <div className={classes.category}>
                        {certifications.items.map((e) => (
                                    <div key={e.name}>
                                        <Typography variant='h6' gutterBottom>
                                            {e.name} 
                                        </Typography>
                                        <Typography gutterBottom>{e.organization}</Typography>
                                    </div>
                                ))}
                        </div>
                    </div>
					{/* End Certifications*/}
				</Paper>
			</Container>
		</React.Fragment>
	);
};
export default About;
