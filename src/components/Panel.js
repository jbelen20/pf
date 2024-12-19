import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {
  ContentProducts,
  Title,
  ProductCategories,
  SectionProducts,
  ImageContentOne,
  ImageContentTwo,
  TextHoverCard1,
  TextHoverCard2,
  HorizonatalContent,
  ImageContentThreeHorizonatal1,
  ImageContentThreeHorizonatal12,
  TextHoverCard3,
  TextHoverCard3right,
  ImageContentThree,
  TextHoverCard3coctel,
  Subtitle
  } 
  from '../SC/PanelSC'

//image
import aboutMe from "../imageN/_ (5).jpeg";
import contacto from "../imageN/_ (8).jpeg";
import litle_cake from "../imageN/_ (10).jpeg";
import educacion from "../imageN/_ (11).jpeg";
import experiencia from "../imageN/libros.jpeg";
import softSkills from "../imageN/_ (9).jpeg";
import skills from "../imageN/_ (4).jpeg";
import coctel from "../imageN/₊✩‧₊˚౨ৎ˚₊✩‧₊.jpeg";

import { showSwalSombreMi, showSwalContact, showSwalEducacion, showSwalExperiencia, showSwalSoftSkills, showSwalSkills } from "./alerts";


const Panel = () => {
  const navigate = useNavigate()
  const [inHover1, setInHover1] = useState(false);
  const [inHover2, setInHover2] = useState(false);
  const [inHover3, setInHover3] = useState(false);
  const [inHover4, setInHover4] = useState(false);
  const [inHover5, setInHover5] = useState(false);
  const [inHover6, setInHover6] = useState(false);
  const [inHover7, setInHover7] = useState(false);
  const [inHover8, setInHover8] = useState(false);

  const handlerStateOnMouseEnterOrLeave = ()=>{
    if(inHover1 === false){
      setInHover1(true)
    }

  }

  const handlerStateLeave = ()=>{
  
    if(inHover1 === true){
      setInHover1(false)
    }

  }
  //-------------------


  const handlerStateOnMouseEnterOrLeave2 = ()=>{
    if(inHover2 === false){
      setInHover2(true)
    }

  }

  const handlerStateLeave2 = ()=>{
  
    if(inHover2 === true){
      setInHover2(false)
    }

  }


  const handlerStateOnMouseEnterOrLeave3 = ()=>{
    if(inHover3 === false){
      setInHover3(true)
    }

  }

  const handlerStateLeave3 = ()=>{
  
    if(inHover3 === true){
      setInHover3(false)
    }

  }

  const handlerStateOnMouseEnterOrLeave4 = ()=>{
    if(inHover4 === false){
      setInHover4(true)
    }

  }

  const handlerStateLeave4 = ()=>{
  
    if(inHover4 === true){
      setInHover4(false)
    }

  }

  const handlerStateOnMouseEnterOrLeave5 = ()=>{
    if(inHover5 === false){
      setInHover5(true)
    }

  }

  const handlerStateLeave5 = ()=>{
  
    if(inHover5 === true){
      setInHover5(false)
    }

  }


  const handlerStateOnMouseEnterOrLeave6 = ()=>{
    if(inHover6 === false){
      setInHover6(true)
    }

  }

  const handlerStateLeave6 = ()=>{
  
    if(inHover6 === true){
      setInHover6(false)
    }

  }


  const handlerStateOnMouseEnterOrLeave7 = ()=>{
    if(inHover7 === false){
      setInHover7(true)
    }

  }

  const handlerStateLeave7 = ()=>{
  
    if(inHover7 === true){
      setInHover7(false)
    }

  }

  const handlerStateOnMouseEnterOrLeave8 = ()=>{
    if(inHover8 === false){
      setInHover8(true)
    }

  }

  const handlerStateLeave8 = ()=>{
  
    if(inHover8 === true){
      setInHover8(false)
    }

  }
 


const goToProjects = ()=>{
  navigate('/proyectos')
}


  return (
    <ContentProducts>
      <Title>Judith Carreño</Title>
      <Subtitle>Desarrolladora web Full-Stack</Subtitle>
      <ProductCategories>
        {/* one vertical*/}
        <div>
          <SectionProducts>
              <ImageContentOne
                src={aboutMe}
                alt="x"
                onMouseEnter={handlerStateOnMouseEnterOrLeave}
                onMouseLeave={handlerStateLeave}
              />
              {inHover1 !== false ? (
                <TextHoverCard1 onMouseEnter={() => setInHover1(true)}  onClick={showSwalSombreMi} >Sobre mi</TextHoverCard1>
              ) : (
                ""
              )}
          </SectionProducts>
          <SectionProducts>
              <ImageContentOne
                src={contacto}
                alt="x"
                onMouseEnter={handlerStateOnMouseEnterOrLeave2}
                onMouseLeave={handlerStateLeave2}
              />
              {inHover2 !== false ? (
                <TextHoverCard1  onMouseEnter={() => setInHover2(true)} onClick={showSwalContact} >Contacto</TextHoverCard1>
              ) : (
                ""
              )}
          </SectionProducts>
        </div>
        {/* two vertical*/}
        <div>
          <SectionProducts  onClick={navigate('/')}>
              <ImageContentTwo
                src={litle_cake}
                alt="x"
                onMouseEnter={handlerStateOnMouseEnterOrLeave3}
                onMouseLeave={handlerStateLeave3}
              />
              {inHover3 !== false ? (
                <TextHoverCard2  onMouseEnter={() => setInHover3(true)} >Pastelitos</TextHoverCard2>
              ) : (
                ""
              )}
          </SectionProducts>
          <SectionProducts>
              <ImageContentTwo
                src={educacion}
                alt="x"
                onMouseEnter={handlerStateOnMouseEnterOrLeave4}
                onMouseLeave={handlerStateLeave4}
              />
              {inHover4 !== false ? (
                <TextHoverCard2 onMouseEnter={() => setInHover4(true)}  onClick={showSwalEducacion} >Educacion</TextHoverCard2>
              ) : (
                ""
              )}
          </SectionProducts>
          <SectionProducts>
              <ImageContentTwo
                src={experiencia}
                alt="x"
                onMouseEnter={handlerStateOnMouseEnterOrLeave5}
                onMouseLeave={handlerStateLeave5}
              />
              {inHover5 !== false ? (
                <TextHoverCard2  onMouseEnter={() => setInHover5(true)}  onClick={showSwalExperiencia}> Experiencia</TextHoverCard2>
              ) : (
                ""
              )}
          </SectionProducts>
        </div>
        {/* three vertical*/}
        <div>
          <HorizonatalContent>
            {/* horizontal */}
            <SectionProducts>
                <ImageContentThreeHorizonatal1
                  src={softSkills}
                  alt="x"
                  onMouseEnter={handlerStateOnMouseEnterOrLeave6}
                  onMouseLeave={handlerStateLeave6}
                />
                {inHover6 !== false ? (
                  <TextHoverCard3  onMouseEnter={() => setInHover6(true)}  onClick={showSwalSoftSkills} >Soft-Skills</TextHoverCard3>
                ) : (
                  ""
                )}
            </SectionProducts>
            <SectionProducts>
                <ImageContentThreeHorizonatal12
                  src={skills}
                  alt="x"
                  onMouseEnter={handlerStateOnMouseEnterOrLeave7}
                  onMouseLeave={handlerStateLeave7}
                />
                {inHover7 !== false ? (
                  <TextHoverCard3right  onMouseEnter={() => setInHover7(true)}  onClick={showSwalSkills} >Skills</TextHoverCard3right>
                ) : (
                  ""
                )}
            </SectionProducts>
          </HorizonatalContent>
          <div  onClick={goToProjects}>
          <SectionProducts>
              <ImageContentThree
                src={coctel}
                alt="x"
                onMouseEnter={handlerStateOnMouseEnterOrLeave8}
                onMouseLeave={handlerStateLeave8}
              />
              {inHover8 !== false ? (
                <TextHoverCard3coctel  onMouseEnter={() => setInHover8(true)} >proyectos</TextHoverCard3coctel>
              ) : (
                ""
              )}
          </SectionProducts>

          </div>
        </div>
      </ProductCategories>
    </ContentProducts>
  );
};

export default Panel;