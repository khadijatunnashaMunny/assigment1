import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    card: {
        maxWidth: 1000,
        margin: 'auto',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        boxShadow: '1px 1px 5px #ccc',
    },
    sidebar:{
        boxShadow: '1px 1px 5px #ccc',
        paddingTop:'15%',
        height:'60%',  
    },
    profileHeader:{
        boxShadow: '1px 1px 3px #ccc',
    },
    sidebarTitle:{
        display:'flex',
    },
    profilemenu:{
        display:'flex',
        justifyContent:'space-between',
        marginRight:'10%'
    },
    profileimgtitle:{
        display:'flex',

    },
    icon:{
        marginTop:'3%',
    },
    title:{
        display:'flex',   
        justifyContent:'space-evenly'
    },
    image:{
        height:'40px',
        width:'40px',
        borderRadius:'50%',
    },
    
    sidebaricon:{
        padding:'3%'
    },
    profile:{
        marginTop:'3%',
        borderRadius:'6px',
        padding:'3%'


    },
    notice:{
        boxShadow: '1px 1px 5px #ccc',
        padding:'3%',
        fontSize:'16px',
        color:'#ccc',
        margin:'2%',   
        borderRadius:'6px',
    },
    vdoPresent:{
        padding:'7%',
        boxShadow: '1px 1px 5px #ccc',
        textAlign:'center',
        margin:'2%',        
        borderRadius:'6px',
    },
    iceBreaker:{
        boxShadow: '1px 1px 5px #ccc',
        padding:'3%',
        fontSize:'16px',
        color:'#ccc',
        margin:'4%',   
        borderRadius:'6px',
    
    },
    profileDetail:{
        marginLeft:'5%',
    },
    menubar:{
        display:'flex',
        justifyContent:'space-between' ,

    },
    text:{
        fontSize:'16px',
        marginBottom: '3%',
        color:'#ccc',
        textTransform:'uppercase',
        margin:'0%'
    },
    rightside:{
        boxShadow: '1px 1px 3px #ccc',
        margin:'2%'
    }


   
   
      
}));