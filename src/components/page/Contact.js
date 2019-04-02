import React, { Component } from 'react'
import styled from 'styled-components'
import Center from '../parts/Center';
import H1 from '../headers/H1';
import Par from './../parts/Paragraph';
import Img from './../parts/Figure';


const PageWrap = styled.div`
${({theme}) => theme.media.mobile} {
  width:100%;
  height:100%;
  padding:30px 0;
  
 }
 ${({theme}) => theme.media.tablet} {
  padding:150px 0;
 }
  
`;

export default class Contact extends Component {

  state = {
    content: null
  }
  componentDidMount = async() => {
    const Cosmic = require('cosmicjs')
    const api = Cosmic()
    const bucket = api.bucket({
      slug: '2455d100-53e9-11e9-85e5-6914decad3f2',
      read_key: 'VjQgWGD4S9xnNLjyRTubU6Oapgpqz5GcK6PGu2GM0Tn9Tl2LQo'
    })
    const data = await bucket.getObject({
    slug: 'contact'
    })
    this.setState({
      content:data.object
    })
  }
  render() {
    console.log(this.state.content);
    
    return (
      <PageWrap>
        <Center>
          {this.state.content && <H1 isBig center>{this.state.content.title}</H1> }
          {this.state.content && <Par dangerouslySetInnerHTML={{__html:this.state.content.content}}></Par> }
          <H1 >About author:</H1>
          <span>Created by: <a href="https://github.com/3ndrius"> 3ndrius </a>
         </span>
         <hr/>
         {this.state.content && <Img responsive src={this.state.content.metadata.picture.url} alt="img" />}
          </Center>
      </PageWrap>
    )
  }
}
