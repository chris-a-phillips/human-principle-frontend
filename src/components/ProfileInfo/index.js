import { React, } from 'react';
// import { UserContext } from '../UserContext';
import { ProfileInfoWrapper } from './ProfileInfoElements';
// const axios = require('axios')

const ProfileInfo = ({ user, token }) => {
    // const user = useContext(UserContext)
    // const token = useContext(UserContext)
    // const [test, setTest] = useState()
    // const url = 'http://localhost:8000/members';

    // useEffect(() => {
    //     axios({
    //         method: 'post',
    //         url: url
    //     })
    // }, [])

    // if (test===null) {
    //     return null
    // }


    return (
        <ProfileInfoWrapper>
            ProfileInfo
            {user}
            {token}
        </ProfileInfoWrapper>
    );
};

export default ProfileInfo;