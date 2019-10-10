# Collective Play Fall 19 Syllabus
   * Tuesdays and Thursdays Noon-1:30PM in Room 408
   * Mimi Yin, mimi.yin@nyu.edu
   * [Office Hours Signup](https://itp.nyu.edu/inwiki/Signup/Mimi)
   * [Spring 2019 Repository](https://github.com/mimiyin/collective-play-f19)

### [See course description below.](https://github.com/mimiyin/collective-play-f19#course-description)

## Resources
   * Class Google Group. I will be adding you after the first class.
   * Class Google Drive Folder. Resources from class, assignments.
   * All code examples will be pushed to this github repo.

## Tools
   * [p5.js](http://p5js.org/) | [Reference](http://p5js.org/reference/) | [Web Editor](https://editor.p5js.org/)
   * [Glitch.com](https://glitch.com)
   * [Node Server](https://nodejs.org/en/)

# Design Strategy 1: Every person for themselves

## Week 1: Hello World
### Class 1: Introductions
#### Question(s)
   * What is a group?
   * What is play?
   * Is this a programming class?
#### In-Class
   * Exercise: Hands
   * [Overview of Syllabus](https://docs.google.com/document/d/1HUGW8AHLQWfe9PBG3U9xTQ8ag-Xrbw2YayktwWijf5s/edit?usp=sharing)
   * Tech Tutorials:
      * Setting up you local development environment
      * CLI - Command Line Interface
#### Assignment: Hello CLI
   * [Set-up your local development environment](https://github.com/mimiyin/collective-play-f19/wiki/Set-up-your-local-development-environment)


### Class 2: Hello Web Servers
#### Question(s)
   * What is a web server? Why do we need it?
#### In-Class
   * [Milgrim's Experiment](https://www.wnycstudios.org/story/bad-show): First 26 minutes. Twist at 19m15s.
   * Tech Tutorials
      * CLI
      * Git
      * Using Atom
   * Code
      * Hello node
      * Hello express
      * Hello glitch.com
#### Assignment: Make a web server.
   * Take a sketch you created in p5.js and serve it up locally on your computer.
   * Then put the exact same sketch up on [glitch.com](https://glitch.com)
   * Additional Resources
      * [Beginner’s Guide to Node](https://glitch.com/~node-beginner) (more advanced topics)
      * [Dan Shiffman on Node](http://shiffman.net/a2z/server-node/)

***

## Week 2: Hello Sockets
### Class 1
#### Question(s)
   * What are web sockets? Why do we need them?
#### In-Class
   * Exercise: Staring Contest
   * Tech Tutorials
      * Hello sockets
  * Additional Resources
     * [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
     * [Socket.IO - Get Started](https://socket.io/get-started/)
     * [Socket.IO - Emit cheatsheet](https://socket.io/docs/emit-cheatsheet/)
     * [Mozilla Developers Network](https://developer.mozilla.org/en-US/)
  * Videos
     * [p5.js and WebSockets Coding Train Videos](https://www.youtube.com/watch?v=bjULmG8fqc8&list=PLRqwX-V7Uu6b36TzJidYfIYwTFEq3K5qH)

#### Assignment:
   * Pick an input and send it over sockets. | [See "Events"](http://p5js.org/reference/#group-Events)
   * Review JavaScript Objects | [Coding Train Video 2.3](https://www.youtube.com/watch?v=-e5h4IGKZRY)

### Class 2: New inputs
#### In-Class
* Finish up inputs
* Tech Tutorials
   * Review mouse and keyboard [events](http://p5js.org/reference/#group-Events)
   * Mobile device sensors | [p5 and Mobile](https://github.com/ITPNYU/ICM-2017#10----mobile)
      * [Tilt to Position](https://editor.p5js.org/mimi/sketches/bQTB_I0vs)
      * [Tilt and Shake](https://editor.p5js.org/mimi/sketches/LWKN7noUJ)
      * [Pressure Sensor](https://editor.p5js.org/mimi/sketches/PY35i_8Yu)
   * keyTyped() keyPressed() keyCode and key | [Code](https://editor.p5js.org/mimi/sketches/3yLggEeR2)
   * Camera and Microphone
      * [Mic-level](https://editor.p5js.org/mimi/sketches/3coWCiwKz)   
      * [Color-tracking](https://editor.p5js.org/mimi/sketches/E9f0eRBgH)
      * [Motion Sensing](https://editor.p5js.org/mimi/sketches/8NFrkv7Dj)
      * Face-tracking with [clmtrackr](https://editor.p5js.org/mimi/sketches/Lqjs4u09x)
   * Identifying Inputs
      * Keeping track of inputs by id
      * Normalizing data across clients

#### Assignment: Identify Inputs
  * Take your input you're sending over sockets and keep track of who's sending it.
  * Bring 5 things to draw to the next class.
  * Wear clothes you can get dirty...forever.

***

## Week 3: Expressive Outputs
### Class 1: Capturing expression
#### In-Class
   * Exercise: Collective Drawing
   * Code
      * Review identifying inputs
      * Capturing expression
         * [Expressive Lines](https://editor.p5js.org/move.mimi/sketches/ByPtNLI4z): Press mouse to cycle through 4 modes.
         * [Measuring Typing Speed](https://editor.p5js.org/mimiyin/sketches/osUkC5um-)
#### Assignment: Capturing Expression in Inputs
   * Capture expression through the keyboard, mouse, phone sensors, mic, camera and express it.
      * [Inspiration](https://www.newyorker.com/cartoon/a22440)

### Class 2: Collecting the next layer of input (meta-inputs).
#### Question(s)
   * What does it mean to be expressive?
   * What are the parameters of expression in:
      * What you see
      * What you hear
#### In-Class
   * Code Examples:
      * [History of Mic Level](https://editor.p5js.org/mimi/sketches/zpxMgCvji)
      * Separating inputs and outputs with namespaces
         * [Glitch.com Namespaces Example](https://glitch.com/edit/#!/hello-world-namespaces)
      * Expressive examples
         * Pollacky
         * Texteoke
         * Finger Drumming
   * Resources
      * Install Sensor Kinetics:[iOS](https://itunes.apple.com/us/app/sensor-kinetics/id579040333?mt=8) | [Android](https://play.google.com/store/apps/details?id=com.innoventions.sensorkinetics&hl=en_US)

#### Assignment: Expressive Outputs
   * Diagram the _pollacky_ or _texteoke_ examples in Github and drop them in my mailbox by Tuesday 10AM.
      * Server and clients
      * Namespaces
      * Event names
      * Contents of data being sent
      * Start and end points of data movement and indicate direction
      * You can also attempt to diagram any parts of the code that are hard to understand.
   * Show each other and discuss your expression assignments. The goal is to get people to go beyond what they normally do. How does it succeed? How could it be improved? Any new directions you want to explore?

***

## Week 4: Tableau
### Class 1: Finish up expressive outputs examples
#### Question(s)
   * How do we maximize creative collisions in collaboration?
#### In-Class
   * Review diagrams.
   * Collective self-portrait.

#### Assignment: Expressive Outputs
   * Experiment with expressive inputs and outputs. Divide up the work, everyone should post code. Ways you could divide up the work include:
      * Each person tries a different input/output.
      * You agree on an input and try different outputs.
      * You agree on an output and try different intputs.
      * Any combination or permutation of the above.
   * Resources
      * [Debugging iOS on your laptop](https://raygun.com/blog/debug-javascript-mobile-safari/)
      * [Debugging Android](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)

### Class 2: Meaning-making
#### Question(s)
   * How do we find meaning as a group?
   * Semantics is the study of the meaning of words or lexical meaning. What about non-lexical semantics?
   * Resources:
      * [Whose Line Is It Anyway?](https://www.youtube.com/watch?v=BhQXL3V2Lmk&feature=youtu.be&t=20)
      * [Pauline Oliveros: Tuning Meditation](https://www.youtube.com/watch?v=g5bj8sO2-WY)

#### In-Class
   * Exercise(s): Deep Listening

#### Assignment: Create a Tableau
   * Create something expressive that is meaningful with sockets.
   * [Questions to keep in mind.](https://github.com/mimiyin/collective-play-f19/wiki/Questions)
   * [Post a link to your project here](https://github.com/mimiyin/collective-play-f19/wiki/Assignments#assignment-1-create-an-experience-for-3-people)

***

## Week 5: Play-test Tableau Assignment
#### Preview Partnering
   * Standing up together
#### Assignment:
   * Post-Mortem
      * [Fill out this worksheet.](https://docs.google.com/spreadsheets/d/1XHd1eqrjwo94Onusv52-8cFr7g6G1-lWYfsS6VtYZ20/edit?usp=sharing) Each team has a tab. Access with your NYU account.
      * [Create a re-design brief](https://github.com/mimiyin/collective-play-f19/wiki/Re-Design-Brief)

***

# Design Strategy 2: Partnering

## Week 6: Influence or Interference?
### Class 1:
#### Question(s)
   * When does influence turn into interference?
   * Is it more fun to cooperate or undermine?
#### In-Class
* [Speaking in One Voice](https://youtu.be/hoTAziyhO7s?t=100)

### Class 2
* Mashing up inputs into pairs.
   * Examples
      * Ouija
      * Twist and Shake | [glitch](https://glitch.com/edit/#!/tilt-and-shake) | [Translator Impaired](https://www.youtube.com/watch?v=uOG4FD2X5MQ&t=26s)
* Exercise(s): Human Ouija Board

#### Assignment: Partnering
   * Groups of 2: You are responding to a call from a dating experiences start-up. They want to create an experience where couples can test how well they can communicate in a nonverbal way. Is the other person a good listener? Do they give you room to lead? Or conversely, are they too timid and always waiting for you to take the lead? [Inspiration](https://www.newyorker.com/magazine/2019/10/07/are-you-on-the-apps)

***

## Week 7: Play-test Partnering Assignment
#### Preview Queuing
   * Different ways to form a line
   * Musical Chairs
   * Duck Duck Goose
   * Zip Zap Zop

#### Assignment
   * Play [The Evolution of Trust](https://ncase.me/trust/)
   * Read [NYU Prof Vows Never to Probe Cheating Again—and Faces a Backlash](https://www.chronicle.com/blogs/wiredcampus/nyu-prof-vows-never-to-probe-cheating-again%E2%80%94and-faces-a-backlash/32351)

***

# Design Strategy 3: Queuing

## Week 8: Waiting versus Anticipating
### Class 1
#### Question(s)
   * What's the difference between waiting and anticipating?
   * What's the difference between taking turns and having a conversation?
   * How do lines encourage or discourage cheating?
#### In-Class
   * Keeping track of who's turn it is.
   * Example: Dear John
   * Taking turns drawing, writing text, making noise.

### Class 2
   * Deconstruct Dear John example on paper

#### Assignment
   * Groups of 3: Make a queuing project. | [Post links here](https://github.com/mimiyin/collective-play-f19/wiki/Assignments#queues-create-an-experience-where-people-their-turn)
   * Be clear about which [dynamics of waiting for your turn](https://github.com/mimiyin/collective-play-f19/wiki/Parameters-of-Queues) you're exploring.

## Week 9: Play-test Queueing

#### Questions
   * What is the line between groupthink and groupsync?

#### In-Class
   * [No "Man" Left Behind](https://news.nationalgeographic.com/2017/04/ants-rescues-soldiers-injured-africa/) | [Where's Waldo](https://i.imgur.com/GG410zX.jpg)
#### Resources
   * [Wisdom of Crowds](https://en.wikipedia.org/wiki/The_Wisdom_of_Crowds) | [Guess # of Jelly Beans](https://www.youtube.com/watch?v=IGp0ivFTuV4) | [When Wisdom of Crowds Goes Wrong](http://www.bbc.com/future/story/20140708-when-crowd-wisdom-goes-wrong)
   * [Steven Strogatz: Science of Sync](https://www.ted.com/talks/steven_strogatz_on_sync?language=en#t-1186563) | [FOLI](https://www.youtube.com/watch?v=lVPLIuBy9CY)
   * [Who has the right to review? The expert critic or everyone?](https://harpers.org/archive/2019/04/like-this-or-die/)


#### Assignment for the week
   * Fill out (in)visible worksheet. (I will send out link after class.)
   * Read Chapters 1, 6, and 7 of Part 1 of [Crime and Punishment by Fyodor Dostoevsky](https://www.gutenberg.org/ebooks/2554)
   * (Due in 2 weeks) Design and run an analog group interaction that tries to get as many people on the floor participating. Document the event. Post your documentation to your blog and [link to it here](https://github.com/mimiyin/collective-play-f19/wiki/Assignments) Think of this as a way to explore final project ideas.
   * Take into consideration [what we discussed in class](https://github.com/mimiyin/collective-play-f19/wiki/Group-Dynamics)

***

# Design Strategy 4: Group Effort

## Week 10: Losing the Individual to the Group

### Class 1
#### Questions
   * When do you want to be (in)visible?
   * Analyze (in)visible responses.
   * Discuss reading.

### Class 2
   * Present ideas for analog group interaction assignment.

## Week 11: Losing the Individual to the Group
### Class 1
#### In-Class
  * Play test "Jog Wheel": [Inputs](https://jog-wheel.glitch.me/input/) | [Output](https://jog-wheel.glitch.me/output/)

### Class 2
  * [Calculating "Averages"](https://editor.p5js.org/mimi/sketches/cPtOloDf6)


#### Assignment for the week
   * Continue working on your analog group interaction. Consider what kind of group dynamics you want to address.
   * Prepare a short presentation of your findings.
   * Include some early thoughts on how you might apply your findings to a digital expression of the ideas you're exploring.
***

## Weeks 12-14: Final Project Development
  * Week 12
     * Class 1: Present human play test results
     * Class 2: Present final project proposals
  * Week 13 In-Class User Testing
  * Week 14 Final Presentations

***
***
# Course description
Rules of play shape competitive games from checkers to football. But how do the rules of interaction shape non-competitive play? In this course, we will explore, code and test design strategies for playful group interactions while at the same time interrogating both what it means to play and how individual identities and group behaviors emerge.

Some of the questions we will ask and attempt to answer:

What motivates participation? What hinders it?
When does participation become oppressive?
What's the difference between self-consciousness and self-awareness?
Who has power? Who doesn't?
Are leaders necessary?
What’s the difference between taking turns and engaging in conversation?
What happens when the slowest person sets the pace?

Interaction inputs we will play with will include: mouse, keyboard, mobile device sensors, and microphone. Outputs will include, visuals, text and sound. We will use p5, websockets and node.js for real-time interaction. Class time will be split between group improvisation exercises, playing with and critiquing examples and translating design strategies into code and logic. 		  		  		  		  	

## Pre-requisites
ICM or the equivalent.

## Evaluation
- 40% for showing up (on time!) and participating with curiosity and enthusiasm.
- 40% for homework.
- 20% for the final project.
- More than 2 unexcused absences qualifies you for a failure.
- 2 lateness of 15 minutes or more qualifies as 1 unexcused absence.

Please see ITP's statement on [Pass/Fail](http://help.itp.nyu.edu/academic-policies/pass-fail) which states that a "Pass" is equivalent to an "A" or a "B" while anything less would be considered a "Fail".

We will have weekly assignments that are relevant to material from the previous class. These assignments are required and you should be prepared to show/talk about them in class. It is expected that everyone in the class will create and maintain a blog for their assignments.

Attendance is mandatory. Please inform your teacher via email if you are going to miss a class. Two unexcused absences is cause for failing the class. (An unexcused lateness of 10 minutes or more is equivalent to 1/2 an absence.)

This class will be participatory, you are expected to participate in discussions and give feedback to other students both in class and participate with their projects. This (along with attendance) is 40% of your grade.

Class will culminate with final projects. You are expected to push your abilities to produce something that utilizes what you have learned in the class that is useful in some manner to yourself or the world. This will comprise 20% of your grade.

## Statement of Academic Integrity

Plagiarism is presenting someone else’s work as though it were your own. More specifically, plagiarism is to present as your own: A sequence of words quoted without quotation marks from another writer or a paraphrased passage from another writer’s work or facts, ideas or images composed by someone else.

## Statement of Principle

The core of the educational experience at the Tisch School of the Arts is the creation of original academic and artistic work by students for the critical review of faculty members.  It is therefore of the utmost importance that students at all times provide their instructors with an accurate sense of their current abilities and knowledge in order to receive appropriate constructive criticism and advice.  Any attempt to evade that essential, transparent transaction between instructor and student through plagiarism or cheating is educationally self-defeating and a grave violation of Tisch School of the Arts community standards.  For all the details on plagiarism, please refer to page 10 of the Tisch School of the Arts, Policies and Procedures Handbook, which can be found online at: http://students.tisch.nyu.edu/page/home.html

## Statement on Accessibility

Please feel free to make suggestions to your instructor about ways in which this class could become more accessible to you.  Academic accommodations are available for students with documented disabilities. Please contact the Moses Center for Students with Disabilities at 212 998-4980 for further information.

## Statement on Counseling and Wellness

Your health and safety are a priority at NYU. If you experience any health or mental health issues during this course, we encourage you to utilize the support services of the 24/7 NYU Wellness Exchange 212-443-9999. Also, all students who may require an academic accommodation due to a qualified disability, physical or mental, please register with the Moses Center 212-998-4980. Please let your instructor know if you need help connecting to these resources.

## Statement on use of Electronic Devices

Laptops will be an essential part of the course and may be used in class during workshops and for taking notes in lecture. Laptops must be closed during class discussions and student presentations.  Phone use in class is strictly prohibited unless
