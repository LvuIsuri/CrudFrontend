import { Button, FormControl, FormGroup,Input, InputLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { editUser, getUser } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";
const useStyle = makeStyles({
    container: {
        width:'50%',
        margin: '5% 0 0 25%',
        '& > *' : {
            marginTop:'20px !important'
        }
    },
    button:{
        marginTop: '20px !important'
    }
    
})


const initialvalue ={
    msv: '',
    name: '',
    email: '',
    number:''
}
const EditUser = () =>{
    const classes = useStyle();
    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);
    const loadUserData = async () => {
        const reponse = await getUser(id);
        setUser(reponse.data);
    }

    const navigate = useNavigate();
    const [user, setUser] = useState( initialvalue );
    const { msv, name, email, number } = user;
    const onValueChange = (e) =>{
        setUser( {...user, [e.target.name] : e.target.value})

    }
    const editUserDetail = async () =>{
        const reponse = await editUser(id,user);
        navigate('/all');
    }

    return(
        <FormGroup className= {classes.container}>
            <Typography variant ="h4"> Sửa sinh viên</Typography>
            <FormControl>
                <InputLabel>Mã sinh viên</InputLabel>
                <Input onChange = { (e) => onValueChange (e)} name ='msv' value={msv} />
            </FormControl>
            <FormControl>
                <InputLabel>Họ và tên</InputLabel>
                <Input onChange = { (e) => onValueChange (e)} name='name'  value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = { (e) => onValueChange (e)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Số điện thoại</InputLabel>
                <Input onChange = { (e) => onValueChange (e)} name='number' value={number}/>
            </FormControl>
            <Button onClick ={() => editUserDetail()} className= {classes.button} variant="contained"> Cập nhật học sinh</Button>
        </FormGroup>
        
        
    )
};
export default EditUser