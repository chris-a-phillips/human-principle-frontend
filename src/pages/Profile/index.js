import React from 'react';
import History from '../../components/History';
import ProfileInfo from '../../components/ProfileInfo';
import { ProfileWrapper } from './ProfileElements';

const Profile = () => {
    return (
		<ProfileWrapper>
			<ProfileInfo />
			<History />
		</ProfileWrapper>
	);
};

export default Profile;