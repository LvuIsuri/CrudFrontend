import { makeStyles } from '@mui/styles';
import { Toolbar, AppBar} from '@mui/material';
 
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#000 !important' ,
        fontWeight: '600',
        color: '#fff',
        '& a':{
            color: '#fff',
            textDecoration: 'none'
        }
        
    },
    tabs:{
        marginRight:20
    }
}) 

const Navbar = () => {
    const classes = useStyle();
    return(
        <AppBar className= {classes.header} position="static">
            <Toolbar>
                <NavLink  className= {classes.tabs} to= "./" > Home</NavLink>
                <NavLink  className= {classes.tabs} to = "all"> Tất cả sinh viên</NavLink>
                <NavLink  className= {classes.tabs} to = "add">Thêm sinh viên</NavLink>

            </Toolbar>
        </AppBar>
    )
}
export default Navbar;