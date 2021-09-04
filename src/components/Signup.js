import React,{useState,useEffect} from "react";
import useStyles from './styles/signupstyle';
import { Card, Typography, Grid, container, CardContent, Divider, Link, Paper,IconButton, MenuItem,Menu } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import NotificationsPausedIcon from '@material-ui/icons/NotificationsPaused';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import ReportIcon from '@material-ui/icons/Report';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import download from './images/download.jpg';
import DehazeIcon from '@material-ui/icons/Dehaze'; 

export default function Signup() {

    const classes = useStyles();
    const[open,setOpen]=useState(null);

    const handleOpen=(e)=>setOpen(e.currentTarget);
    const handleClose=()=>setOpen(false);


    return (
        <div>
            <Card className={classes.card}>
                <CardContent className={classes.profileHeader}>
                    <Grid container spacing={2}>
                        <Grid item xs={3} container >
                            <div className={classes.profileimgtitle}>
                                <span ><img className={classes.image} src="http://3.7.166.122/wp-content/uploads/2021/07/bca29309-0ce3-4fd9-81d0-a6e749ae49c8-e1625725330982.png"
                                /> </span>
                                <Typography variant="h5">Techhack</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} />
                        <Grid item xs={3} >
                            <div className={classes.title}>
                                <span className={classes.icon} ><NotificationsPausedIcon /></span>
                                <Typography className={classes.icon} >jassica jones</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
                <Grid container spacing={0} className={classes.title}>
                    <Grid item xs={3} >
                        <div className={classes.sidebar}>
                            <div>
                                <div className={classes.sidebarTitle} >
                                    <span className={classes.sidebaricon}><DashboardIcon
                                        style={{ color: "#078348", height: "20px", width: "20px", marginRight: "0px" }} /></span>
                                    <Typography style={{ marginTop: '2%' }}>Dashboard</Typography>
                                </div>
                                <div className={classes.sidebarTitle} >
                                    <span className={classes.sidebaricon}><WbIncandescentIcon
                                        style={{ color: "#ccc", height: "20px", width: "20px", margin: "0px" }} /></span>
                                    <Typography style={{ marginTop: '2%',color:'#ccc' }}>Talent pool</Typography>
                                </div>
                                <div className={classes.sidebarTitle} >
                                    <span className={classes.sidebaricon}><SubtitlesIcon
                                        style={{ color: "#ccc", height: "20px", width: "20px", margin: "0px" }} /></span>
                                    <Typography style={{ marginTop: '2%',color:'#ccc' }} >Internal Campaigns</Typography>
                                </div>
                                <div className={classes.sidebarTitle} >
                                    <span className={classes.sidebaricon}><RecordVoiceOverIcon
                                        style={{ color: "#ccc", height: "20px", width: "20px", margin: "0px" }} /></span>
                                    <Typography style={{ marginTop: '2%',color:'#ccc' }}>External Campain</Typography>
                                </div>
                                <div className={classes.sidebarTitle} >
                                    <span className={classes.sidebaricon}><ReportIcon
                                        style={{ color: "#ccc", height: "20px", width: "20px", margin: "0px" }} /></span>
                                    <Typography style={{ marginTop: '2%',color:'#ccc' }} >Reports </Typography>
                                </div>
                            </div>
                            <div >
                                <div className={classes.sidebarTitle} >
                                    <span className={classes.sidebaricon}><SettingsIcon
                                        style={{ color: "#ccc", height: "20px", width: "20px", margin: "0px" }} /></span>
                                    <Typography style={{ marginTop: '2%' ,color:'#ccc'}}>Settings</Typography>
                                </div>
                                <div className={classes.sidebarTitle} >
                                    <span className={classes.sidebaricon}><LockIcon
                                        style={{ color: "#ccc", height: "20px", width: "20px", margin: "0px" }} /></span>
                                    <Typography style={{ marginTop: '2%',color:'#ccc' }}>Logout </Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={9}  >
                        <div className={classes.rightside}>
                            <div className={classes.profile}>
                                <div className={classes.profilemenu}>
                                    <div className={classes.profileimgtitle}>
                                        <span className={classes.image}>
                                            <img className={classes.image} src={download} />
                                        </span>
                                        <div className={classes.profileDetail}>
                                            <Typography>jassica jones</Typography>
                                            <Typography>Dhaka,Bangladesh</Typography>
                                        </div>
                                    </div>
                                    <div >
                                        <IconButton  onClick={handleOpen}><DehazeIcon/></IconButton>
                                        <Menu open={Boolean(open)} anchorEl={open}  onClose={handleClose}>
                                            <MenuItem className={classes.text} onClick={handleClose}>OVERVIEW</MenuItem>
                                            <MenuItem  className={classes.text} onClick={handleClose}>CHAT</MenuItem>
                                            <MenuItem  className={classes.text} onClick={handleClose}>SKILLS</MenuItem>
                                            <MenuItem  className={classes.text} onClick={handleClose}>FILES</MenuItem>
                                            <MenuItem  className={classes.text} onClick={handleClose}>INTERVIEW</MenuItem>
                                            <MenuItem  className={classes.text} onClick={handleClose}>ASSESSMENTS</MenuItem>
                                            <MenuItem  className={classes.text} onClick={handleClose}>OFFER</MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Typography style={{ marginLeft: "2%" }} variant="h6">Video Presentation</Typography>
                        <div className={classes.vdoPresent}>
                            <Link to="/"><Typography>https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content</Typography></Link>
                        </div>
                        <Grid container spacing={0} className={classes.title}>
                            <Grid item lg={6} xs={12} container>
                                <Typography style={{ marginLeft: "3%" }} variant="h6">ICEBREAKER</Typography>
                                <div className={classes.iceBreaker}>
                                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Typography>
                                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={6} container>
                                <Typography style={{ marginLeft: "3%" }} variant="h6">WORK & EXPERIENCE</Typography>
                                <div className={classes.iceBreaker}>
                                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Typography>
                                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container>
                            <Typography style={{ marginLeft: "2%" }} variant="h6">NOTICE PERIOD</Typography>
                            <div className={classes.notice}>
                                <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Typography>
                                <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}


