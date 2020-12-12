import React from 'react';
import History from '../../components/History';
import ProfileInfo from '../../components/ProfileInfo';
import { ProfileWrapper } from './ProfileElements';

const Profile = ({ user, token }) => {
    return (
		<ProfileWrapper>
			<ProfileInfo user={user} token={token} />
			<History user={user} token={token} />
		</ProfileWrapper>
	);
};

export default Profile;