import WordCard from '../component/WordCard'
import styled from 'styled-components'
import React from 'react'
import logo from '../assets/Background-Image.jpg'
import { Row, Col } from 'antd';
import { useContext, useState } from 'react'
import AppContext from '../context/AppContext';

const StyledWrapper = styled.div`

background-image: url('${logo}');

.set-layout{
    display:flex;
    justify-content:space-between;
    align-items: center;
}

padding: 10px 5%;

@media(max-width: 425px){
  padding: 20px 0;
}
.select-types{
  width:100%;
}

.btn{
  margin-top:10px;
  color: blue;
  background-color:skyblue;
}

h1{
  text-align:center;
}
`

const HomePage = () => {

  const {vocabs, setVocabs} = useContext(AppContext);

  const handleDelete = (index) => {
    const newArr = vocabs.filter((data, id) => {
      return id !== index
    })
    setVocabs(newArr)
  }

  return (
    <StyledWrapper>
      <div>
        <h1>Vocabularies</h1>
        <Row gutter={[16, 16]}>
          {vocabs.map((item, index) => {
            return (
              <Col key={index} className="gutter-row set-layout" xs={24} sm={12} md={8} lg={6}>
                <WordCard {...item} onDelete={() => { handleDelete(index) }} />
              </Col>
            )
          })}
        </Row>
      </div>
    </StyledWrapper>
  );
}

export default HomePage;