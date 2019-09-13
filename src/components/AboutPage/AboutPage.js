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
        This about page is for anyone to read!
        Here is some cool sleepy time things!
      </p>
      <Button onClick = {() => {props.history.push('/home')}} variant = "contained" color = "primary">Back</Button>
    </div>
  </div>
);

export default AboutPage;
