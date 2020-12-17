import { React, useState, useEffect } from 'react';
import { ProfileCard, ProfileH1, ProfileH2, ProfileH3, ProfileImgContainer, ProfileInfoWrapper, ProfileWhiteSpace } from './ProfileInfoElements';
import axios from 'axios'

const ProfileInfo = ({ token }) => {
    const [userProfile, setUserProfile] = useState({
        email: "",
        name: "",
    });
    const personalURL = 'http://localhost:8000/users/me/';

    useEffect(() => {	
		axios({
			method: 'get',
			url: personalURL,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setUserProfile({
				email: res.data.email,
				name: res.data.name,
			});
		});
    }, [])

    return (
		<ProfileInfoWrapper>
            <ProfileImgContainer></ProfileImgContainer>
            <ProfileCard>
                <ProfileH1>Name: {userProfile.name}</ProfileH1>
                <ProfileH2>Email: {userProfile.email}</ProfileH2>
            </ProfileCard>
            <ProfileWhiteSpace></ProfileWhiteSpace>
		</ProfileInfoWrapper>
	);
};

export default ProfileInfo;