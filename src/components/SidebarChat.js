import { Avatar } from "@material-ui/core";
import { BorderAllRounded } from "@material-ui/icons";
import "./SidebarChat.css";

function SidebarChat(props) {
  const { userData } = props;
  const bcolor = userData.id === 5 ? "#99b3ff" : "white";
  return (
    <div className="ContactItem" style={{ backgroundColor: bcolor }}>
      <img className="ProfileIcon" src={userData.profilePic} />
      <div className="ContactInfo">
        <span className="ContactName">{userData.name}</span>
        {userData.id === 4 || userData.id === 7 ? (
          <span style={{ color: "#1a53ff" }} className="MessageText">
            typing....
          </span>
        ) : (
          <span className="MessageText">{userData.lastText}</span>
        )}
      </div>
      {userData.id === 1 || userData.id === 2 ? (
        <span className="MessageTime">
          <p style={{ color: "blue" }}>{userData.lastTextTime}</p>
          <p
            style={{
              backgroundColor: "blue",
              marginLeft: "15px",
              paddingLeft: "4px",
              width: "12px",
              borderRadius: "50%",
              color: "white",
            }}
          >
            1
          </p>
        </span>
      ) : (
        <span className="MessageTime">
          <p>{userData.lastTextTime}</p>
        </span>
      )}
    </div>
    // <div style={{ backgroundColor: bcolor }} className="sidebarChat">
    //   <Avatar src={userData.profilePic} />
    //   <div className="sidebarChat_info">
    //     <h2>{userData.name}</h2>
    //     <div style={{ display: "flex" }}>
    //       <div>{userData.lastText}</div>
    //       <div style={{ justifyContent: "flex-end" }}>
    //         {userData.lastTextTime}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default SidebarChat;
