import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog';

export const HeaderContainer = styled('header', {
    display:'flex',
    alignItems: 'center',
    padding:'1.5rem',
    justifyContent:'space-between'
})

export const ContentMenu = styled(Dialog.Content,{
    position:'absolute',
    top:0,
    right:0,
    padding:'2rem',
    width:'75%',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    color:'$terciaryColor',
    'backdrop-filter':'blur(40px)',
    transition: "ease-in 10s" ,
    header:{
        width: '100%',
        position: 'relative',

    },
    nav:{
        backgroundColor:'transparent',
        marginTop:'3rem',
        letterSpacing:'.4rem',
        ul:{
           
            display:'flex',
            gap:'1.5rem',
            flexDirection:"column",
            li:{
                listStyle:'none',
                
            }
        }
    }
})



export const BurguerMenu = styled(Dialog.Trigger, {
    background:'transparent',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    svg:{
        color:'$secoundaryColor'
    }
})