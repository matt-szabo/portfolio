
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

var divStyle = {
    fontSize:'0.8em'
  };

export default function Footer() {
  return (
      <FootWrap>
          <h3>Contact Info</h3>
         <span>
        <a href="http://github.com/matt-szabo"><i className="fa fa-github fa-lg" aria-hidden="true"></i> </a>
        <a href="https://www.linkedin.com/in/mattszabo/"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
        <a href="mailto:mattszabo2017@gmail.com"><i className="fa fa-at fa-lg" aria-hidden="true"></i></a>
         <a href="tel:514-512-7209"><i className="fa fa-phone fa-lg" aria-hidden="true"></i></a>
         </span>
         <br></br>
         <span style={divStyle}>Created using&nbsp; <a href="https://cosmicjs.com/"> Cosmic JS &nbsp;</a>
         <img  width="auto" height="20px" src="/cosmic.svg" alt="cosmic_logo"/>
         </span>
      </FootWrap>
  
  )
}
