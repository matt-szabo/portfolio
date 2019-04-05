
import React from 'react'
import styled from 'styled-components';


const FootWrap = styled.div`
    width:100%;
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    a{
        color:#29AAE1;
        text-decoration:none;
    }
    i{
        margin:6px;
        cursor:pointer;
    }
    span{
        display:flex;
        justify-content:center;
        align-items:center;
    
    }

`;

// var divStyle = {
//     fontSize:'0.8em'
//   };

export default function Footer() {
  return (
      <FootWrap>
          <h3>Contact Me</h3>
         <span>
      
        <a href="http://github.com/matt-szabo"><i className="fa fa-github fa-2x" aria-hidden="true"></i> </a>
        &nbsp;
     
        <a href="https://www.linkedin.com/in/mattszabo/"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
        &nbsp;
     
        <a href="mailto:mattszabo2017@gmail.com"><i className="fa fa-at fa-2x" aria-hidden="true"></i></a>
        &nbsp;
       
         <a href="tel:514-512-7209"><i className="fa fa-phone fa-2x" aria-hidden="true"></i></a>
         </span>
         <br></br>
         <span><a href="https://cosmicjs.com/add-bucket?import_bucket=5ca111792cfd9c356e7caa99"><img src="https://s3-us-west-2.amazonaws.com/cosmicjs/51fe54d0-4f6e-11e9-9f32-8d001da69630-powered-by-cosmicjs.svg" alt="cosmic js icon"/></a></span>
         <span><p>&nbsp;</p></span>
      </FootWrap>
  
  )
}
