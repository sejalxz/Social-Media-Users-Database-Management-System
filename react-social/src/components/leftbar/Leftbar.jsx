import "./leftbar.css"
import {DynamicFeed, PeopleRounded,OndemandVideoRounded, GroupWork, BookmarkBorderSharp,Toys } from "@material-ui/icons"
import {Users} from "../../PplPosts"
import CloseFriend from "../closeFriend/CloseFriend"

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftBarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <DynamicFeed className="leftbarIcon"/>
                        <span className="leftbartxt">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <PeopleRounded className="leftbarIcon"/>
                        <span className="leftbartxt">Friends</span>
                    </li>
                    <li className="leftbarListItem">
                        <OndemandVideoRounded className="leftbarIcon"/>
                        <span className="leftbartxt">Vdos</span>
                    </li>
                    <li className="leftbarListItem">
                        <GroupWork className="leftbarIcon"/>
                        <span className="leftbartxt">Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <BookmarkBorderSharp className="leftbarIcon"/>
                        <span className="leftbartxt">Saved</span>
                    </li>
                    <li className="leftbarListItem">
                        <Toys className="leftbarIcon"/>
                        <span className="leftbartxt">Play Games</span>
                    </li>
                </ul>
                <button className="leftbarButton">More</button>
                <hr className="leftbarHr"/>
                <ul className="sidebarFrndList">
                    {Users.map((u)=>(
                        <CloseFriend key={u.id} user= {u}/>
                    ))}
                   
                </ul>
            </div>
        </div>
    )
}

