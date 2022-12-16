import { styled } from "../../styles";
import homeMobile from '../../assets/home-mob.jpg'

export const HomeContainer = styled('main',{
    height:'calc(100vh - 5rem)',
    display: 'flex',
    width:'100%',
    backgroundImage:`url(${homeMobile})`,
    backgroundSize:'cover',
    flexDirection: 'column',
    alignItems:'center',
    textAlign: 'center',
   
})
export const HomeContent = styled('div',{
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    textAlign: 'center',
    gap:'1rem',
    padding:'1.5rem',
    color:'$terciaryColor',
    h1:{
        fontSize:'5rem'
    },
    h5:{
        fontWeight:'normal',
        fontSize:'1rem'
    },
    
})