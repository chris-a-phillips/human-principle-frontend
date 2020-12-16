import { React, useState, useEffect } from 'react';
import { ProfileCard, ProfileH1, ProfileH2, ProfileH3, ProfileImgContainer, ProfileInfoWrapper, ProfileWhiteSpace } from './ProfileInfoElements';
import axios from 'axios'

const ProfileInfo = ({ user, token, userData }) => {
    const [userProfile, setUserProfile] = useState({
        department: "",
        email: "",
        name: "",
        team: ""
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
			console.log(res);
			setUserProfile({
				department: res.data.department,
				email: res.data.email,
				name: res.data.name,
				team: res.data.team,
			});
		});
    }, [])


    console.log(userData)

    return (
		<ProfileInfoWrapper>
            <ProfileImgContainer></ProfileImgContainer>
            <ProfileCard>
                <ProfileH1>Name: {userProfile.name}</ProfileH1>
                <ProfileH2>Email: {userProfile.email}</ProfileH2>
                <ProfileH3>Department: {userProfile.department}</ProfileH3>
                <ProfileH3>Team: {userProfile.team}</ProfileH3>
            </ProfileCard>
            <ProfileWhiteSpace></ProfileWhiteSpace>
		</ProfileInfoWrapper>
	);
};

export default ProfileInfo;