import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const AboutUs = () => {
  return (
    <Paper elevation={3} sx={{ padding: '2rem' }}>
      <div>
        <Typography variant="h4" component="h1" gutterBottom>
          About Mix Masters
        </Typography>
        <Typography variant="body1" gutterBottom>
          Covid-19 brought much of the world to a halt, especially in
          metropolitan areas such as New York City. Little did we know, the
          silver lining would be an age of innovation and creativity,
          specifically in the realm of food and drink. Considering the shutdown
          of businesses and public activities came early in the year 2020, and
          in the shadow of the 2019 holiday season, some of us had New Year's
          resolutions to eat right and regain the physiques we all covet once
          the weather was warm enough to show it off. However, while drinking
          would be curtailed on any diet regimen, it seemed that making tasty
          libations while not breaking the dietary bank was an optimal project!
          This is the spawning of Keto Cocktails and the birth of Mix Masters.
          We have carefully handcrafted each drink and ensured that recipes were
          thorough and clear so that if anyone wishes to recreate these
          guilt-free cocktails, they can! Now that we have the knowledge of
          full-stack web applications and software development, we can bring our
          delicious body of work to the world! While Keto Cocktails are the
          backbone of Mix Masters, the possibilities are endless with this
          interactive tool; users can create their own drink recipes, save them
          to the site, and keep a record of each drink they post. This will aid
          in idea sharing and grow the cocktail industry so that homemade
          mixologists can be the next hit at any party or gathering! Social
          distancing might be a way of the past, but Mix Masters is the wave of
          the future!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here are a few things about Mix Masters:
        </Typography>
        <List sx={{ marginLeft: '2rem' }}>
          <ListItem>
            <ListItemText primary="We are bringing unique cocktail menus to the world - low sugar/carb 'Keto Cocktails,' as well as others" />
          </ListItem>
          <ListItem>
            <ListItemText primary="The main objective is to bring everyone together through idea-sharing, starting with the web application interface and culminating by fleshing them out at social gatherings. Just find the cocktail recipe that best suits the theme of whichever party you're going to, and with the help of Mix Masters, you'll be the hit of the night!" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Ingredients are brand-specific, so while some substitutions might work very well, change the recipe at your own discretion - Mix Masters cannot guarantee that the modified drink will be to the quality standard that they have set for themselves." />
          </ListItem>
        </List>
        <Typography variant="body1" gutterBottom>
          If you have any questions or would like to connect, feel free to reach
          out to us by emailing mixmasters2023@gmail.com.
        </Typography>
      </div>
    </Paper>
  );
};

export default AboutUs;
