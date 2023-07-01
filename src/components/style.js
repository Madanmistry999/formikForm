import {makeStyles} from '@mui/styles'


export default makeStyles(() => ({
    root:{
        '.MuiTextfield-root':{
            mar:'1rem',
        },
    },

    paper:{
        padding:'1rem',
    },

    form : {
        display:'grid',
        gridColumn:'auto',
        gap:'1rem',
        flexWrap:'wrap',
        justifyContent:'center'
    },

    imgContainer : {
        maxWidth:'100%',
        height:'auto',
        objectFit:'cover',
        alignSelf:'center',
        margin:'0 20rem',
        background:'cover'
    },

} ))