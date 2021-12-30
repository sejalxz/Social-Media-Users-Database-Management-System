import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbarcont">
            <div className="topbarL">
                <span className="logo">
                    Interact++
                </span>
            </div>
            <div className="topbarC">
                <div className="searchbar">
                    <Search className="searchicon"/>
                    <input placeholder="Search for Friends or Posts" className="search" />
                </div>
            </div>
            <div className="topbarR">
                <div className="tblink">
                    <span className="tblink">Home</span>
                    <span className="tblink">Timeline</span>
                </div>
                <div className="tbicons">
                    <div className="tbiconitem">
                        <Person/>
                        <span className="tbiconbadge">3</span>
                    </div>
                    <div className="tbiconitem">
                        <Chat/>
                        <span className="tbiconbadge">2</span>
                    </div>
                    <div className="tbiconitem">
                        <Notifications/>
                        <span className="tbiconbadge">1</span>
                    </div>
                </div>
                <img src="/assets/posts/12.jpg" alt="" className="topbarimg" />
            </div>
        </div>
    )
}
