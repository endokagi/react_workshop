import React from 'react'
import styled from 'styled-components'
import { Space, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

const StyledWrapper = styled.div`
.delete-icon{
    color: red;
    cursor: pointer;
    text-align: right;
}

.top{
    box-shadow:5px 5px 5px gray;

}

margin-right: auto;
margin-left: auto;
`

const WordCard = ({ word, types, meanings, onDelete }) => {

    return (
        <StyledWrapper>
            <Space direction="vertical top">
                <Card title={word}>
                    <p>{types.join(", ")}</p>
                    <p>{meanings.join(", ")}</p>
                    <div>
                        <DeleteOutlined className="delete-icon"
                            onClick={onDelete} />
                    </div>
                </Card>
            </Space>
        </StyledWrapper>
    )
}

export default WordCard

