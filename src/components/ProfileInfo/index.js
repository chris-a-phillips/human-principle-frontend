import { React } from 'react';
// import { UserContext } from '../UserContext';
import { ProfileInfoWrapper } from './ProfileInfoElements';

const ProfileInfo = ({ user, token, userData }) => {
    // const user = useContext(UserContext)
    // const token = useContext(UserContext)
    console.log(userData)

    return (
        <ProfileInfoWrapper>
            ProfileInfo
            {user}
            {token}
        </ProfileInfoWrapper>
    );
};

export default ProfileInfo;