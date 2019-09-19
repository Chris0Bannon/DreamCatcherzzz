import React from 'react';
import Button from '@material-ui/core/Button';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = (props) => (
  <div>
    <div>
      <p>
        Sleep is an incredibly important part of our lives, but we know so little about it!
        This application is designed to help you identify trends in your habits that affect your sleep
        and also trends in the quality of your sleep.
        Here is some cool sleepy time things!
      </p>
      <Button onClick = {() => {props.history.push('/home')}} variant = "contained" color = "primary">Back</Button>
    </div>
  </div>
);

export default AboutPage;
