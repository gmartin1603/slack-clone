import React, { useState } from 'react';
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput(props) {

    const [input, setInput] = useState('')

    const clearInput = () => {
        setInput('')
    }

    const send = (e) => {
        e.preventDefault();
        if (!input) return
        props.sendMessage(input)
        clearInput();
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input
                    value={input} 
                    type="text" 
                    placeholder="Message here...."
                    onChange={(e) => setInput(e.target.value)}
                    />
                    <SendButton
                    type='submit' 
                    onClick={send}>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    );
}

export default ChatInput;

const Container = styled.div`
    padding: 24px 20px;
`
const InputContainer = styled.div`
    border: 1px solid #8d8d8e;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding: 0 10px;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input:focus {
            outline: none;
        }


    }
`
const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #148567
    }

`

const Send = styled(SendIcon)`
    color: #d9d9d9;
`