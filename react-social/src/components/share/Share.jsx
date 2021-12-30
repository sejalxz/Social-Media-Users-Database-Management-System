import "./share.css"
import {PermMedia, Label, LocationOn, SentimentSatisfied } from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="sharedPfP" src="/assets/posts/12.jpg" alt="" />
                    <input placeholder="What's up Laosha?" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom ">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon"/>
                            <span className="ShareOptxt">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <LocationOn htmlColor="tomato" className="shareIcon"/>
                            <span className="ShareOptxt">Location</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="orange" className="shareIcon"/>
                            <span className="ShareOptxt">Tag</span>
                        </div>
                        <div className="shareOption">
                            <SentimentSatisfied  htmlColor="brown" className="shareIcon"/>
                            <span className="ShareOptxt">Activity</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
