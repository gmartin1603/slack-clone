import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import firebase from 'firebase'
import { useParams } from 'react-router';

function Chat(props) {

    let { channelId } = useParams()
    const [channel, setChannel] = useState({})
    const [messages, setMessages] = useState([])

    const getChannel = () => {
        db.collection('rooms').doc(channelId)
        .onSnapshot((snapShot) => {
            setChannel(snapShot.data())
        })
    }

    const sendMessage = (text) => {
        if (channelId) {
            let payload = {
                text: text,
                user: props.user.name,
                image: props.user.photo,
                dateStamp: firebase.firestore.Timestamp.now()
            }
            db.collection('rooms')
            .doc(channelId.toString())
            .collection('messages')
            .add(payload)
        }
    }

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('dateStamp', 'asc')
        .get()
        .then((snapShot) => {
            let messages = snapShot.docs.map((doc) => doc.data())
            setMessages(messages)
        })
    }

   useEffect(() => {
        getChannel()
        getMessages()
   }, [channelId, messages])
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel && channel.name}
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

                {
                    messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage
                        text={data.text}
                        name={data.user}
                        image={data.image}
                        timeStamp={data.dateStamp}
                        />
                    ))
                }
                
            </MessageContainer>
            <ChatInput sendMessage={sendMessage}/>
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
    overflow: scroll;
    max-height: 72vh;

    ::-webkit-scrollbar {
        display: none;
    }
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