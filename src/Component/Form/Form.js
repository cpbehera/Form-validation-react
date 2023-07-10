import {useState,useEffect} from 'react';
import { Input,Button,Container,Text,Box,Alert,AlertIcon } from '@chakra-ui/react'

function Form(){
    const data = {
        name:"",
        email:"",
        password:""
    }
    const [inputData,setInputData] = useState(data);
    const [flag,setFlag] = useState(false);

    useEffect(() => {
        console.log("Registered");
    }, [flag]);

    const handleData = (e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value});
        console.log(inputData);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Fields are Mandatory")
        }
        else{
            setFlag(true);
        }
    }

    return (
        <Container maxW='550px' mt="20px">
        <pre>{(flag) ? <Alert status='success'><AlertIcon />Hello {inputData.name},You've successfully registered</Alert>: ""}</pre>
        <form className="container" onSubmit={handleSubmit}>
            <Box className="header" my="10px">
                <Text fontSize='xl' bg='#576574' color="white">Registration Form</Text>
            </Box>
            <div>
                <Input type="text" placeholder="Enter your Name" value={inputData.name} onChange={handleData} name="name"/>
            </div>
            <Box my="10px">
                <Input type="email" placeholder="Enter your Email" value={inputData.email} onChange={handleData} name="email"/>
            </Box>
            <Box>
                <Input type="password" placeholder="Enter your Password" value={inputData.password} onChange={handleData} name="password"/>
            </Box>
            <Box mt="10px">
                <Button colorScheme='blue' type="submit">Register</Button>
            </Box>
        </form>
        </Container>
    )
}

export default Form;