import { React, useState, useEffect} from 'react';
import History from '../../components/History';
import ProfileInfo from '../../components/ProfileInfo';
import { ProfileWrapper } from './ProfileElements';
const axios = require('axios');

const Profile = ({ user, token }) => {
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
			// console.log(res);
			setUserData(res.data)
		});
		}, []);


    return (
		<ProfileWrapper>
			<ProfileInfo userData={userData} token={token}/>
			<History userData={userData} />
		</ProfileWrapper>
	);
};

export default Profile;