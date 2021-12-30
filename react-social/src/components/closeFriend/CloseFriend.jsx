import "./closeFriend.css"

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="leftbarFrnd">
            <img className="leftbarFrndImg" src={PF+user.profilePicture} alt="" />
             <span className="leftbarFrndName">{user.username}</span>
        </li>
    )
}
