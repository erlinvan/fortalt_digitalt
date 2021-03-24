import React from "react";
import { useTranslation } from "react-i18next";

// Components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import QuestionsAndOptions from "./QuestionAndOptions";

// Styling
import { makeStyles } from "@material-ui/core/styles";

// Data
import Data from "../data.json";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function Content() {
  const classes = useStyles();
  const [choiceOne, setChoiceOne] = React.useState("");
  const [choiceTwo, setChoiceTwo] = React.useState("");
  const [choiceThree, setChoiceThree] = React.useState("");
  const { t, i18n } = useTranslation();

  console.log(choiceOne);
  const data = Data;
  console.log(data);
  return (
    <Card className={classes.root}>
      <CardContent>

        {choiceOne === "" && (
          <QuestionsAndOptions choice={choiceOne} setChoice={setChoiceOne} data={data.tidsspm}></QuestionsAndOptions>
        )}
        {choiceOne === "Nå!" && choiceTwo === "" &&(
          <QuestionsAndOptions choice={choiceTwo} setChoice={setChoiceTwo} data={data.choiceOne}></QuestionsAndOptions>
        )}
        {choiceOne === "Planlegge til senere" && choiceTwo === "" &&(
          <QuestionsAndOptions choice={choiceTwo} setChoice={setChoiceTwo} data={data.choiceOne}></QuestionsAndOptions>
        )}
        {choiceTwo === "Tur" && choiceThree === "" && (
          <QuestionsAndOptions choice={choiceThree} setChoice={setChoiceThree} data={data.turValg}></QuestionsAndOptions>
        )}
        {choiceTwo === "Tur" && choiceThree === "Kort" && <h4> her står det noe om korte turere</h4>}
        
        {choiceTwo === "Spise ute" && choiceThree === "" && (
          <QuestionsAndOptions choice={choiceThree} setChoice={setChoiceThree} data={data.spisesteder}></QuestionsAndOptions>
        )}
        {choiceTwo === "Spise ute" && choiceThree === "Byens billigste øl!" && <h4> Superhero Pizza og Samfundet</h4>}
        {choiceTwo === "Spise ute" && choiceThree === "Fancy, men rimelig mat" && <h4> Edoramen og Le Bistro</h4>}
        {choiceTwo === "Spise ute" && choiceThree === "Bar med aktiviteter" && <h4> Trondheim Camping og Work-Work</h4>}
        
        {choiceTwo === "Kulturopplevelser" && choiceThree === "" && (
          <QuestionsAndOptions choice={choiceThree} setChoice={setChoiceThree} data={data.kultur}></QuestionsAndOptions>
        )}
        {choiceTwo === "Kulturopplevelser" && choiceThree === "Museum" && <h4> Ringve og Rockheim</h4>}
        {choiceTwo === "Kulturopplevelser" && choiceThree === "Historiske steder" && <h4> Historisk tur? </h4>}
        {choiceTwo === "Kulturopplevelser" && choiceThree === "Noe utenom det vanlige" && <h4> idk </h4>}
        
        {choiceOne === "Planlegge til senere" && choiceTwo === "Sport" && choiceThree === "" && (
          <QuestionsAndOptions choice={choiceThree} setChoice={setChoiceThree} data={data.sport}></QuestionsAndOptions>
        )}
        {choiceOne === "Nå!" && choiceTwo === "Sport" && choiceThree === "" && (
          <QuestionsAndOptions choice={choiceThree} setChoice={setChoiceThree} data={data.sport2}></QuestionsAndOptions>
        )}
        {choiceTwo === "Sport" && choiceThree === "NTNU Idrett" && <h4> Her kommer info om NTNUI</h4>}
        {choiceTwo === "Sport" && choiceThree === "Ski" && <h4> Noen fine skiturer om vinteren </h4>}
        {choiceTwo === "Sport" && choiceThree === "Diskgolf" && <h4> Peker ut diskgolfbaner! </h4>}
        {choiceTwo === "Sport" && choiceThree === "Golf" && <h4> Billig golfmedlemskap </h4>}
        {choiceTwo === "Sport" && choiceThree === "Pirbadet" && <h4> Pirbadet info </h4>}

      </CardContent>
    </Card>
  );
}

export default Content;
