import React from 'react';
import { HistoryWrapper } from './HistoryElements';

const History = ({ user, token, userData }) => {
    let mentalData = []
    let physicalData = []
    let emotionalData = []

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].questionnaire_type === 'Mental') {
            mentalData.push(userData[i])
        } else if (userData[i].questionnaire_type === 'Physical') {
            physicalData.push(userData[i]);
		} else if (userData[i].questionnaire_type === 'Emotional') {
            emotionalData.push(userData[i]);
		}
    }

    console.log(mentalData)
    console.log(physicalData)
    console.log(emotionalData)
    
    if (userData === null) {
        return null
    }

    return (
        <HistoryWrapper>
            History<br/>
            Mental
            {mentalData.map((data) => {
                return(
                    <div key={data.id}>
                        
                        {data.email}<br/>
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
            Physical
            {physicalData.map((data) => {
                return(
                    <div key={data.id}>
                        
                        {data.email}<br/>
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
            Emotional
            {emotionalData.map((data) => {
                return(
                    <div key={data.id}>
                        
                        {data.email}<br/>
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