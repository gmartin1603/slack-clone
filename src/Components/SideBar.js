import React from 'react';
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';

function SideBar(props) {

    const addChannel = () => {
        const promptName = prompt("Enter Channel Name")
        if (promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Clever Programmer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannel>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel} />
                </NewChannel>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel>
                                # {item.name}
                            </Channel>

                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>

        </Container>
    );
}

export default SideBar;

const Container = styled.div`
    background: #3F0E40
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div`

`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    :hover {
        background: white;
        color: #3f0e40;
    }
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350d36;
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188, 171, 188);
    margin: 10px 0;
`

const NewChannel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding: 0 19px;
    cursor: pointer;
    :hover {
        background: #350d36;
    }
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding: 0 19px;
    cursor: pointer;
    :hover {
        background: #350d36;
    }
`