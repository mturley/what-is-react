// TODO fill in __STATISTIC__s and __CITATION__s

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import './overrides.css';

const theme = createTheme({
  primary: 'black',
  secondary: 'white',
  tertiary: '#03A9FC', // Blue
  quarternary: '#36D7B7', // Turquoise
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica',
});

// PresenterLog swallows children (mwahaha) and sends them to the JS console on render
const PresenterLog = props => console.log(props.children);
const inline = {
  bold: true,
  style: 'display: inline-block; margin-right: 0.4em; font-size: 1em;'
};

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>

    {/* 1 - What is React? */}
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What is React?
      </Heading>
      <Heading margin="50px 0 0" textColor="tertiary" fit>
        A humble attempt to explain React concepts
      </Heading>
      <Text size={4} textColor="tertiary" fit bold>
        to both programmers and non-programmers
      </Text>
      <Text margin="50px 0 0" textColor="secondary" {...inline}>A talk for Red Hat UXD</Text>
      <Text textColor="tertiary" {...inline}>by Mike Turley</Text>
    </Slide>

    {/* 2 - "React is sych a good idea that..." */}
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <BlockQuote className="smaller">
        <Quote>React is such a good idea that we will spend the rest of the decade continuing to explore its implications and applications.</Quote>
        <Cite>Guillermo Rauch (<a href="https://twitter.com/rauchg/status/801005961334943744">@rauchg</a>)</Cite>
      </BlockQuote>
    </Slide>

    {/* 2 - Why is React such a good idea? */}
    <Slide transition={['fade']} bgColor="primary" textColor="secondary">
      <Heading size={3} caps lineHeight={1} textColor="secondary">
        Why is React<br />
        such a good idea?
      </Heading>
      <Text margin="100px 0 0" textColor="tertiary" fit {...inline}>
        One Word:
      </Text>
      <Text size={1} fit textColor="quarternary" {...inline}>
        Abstraction.
      </Text>
      <Text margin="50px 0 0" textColor="secondary" size={1} fit>
        Developers don't have to work as hard<br />
        to accomplish the same goals.
      </Text>
    </Slide>

    {/* 1 - What is React? */}
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>React is...</Heading>
      <List>
        <ListItem>A JavaScript Framework for making <strong>User Interfaces</strong> (not just web apps).</ListItem>
        <ListItem>
          A paradigm shift from <strong className="imperative">imperative</strong> to
          <strong className="declarative">declarative</strong> and <strong className="functional">functional</strong> programming
        </ListItem>
        <ListItem>Not the only one (<strong>Vue</strong> is pretty cool too), but the "best" implementation so far of a this new paradigm.</ListItem>
        <ListItem>A way to not ever think about DOM manipulation again.</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>

    {/* "Document with behavior" code vs "Document code" + "Behavior code" */}

    {/* The future is declarative markup. It might not be React, but it will be better than HTML. */}

    {/*
      JSX is like Handlebars with Brains
    */}

    {/*
      Quick Context --- The simplest concept in Programming
      "What is a Function?"
      A repeatable set of instructions with inputs and outputs
    */}

    {/* 
      Props and Pure Components ("It's just a function")
      Components = function (props+state => HTML*)
      * it's not really HTML-- more on that later
    */}

    {/*
      State ("it's just props that can change")
    */}

    {/*
      Composition vs Inheritance?
      (TODO LATER-- not for lightning talk)
    */}

    {/*
      Fact: Supporting multiple frameworks means we have many copies of our HTML floating around, in many flavors. Copied, pasted, tweaked. Diverged HTML.
    */}

    {/*
      React was invented in 2013. In the 5 years since then:
      * The React community has grown __STATISTIC__% larger than the Angular and jQuery communities combined
      * Facebook has rewritten everything in React (of course)
      * Microsoft is rewriting all of Office 365 in React-Native (__CITATION__)
      * More Impressive Things?
    */}

    {/*
      Declarative + Functional is the Future
      Red Hat wants to be the defining technology company of its time?
      **React is defining the future of user interfaces right now.**
      Red Hat and Patternfly need to embrace React and get on top of that gravy train.
    */}
    

    <Slide transition={['fade']} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>Typography</Heading>
      <Heading size={1} textColor="secondary">Heading 1</Heading>
      <Heading size={2} textColor="secondary">Heading 2</Heading>
      <Heading size={3} textColor="secondary">Heading 3</Heading>
      <Heading size={4} textColor="secondary">Heading 4</Heading>
      <Heading size={5} textColor="secondary">Heading 5</Heading>
      <Text size={6} textColor="secondary">Standard text</Text>
    </Slide>

  </Deck>
);

export default Presentation;
