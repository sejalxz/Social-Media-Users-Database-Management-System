import "./rightbar.css"
import {Users} from "../../PplPosts"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar= () =>{
        return(
            <>
            <div className="bdayCont">
            <img className="bdayImg" src="/assets/surprise.png" alt="" />
            <span className="bdayText">
                <b>Veena, Sejal and Bipali</b> wished you!
            </span>
        </div>
        <img src="/assets/enjm.gif" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFrndList">
            {Users.map(u=>(
                <Online key={u.id} user={u}/>
            ))}
            </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return(
            <>
            <h4 className="rightbarTitle">User Info</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Places Lived:</span>
                    <span className="rightbarInfoKey">Tabuk, Saudi Arabia</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">About:</span>
                    <span className="rightbarInfoKeys"><b>Add something!</b></span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Contact:</span>
                    <span className="rightbarInfoKey">@nashiaxz</span>
                </div>
            </div>
            <h4 className="rightbarTitle">Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={`${PF}posts/4.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Samiya</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : <HomeRightbar />}
                {/* <div className="bdayCont">
                    <img className="bdayImg" src="/assets/surprise.png" alt="" />
                    <span className="bdayText">
                        <b>Veena, Sejal and Bipali</b> wished you!
                    </span>
                </div>
                <img src="/assets/enjm.gif" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFrndList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))} */}
                     {/* <li className="rightbarFrnd">
                        <div className="rightbarPfP">
                            <img src="/assets/posts/3.jpg" alt="" className="rightbarpfpImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Samiya Khan</span>
                    </li>
                    <li className="rightbarFrnd">
                        <div className="rightbarPfP">
                            <img src="/assets/posts/1.jpg" alt="" className="rightbarpfpImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Dip Mendel</span>
                    </li>
                    <li className="rightbarFrnd">
                        <div className="rightbarPfP">
                            <img src="/assets/posts/5.jpg" alt="" className="rightbarpfpImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Sejal Dahake</span>
                    </li>
                    <li className="rightbarFrnd">
                        <div className="rightbarPfP">
                            <img src="/assets/posts/4.jpg" alt="" className="rightbarpfpImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Veena Gayathri</span>
                    </li>
                    <li className="rightbarFrnd">
                        <div className="rightbarPfP">
                            <img src="/assets/posts/2.webp" alt="" className="rightbarpfpImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Bipali Gade</span>
                    </li> */}
                {/* </ul>  */}

            </div>
        </div>
    )
}
