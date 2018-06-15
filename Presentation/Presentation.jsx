import React from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from 'spectacle';

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

    {/* 2 - Quote: "React is such a good idea that..." */}
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <BlockQuote className="smaller">
        <Quote>React is such a good idea that we will spend the rest of the decade continuing to explore its implications and applications.</Quote>
        <Cite>Guillermo Rauch (<a href="https://twitter.com/rauchg/status/801005961334943744">@rauchg</a>)</Cite>
      </BlockQuote>
    </Slide>

    {/* 3 - Why is React such a good idea? Abstraction. */}
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <Heading size={3} caps lineHeight={1} textColor="primary">
        Why is React<br />
        such a good idea?
      </Heading>
      <Heading size={2} margin="100px 0 0" textColor="tertiary">
        One Word:
      </Heading>
      <Text size={1} fit textColor="quarternary" {...inline}>
        <em>Abstraction.</em>
      </Text>
      <Text margin="50px 0 0" textColor="primary" size={1} fit>
        In other words,<br />
        <strong>developers don't need to work as hard 👩‍💻</strong><br />
        <strong>to achieve the same goals. 🎉</strong>
      </Text>
    </Slide>

    {/* 4 - React is... */}
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={2} margin="-150px 0 0" textColor="secondary" caps>React...</Heading>
      <List className="hanging-indent ellipsis">
        <ListItem>... is a JavaScript Framework for making <strong>User Interfaces</strong> (not just web apps)</ListItem>
        <ListItem>
          ... promotes <strong className="declarative">📝&nbsp;declarative</strong> and <strong className="functional">➡️&nbsp;functional</strong> programming patterns
        </ListItem>
        <ListItem>
          ... finally makes <strong className="imperative">🗣️ imperative programming</strong> for the web <strong className="imperative">🙅‍♂️ obsolete</strong>!
          <List>
            <ListItem className="tiny">
              Yes, this means jQuery. <small><small>And some parts of Angular...</small></small>
            </ListItem>
          </List>
        </ListItem>
        <ListItem bold>
          ... is empowering!
          <List>
            <ListItem className="tiny" bold={false}>
              It is not much of a stretch if you understand HTML, to understand JSX and add some logic.
            </ListItem>
          </List>
        </ListItem>
        <ListItem bold>
          ... is not the only <span className="declarative">declarative</span> UI framework!
          <List>
            <ListItem className="tiny" bold={false}>
              Vue is pretty cool too, and Web Components are promising.
            </ListItem>
          </List>
        </ListItem>
        <ListItem>... is <strong className="declarative">simple</strong> but powerful.</ListItem>
        <ListItem>... has a rapidly growing community.</ListItem>
      </List>
    </Slide>

    {/* 5 - Everyone is switching to React right now. */}
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={4} margin="-120px 0 0" textColor="secondary" caps>Everyone is switching to React right now.</Heading>
      <List className="hanging-indent">
        <ListItem>
          According to the Stack Overflow 2017 Developer Survey, <strong className="declarative"s>React is loved by 67% of surveyed developers</strong> and
          AngularJS by <strong>52%</strong>.
        </ListItem>
        <ListItem>
          <span className="imperative">“No interest to continue developing” registers higher numbers for AngularJS (48%)</span> vs. React (33%). 
        </ListItem>
        <ListItem>
          The Office 365 team at Microsoft recently announced that they are <span className="declarative">rewriting MS Office in React-Native.</span>
          <List>
            <ListItem className="tiny">And they just bought GitHub, so...</ListItem>
          </List>
        </ListItem>
        <ListItem>
          Facebook, Netflix, WhatsApp, Dropbox, The New York Times, Khan Academy...
          <span className="declarative">The list goes on and on.</span>
        </ListItem>
      </List>
    </Slide>

    {/* 6 - Core Concept: Declarative Programming */}
    <Slide transition={['fade']} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps margin="-50px 0 0">Core Concept:</Heading>
      <Heading fit textColor="secondary">Declarative Programming</Heading>
      <Text size={6} textColor="primary" margin="50px 0 0" bold>
        In React, you <span className="declarative highlight">declare</span> what your app should look like at any one time as a <span className="declarative highlight">function of the available data</span>.
      </Text>
      <Text size={6} textColor="primary" margin="50px 0 0" bold>
        When that data changes, your app <strong className="declarative highlight"><u>react</u>s</strong> to those changes automatically!
      </Text>
      <Text size={6}>
        (get it?)
      </Text>
      <Text margin="50px 0 0">
        <strong>You declare the end result you want, and React figures out the rest for you.</strong><br />
        You never have to think about manipulating HTML elements at all.<br />
        <strong className="declarative highlight">It's all automatic.</strong>
      </Text>
    </Slide>

    {/* 7 - Core Concept: Functional Programming */}
    <Slide transition={['fade']} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>Core Concept:</Heading>
      <Heading textColor="secondary" fit>Functional Programming</Heading>
      <Text size={6} textColor="primary" margin="50px 0 0" bold>
        A <strong class="functional highlight">function</strong> is a <u>set of repeatable instructions</u> that take some <span className="functional highlight">input</span> and return some <span className="functional highlight">output</span>.
      </Text>
      <Text size={6} textColor="primary" margin="50px 0 0" bold>
        A <strong class="functional highlight">pure function</strong> is a function with no <span className="imperative highlight">side effects</span>.
      </Text>
      <Text>
        (It just outputs, without modifying anything outside of itself.)
      </Text>
      <CodePane textSize={32} lang="javascript" source={`
        function sum(a, b) { return a + b; }
        sum(2, 5); // returns 7
      `} />
    </Slide>

    {/* 8 - Declaring the state of the world with Props */}
    <Slide transition={['fade']} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps margin="-250px 0 0">Declaring things in React:</Heading>
      <Heading textColor="secondary">Props</Heading>
      <Text size={6} textColor="primary" margin="50px 0 0" bold>
        <strong class="declarative highlight">A React Component is just a function</strong> that takes <strong className="declarative highlight">props</strong> as input, and returns HTML elements as output.
      </Text>
      <Text size={6} textColor="primary" margin="50px 0 0">
        The props (arbitrary properties) declare the state of the world for a component. When the props change, a component <strong>renders itself again.</strong> React figures out how to do this efficiently for you.
      </Text>
      <CodePane lang="javascript" textSize={22} margin="50px 0 0" source={`
        function MyComponent(props) {
          return (
            <h1 className={props.color}>
              Welcome, {props.username}!
            </h1>
          );
        }

        MyComponent({ color: 'blue', username: 'Mike' });
        // returns <h1 class="blue">Welcome, Mike!</h1>

        // JSX syntax for props:
        <MyComponent color="blue" username="Mike" />
      `} />
    </Slide>

    {/* 9 - The future is here */}
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={2} caps lineHeight={1} textColor="secondary">
        <span className="declarative">Declarative + Functional</span> UI is the Future,<br />and it's here.
      </Heading>
      <Text margin="50px 0 0" textColor="secondary">
        React aren't the only ones doing it, but they are doing it best. React is defining the future of user interfaces right now.
      </Text>
      <Heading size={6} margin="50px 0 0" textColor="tertiary">
        If Red Hat wants to be the defining technology company of its time, we need to embrace React and climb aboard the declarative gravy train.
      </Heading>
    </Slide>

    {/* 10 - Questions */}
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Thank You!
      </Heading>
      <Text margin="50px 0 0" textColor="tertiary">
        There will be a whole lot more interesting React stuff coming soon.
      </Text>
      <Text size={2} margin="50px 0 0" textColor="tertiary" fit bold>
        Questions?
      </Text>
    </Slide>

  </Deck>
);

export default Presentation;
