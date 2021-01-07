import { React, useState, useEffect} from 'react';
import History from '../../components/History';
import ProfileInfo from '../../components/ProfileInfo';
import { ProfileWrapper } from './ProfileElements';
import axios from 'axios'
import { APIURL } from '../../config';


const Profile = ({ token, user }) => {
	const [userData, setUserData] = useState('');
	const principleURL = `${APIURL}/principles/`;

	useEffect(() => {
		axios({
			method: 'get',
			url: principleURL,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setUserData(res.data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


    return (
		<ProfileWrapper>
			<ProfileInfo userData={userData} token={token} user={user}/>
			<History userData={userData} />
		</ProfileWrapper>
	);
};

export default Profile;