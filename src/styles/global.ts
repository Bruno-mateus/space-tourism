import { globalCss } from ".";

export const  globalStyles = globalCss({
    '*':{
        padding:0,
        margin:0,
        boxSizing:'border-box'
    },
    body:{
        '-webkit-font-smoothing':'antialised',
        backgroundColor:'$primaryColor',
        color:'$secoundaryColor'
    },
    'h1,h2,h3,h4':{
        fontFamily:"'Bellefair', serif"
    },
    h1:{
        fontSize:'7.375rem',
    },
    h2:{
        fontSize:'6.25rem'
    },
    h3:{
        fontSize:'3.5rem'
    },
    h4:{
        fontSize:'2rem'
    },
    h5:{
        fontFamily:"'Barlow Condensed', sans-serif;",
        fontSize:'1.75rem'
    },
    p:{
        fontFamily:"'Barlow', sans-serif",
        fontSize:'1.125rem',
        lineHeight:'2rem'
    },
    nav:{
        fontFamily:"'Barlow Condensed', sans-serif;",
        fontSize:'1rem',
        backgroundColor:'$bgNav'
    }
})