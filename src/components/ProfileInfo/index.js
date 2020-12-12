import { React, useState, useEffect } from 'react';
import { ProfileInfoWrapper } from './ProfileInfoElements';
const axios = require('axios')

const ProfileInfo = ({ user, token }) => {
    const [test, setTest] = useState()
    const url = 'http://localhost:8000/members';

    useEffect(() => {
        axios({
            method: 'post',
            url: url
        })
    }, [])

    if (test===null) {
        return null
    }


    return (
        <ProfileInfoWrapper>
            ProfileInfo
            {user}
            {test}
        </ProfileInfoWrapper>
    );
};

export default ProfileInfo;