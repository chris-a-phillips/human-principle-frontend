import React from 'react';
import { ChartContainer, HistoryWrapper } from './HistoryElements';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

const History = ({ userData }) => {
	let mentalData = [];
	let physicalData = [];
    let emotionalData = [];
	let responseDates = []
    
    for (let i = 0; i < userData.length; i++) {
		console.log()
		if (
			!responseDates.some(
				(responseDates) =>
					Date(userData[i].date).slice(0, 15) ===
					responseDates.label
			)
		) {
			responseDates.push({
				label: Date(userData.date).slice(0, 15),
			});
		} 
    }

	console.log(physicalData)

	for (let i = 0; i < userData.length; i++) {
		if (userData[i].questionnaire_type === 'Mental') {
			mentalData.push({
				value:
					(userData[i].question_one +
						userData[i].question_two +
						userData[i].question_three +
						userData[i].question_four +
						userData[i].question_five +
						userData[i].question_six +
						userData[i].question_seven) /
					7,
			});
		} else if (userData[i].questionnaire_type === 'Physical') {
			physicalData.push({
				value:
					(userData[i].question_one +
						userData[i].question_two +
						userData[i].question_three +
						userData[i].question_four +
						userData[i].question_five +
						userData[i].question_six +
						userData[i].question_seven) /
					7,
			});
		} else if (userData[i].questionnaire_type === 'Emotional') {
			emotionalData.push({
				value:
					(userData[i].question_one +
						userData[i].question_two +
						userData[i].question_three +
						userData[i].question_four +
						userData[i].question_five +
						userData[i].question_six +
						userData[i].question_seven) /
					7,
			});
		}
	}

	charts(FusionCharts);

	const dataSource = {
		chart: {
			caption: `History of Questionnaire Responses`,
			yaxisname: 'Averate Response Answer',
			// subcaption: '2012-2016',
			showhovereffect: '1',
			numbersuffix: '/10',
			drawcrossline: '1',
			plottooltext: '<b>$dataValue</b> average rating in $seriesName',
			theme: 'fusion',
		},
		categories: [
			{
				category: responseDates
			},
		],
		dataset: [
			{
				seriesname: 'Mental',
				data: mentalData,
			},
			{
				seriesname: 'Physical',
				data: physicalData
			},
			{
				seriesname: 'Emotional',
				data: emotionalData
			},
		],
	};

	if (userData === null) {
		return null;
	}

	return (
		<HistoryWrapper>
			<ChartContainer>
			<ReactFusioncharts
				type='msline'
				width='100%'
				height='60%'
				dataFormat='JSON'
				dataSource={dataSource}
				/>
				</ChartContainer>
		</HistoryWrapper>
	);
};

export default History;
