import React from 'react'
import CategoryCard from './../parts/CategoryCard';
import CaptionWrap from '../parts/Caption';
import Button from './../buttons/Button';
import H1 from '../headers/H1';
import ContainerCategory from './../parts/Contain';
import Position from './../parts/PositionContainer';
import { Link } from 'react-router-dom'
import Par from './../parts/Paragraph';

export default function Category(props) {
  console.log("Props category", props);
return (
<ContainerCategory>
{props.category && props.category.map((item, index) => {
  return(
    <CategoryCard key={index} index={index + 1}>
      <img src={item.metadata.img.url} alt="img" index={index + 1} />
        <CaptionWrap index={index + 1}>   
         <Position index={index + 1}>
            <H1 isBig>{item.title}</H1>
            <Par  dangerouslySetInnerHTML={{__html:item.content}}></Par>
            {/* <Link to={'/' + item.slug}><Button >Visit Site</Button> </Link>
            {/* <Link to={'/' + item.slug}><Button >Visit Site</Button> </Link>
            */}


         </Position>
        </CaptionWrap>
      </CategoryCard>
      )
    })}
    </ContainerCategory>
  )
}


