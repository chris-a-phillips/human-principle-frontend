import { React, useState, useEffect } from 'react';
import { ProfileCard, ProfileH1, ProfileH2, ProfileImgContainer, ProfileInfoWrapper } from './ProfileInfoElements';
import axios from 'axios'
import Goals from '../ProfileGoals';
import { APIURL } from '../../config';


const ProfileInfo = ({ token, user }) => {
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: ""
    });
    const personalURL = `${APIURL}/users/me/`;

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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