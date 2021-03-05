import InboxIcon from '@material-ui/icons/Inbox';
import MessageIcon from '@material-ui/icons/Message';
import DraftsIcon from '@material-ui/icons/Drafts';
import { BookmarkBorder } from '@material-ui/icons';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

export const sidebarItems = [
    {
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        icon: <InboxIcon/>,
        text: "All DMs"
    },
    {
        icon: <DraftsIcon/>,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorder/>,
        text: "Saved Items"
    },
    {
        icon: <PeopleIcon/>,
        text: "People & Groupds"
    },
    {
        icon: <AppsIcon/>,
        text: "More"
    },
]

export const channelItems = [
    {
        icon: "#",
        text: "Announcments"
    },
    {
        icon: "#",
        text: "General"
    },
    {
        icon: "#",
        text: "Help"
    },
    {
        icon: "#",
        text: "100 days of code"
    },
]