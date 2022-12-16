import { styled } from "../../styles";

export const ButtonRadio = styled('button',{
    width:'150px',
    height:'150px',
    background:'$terciaryColor',
    marginTop:'5rem',
    border:'none',
    borderRadius:'100%',
    fontSize:'1.25rem',
    fontFamily:'bellefair',
    cursor:'pointer',
    transition:'ease-out 200ms',
  
    "&:hover":{
        boxShadow:'0 0 0 3rem rgba(255,255,255,0.1)',
        transition:'ease 200ms'
    } 
})