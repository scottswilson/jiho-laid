import React, { useContext, useEffect, useState } from "react";

import moment from "moment"

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@material-ui/core/Typography';

import TheMan from "./jiho.jpg";

// import Game from "./Game";

import styled from "styled-components";

const MyPaper = styled(Paper)`
  padding: 8px;
  background: #eaf4c5;
`;

const WideDiv = styled.div`
  text-align: center
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
`;

const RightDiv = styled.div`
  margin-right: 0;
  margin-left: auto;
`;

const LeftDiv = styled.div`
`;

const JihoImg = styled.img`
  max-width: 100%;
`;


function App() {

  const [countdownString, setCountdownString] = useState("");
  const [percentVal, setPercentVal] = useState(0);
  const [gotWord, setGotWord] = useState("Jihos gettin'");

  const jihoBorn = moment("19960920 12:00:00", "YYYYMMDD h:mm:ss");
  const jihoMarried = moment("20230520 23:30:00", "YYYYMMDD h:mm:ss");

  useEffect(() => {
    const timer = setInterval(() => {
      const jihoTimeLeftString = jihoMarried.fromNow();

      const totalTime = jihoMarried - jihoBorn;
      const nowTime = moment() - jihoBorn;

      const now = nowTime / totalTime * 100;
      setCountdownString(jihoTimeLeftString);
      setPercentVal(now);
      if ((nowTime - totalTime) > 0) {
        setGotWord("Jiho got")
      } else {
        setGotWord("Jihos gettin'")
      }
    }, 500);
  }, []);


  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <MyPaper>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3">
                {gotWord} laid {countdownString}
              </Typography>
              <WideDiv>
                <Grid container>
                  <LeftDiv>
                    {jihoBorn.format('MMM Do YYYY')}
                  </LeftDiv>
                  <RightDiv>
                    {jihoMarried.format('MMM Do YYYY')}
                  </RightDiv>
                </Grid>
                <LinearProgress variant="determinate" value={percentVal} />
              </WideDiv>
              <JihoImg src={TheMan}></JihoImg>
            </Grid>
          </Grid>
        </MyPaper>
      </Grid>
    </Grid>
  );
}

export default App;
