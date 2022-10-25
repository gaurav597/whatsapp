import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import { SearchOutlined } from "@material-ui/icons";
import { contactList } from "./mockData";
import SidebarChat from "./SidebarChat";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        {/* <Avatar src={"/logo192.png"} /> */}
        <p className="header_heading">Chats</p>
        <div className="sidebar_headerRight">
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        {/* <SidebarChat addNewChat /> */}
        {contactList.map((userData) => (
          <SidebarChat userData={userData} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
