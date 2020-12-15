import React from 'react';
import { HistoryWrapper } from './HistoryElements';

const History = ({ user, token, userData }) => {
    // const mentalData = userData.hasOwnProperty('question_one')
    // const physicalData = userData.
    // const emotionalData = userData.

    if (userData === null) {
        return null
    }

    // console.log(mentalData)

    return (
        <HistoryWrapper>
            History
            {userData.map((data) => {
                return(
                    <div key={data.id}>
                        {data.question_one}
                        {data.question_two}
                        {data.question_three}
                        {data.question_four}
                        {data.question_five}
                        {data.question_six}
                        {data.question_seven}
                    </div>
                )
            })}
        </HistoryWrapper>
    );
};

export default History;