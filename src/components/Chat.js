import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerInfo">
          <h3 className="chat-room-name">Alice Whitman</h3>
          <p className="chat-room-last-seen">Online </p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <VideocamOutlinedIcon />
          </IconButton>
          <IconButton>
            <PhoneOutlinedIcon />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <img className="ProfileIcon" src={"/jeff.jpeg"} />
          {/* <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton> */}
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          Ok!
          <span className="chat_timestemp">11:59 AM</span>
        </p>
        <p className={`chat_message ${"chat_receiver"}`}>
          Here are all the backgrounds. Let me know your favourite!
          <span className="chat_timestemp">11:59 AM</span>
        </p>
        <p style={{ color: "grey", paddingLeft: "380px", fontSize: "20px" }}>
          Today
        </p>
        <p className="chat_message">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ width: "200px", height: "100px" }}
              src={"https://picsum.photos/200"}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>This is beautiful! </p>
            <p style={{ fontSize: "10px", paddingTop: "10px" }}> 11:59 AM</p>
          </div>
          {/* <span className="chat_timestemp">11:59 AM</span> */}
        </p>
        <p className={`chat_message ${"chat_receiver"}`}>
          Yes that's my fave too
          <span className="chat_timestemp">11:59 AM</span>
        </p>
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit"> Send a Message</button>
        </form>
        <IconButton>
          <SendOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
