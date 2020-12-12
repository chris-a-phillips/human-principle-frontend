import { React, useState, useEffect } from 'react';
import { ProfileInfoWrapper } from './ProfileInfoElements';

const ProfileInfo = ({ user, token }) => {


    return (
        <ProfileInfoWrapper>
            ProfileInfo
            {user}
        </ProfileInfoWrapper>
    );
};

export default ProfileInfo;