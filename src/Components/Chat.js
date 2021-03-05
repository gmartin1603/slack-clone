import React from 'react';
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

function Chat(props) {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        #Clever
                    </ChannelName>
                    <ChannelInfo>
                        Company channel wide announcments
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage/>
            </MessageContainer>
            <ChatInput/>
        </Container>
    );
}

export default Chat;

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Header = styled.div`
    border-bottom: 1px solid rgba(83, 39, 83, .13);
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MessageContainer = styled.div`

`


const Channel = styled.div`
    
`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060
`

const Info = styled(InfoIcon)`
    margin-left: 10px;
`