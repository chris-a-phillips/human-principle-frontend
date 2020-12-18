import { React, useState, useEffect } from 'react';
import { ProfileCard, ProfileH1, ProfileH2, ProfileH3, ProfileImgContainer, ProfileInfoWrapper } from './ProfileInfoElements';
import axios from 'axios'
import Goals from '../ProfileGoals';

const ProfileInfo = ({ token, user }) => {
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: ""
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
				name: res.data.name,
				email: res.data.email,
				team: res.data.team,
				department: res.data.department,
			});
		});
    }, [])

    return (
		<ProfileInfoWrapper>
            <ProfileImgContainer></ProfileImgContainer>
            <ProfileCard>
                <ProfileH1>Name:<br/>{userProfile.name}</ProfileH1>
                <ProfileH2>Email:<br/>{userProfile.email}</ProfileH2>
            </ProfileCard>
            <Goals token={token} user={user}/>
		</ProfileInfoWrapper>
	);
};

export default ProfileInfo;