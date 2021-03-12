import React from 'react';
import styled from 'styled-components'

function ChatMessage(props) {
    return (
        <Container>
            <UserAvatar>
                <img src={props.image} alt="User"/>
            </UserAvatar>
            <MessageContent>
                <Name>
                   {props.name}
                   <span>{new Date(props.timeStamp.toDate()).toUTCString()}</span> 
                </Name>
                <Text>
                    {props.text}
                </Text>
            </MessageContent>
        </Container>
    );
}

export default ChatMessage;

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

    :hover {
        background: #d3d3d3;
    }
`
const UserAvatar = styled.div`
    width: 36px;
    height: 36px:
    border-radius: 2px;
    margin-right: 8px;
    overflow: hidden;
    
    img {
        width: 100%
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Text = styled.span`

`
const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;

    span {
        font-weight: 400;
        color: rgb(97, 96, 97);
        margin-left: 8px;
        font-size: 13px;
    }
`