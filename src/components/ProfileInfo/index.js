import { React, useState, useEffect } from 'react';
import { ProfileCard, ProfileH1, ProfileH2, ProfileH3, ProfileImgContainer, ProfileInfoWrapper } from './ProfileInfoElements';
import axios from 'axios'
import Goals from '../ProfileGoals';

const ProfileInfo = ({ token, user }) => {
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: "",
    	team: "",
        department: "",
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
                <ProfileH1>Name: {userProfile.name}</ProfileH1>
                <ProfileH2>Email: {userProfile.email}</ProfileH2>
                <ProfileH3>Department: {userProfile.Department}</ProfileH3>
                <ProfileH3>Team: {userProfile.team}</ProfileH3>
            </ProfileCard>
            <Goals token={token} user={user}/>
		</ProfileInfoWrapper>
	);
};

export default ProfileInfo;