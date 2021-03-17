import React from "react";
import { useTranslation } from 'react-i18next';

// Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import QuestionsAndOptions from "./QuestionAndOptions";

// Styling
import { makeStyles } from '@material-ui/core/styles';

// Data
import Data from "../data.json";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2)
    }
}));

function Content() {
	const classes = useStyles();
	const [choiceOne, setChoiceOne] = React.useState("");
	const [choiceTwo, setChoiceTwo] = React.useState("");
	const {t, i18n} = useTranslation();
  
	console.log(choiceOne);
	const data = Data;
	console.log(data);
	return (
		<Card className={classes.root}>
			<CardContent>
				{choiceOne === "" ? (
				<QuestionsAndOptions
					choiceOne={choiceOne}
					setChoiceOne={setChoiceOne}
					data={data.choiceTwo}
				></QuestionsAndOptions>
				) : (
				<h3> du har valgt {choiceOne}</h3>
				)}
			</CardContent>
		</Card>
	);
  }

  export default Content;