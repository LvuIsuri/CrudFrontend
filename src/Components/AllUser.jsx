import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";
import { getUser } from "../Service/api";
import { deleteUserData } from "../Service/api";
import { Link } from 'react-router-dom'

const useStyle = makeStyles({

    table:{
        marginTop:50,
        width: '90%'

    },
    
    thead: {
        '& > *':{
            background: '#000',
            color: '#ffffff !important',
            fontSize:20 
        }
    },

});


const AllUser = () =>{

    const [ users, setUsers ] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = async () =>{
        const response = await getUser();
        setUsers(response.data);
    }

    const deleteUser = async (id) =>{
        await deleteUserData(id);
        getAllUser();
    }
    return(
        <Table className= {classes.table} >
            <TableHead >
                <TableRow className= {classes.thead}>
                    <TableCell> Id</TableCell>
                    <TableCell> MSV</TableCell>
                    <TableCell> Tên</TableCell>
                    <TableCell> Email</TableCell>
                    <TableCell> Số điện thoại</TableCell>
                    <TableCell></TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map( (user) => (
                        <TableRow  key={user.id}>
                   
                            <TableCell >{user.id}</TableCell>
                            <TableCell>{user.msv}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.number}</TableCell>
                            <TableCell>
                                <Button variant ="contained" color="primary" style = {{ marginRight: 20 }} component = {Link} to = {`/edit/${user.id}`}>Edit</Button>
                                <Button onClick ={() => deleteUser(user.id)} variant ="contained" color ="error" >Delete</Button>
                            </TableCell>
                        
                        </TableRow>
                    ))
                }
                
            </TableBody>
        </Table>
    )
};
export default AllUser