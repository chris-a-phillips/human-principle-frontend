import { React, useState, useEffect} from 'react';
import History from '../../components/History';
import ProfileInfo from '../../components/ProfileInfo';
import { ProfileWrapper } from './ProfileElements';
const axios = require('axios');

const Profile = ({ token, user }) => {
	const [userData, setUserData] = useState('');
	const principleURL = 'http://localhost:8000/principles/';

	useEffect(() => {
		axios({
			method: 'get',
			url: principleURL,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setUserData(res.data)
		});
		}, []);


    return (
		<ProfileWrapper>
			<ProfileInfo userData={userData} token={token} user={user}/>
			<History userData={userData} />
		</ProfileWrapper>
	);
};

export default Profile;