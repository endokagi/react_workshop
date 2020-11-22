import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Image, Input, Select, Button, Divider, notification } from 'antd';
import logo from '../scottish-fold-cat.jpg'
import AppContext from '../context/AppContext';

const StyledWrapper = styled.div`
    padding: 20px 10%;
    @media(max-width: 425px) {
    padding: 20px 10px;
    }
    .select-types {
    width: 100%;
    }
    .form-item {
    margin-bottom: 10px;
    }

    .btn{
        margin-top:10px;
        color: blueviolet;
        background-color:skyblue;
    }

`
const typeOptions = [
    { label: 'noun', value: 'noun' },
    { label: 'verb', value: 'verb' },
    { label: 'adjective', value: 'adjective' },
    { label: 'adverb', value: 'adverb' },
    { label: 'preposition', value: 'preposition' },
    { label: 'conjunction', value: 'conjunction' }
]

const AddWordPage = () => {

    const { vocabController } = useContext(AppContext);

    const { addVocab } = vocabController;

    const [word, setWord] = useState('kid');
    const [types, setType] = useState(['noun']);
    const [meanings, setMeaning] = useState('เด็ก');

    const handleClick = () => {

        addVocab(word, types, meanings);

        notification['success']({
            message: "Yeah!",
            description: "Added a word"
        })
    }

    return (

        <StyledWrapper>
            <h1>Add na</h1>
            <div>

                <center>
                    <Image width={400} src={logo} />
                </center>
                <div>
                    <Divider orientation="left">Add Word</Divider>
                    <div>
                        <label htmlFor="word-input">
                            Word:
            <Input id="word-input" value={word} placeholder="English word"
                                onChange={(e) => { setWord(e.target.value) }} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Type:
            <Select id='select-types' value={types} className="select-types" options={typeOptions} mode="multiple"
                                placeholder="Select type..." onChange={(value) => { setType(value) }} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="meaning-input">
                            Meaning:
            <Input id="meaning-input" value={meanings} placeholder="What is meaning"
                                onChange={(e) => { setMeaning(e.target.value) }} />
                        </label>
                    </div>
                    <p>
                        <Button className="btn" onClick={handleClick}>Add Vocab</Button>
                    </p>
                </div>
            </div>
        </StyledWrapper>
    )
}

export default AddWordPage
