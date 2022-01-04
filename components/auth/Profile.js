import React, { useContext } from "react";

import MyWebContext from '../../store';

const Profile = () => {
    const myWebCtx = useContext(MyWebContext);

    return (
        <React.Fragment>
            {myWebCtx.user ? (
                <div className="container text-secondary">
                    <h1>个人主页</h1>
                    <hr />
                    <h2>{myWebCtx.user.uid}</h2>
                    <h2>{myWebCtx.user.displayName}</h2>
                    <h2>{myWebCtx.user.pwd}</h2>
                </div>
            ) : (
                <h1></h1>
            )}
        </React.Fragment>
    )
}

export default Profile;
