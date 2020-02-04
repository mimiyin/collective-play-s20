# Collective Play Spring 20 Syllabus
   * Tuesdays 12:10PM - 3:05PM in Room ???
   * Mimi Yin, mimi.yin@nyu.edu
   * [Office Hours Signup](https://itp.nyu.edu/inwiki/Signup/Mimi)

### [See course description below.](https://github.com/mimiyin/collective-play-f19#course-description)

## Resources
   * Class Google Group. I will be adding you after the first class.
   * Class Google Drive Folder. Resources from class, assignments.
   * All code examples will be pushed to this github repo.

## Tools
   * [p5.js](http://p5js.org/) | [Reference](http://p5js.org/reference/) | [Web Editor](https://editor.p5js.org/)
   * [Glitch.com](https://glitch.com)
   * [Node Server](https://nodejs.org/en/)


***
# Introduction

## Week 1: Hello World, Hello Web Servers
#### Question(s)
   * What is a group?
   * What is play?
   * Is this a programming class?
   * What is a web server? Why do we need it?

#### In-Class
   * Exercise: Hands
   * [Overview of Syllabus](https://docs.google.com/document/d/1HUGW8AHLQWfe9PBG3U9xTQ8ag-Xrbw2YayktwWijf5s/edit?usp=sharing)
   * Tech Tutorials:
      * Setting up you local development environment
      * CLI - Command Line Interface
      * Git
      * Using Atom
   * Code
      * Hello node
      * Hello express
      * Hello glitch.com
   * Existentialism
      * [Notes on Existentialism](http://people.bu.edu/wwildman/WeirdWildWeb/courses/wphil/lectures/wphil_theme20.htm)
      * Who's on First - Abbott & Costello: [Video](https://youtu.be/kTcRRaXV-fg?t=75), [Transcript](https://genius.com/Abbott-and-costello-whos-on-first-annotated) | [Argument Clinic - Monty Python](https://www.dailymotion.com/video/x2hwqn9)

#### Assignment: Make a web server.
   * The ultimate absurdity: Listen to [The Bad Show](https://www.wnycstudios.org/story/bad-show): First 26 minutes. Twist at 19m15s. (See Transcript in Transcript tab.)
   * Write a few sentences describing an absurd social situation that involved you and at least 1 other person. Be specific about what was absurd about it and describe how you responded. [Post a link to it here.](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-1).
   * [Set-up your local development environment](https://github.com/mimiyin/collective-play-f19/wiki/Set-up-your-local-development-environment)
   * Take a sketch you created in p5.js and serve it up locally on your computer.
   * Then put the exact same sketch up on [glitch.com](https://glitch.com) and [post a link here](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-1).
   * Additional Resources
      * [Beginner’s Guide to Node](https://glitch.com/~node-beginner) (more advanced topics)
      * [Dan Shiffman on Node](http://shiffman.net/a2z/server-node/)

***

## Week 2: Hello Sockets
#### Question(s)
   * What makes something absurd?
   * What are web sockets? Why do we need them?

#### In-Class
   * Collective self-portrait
   * Make a dance
   * Tech Tutorials
      * Hello sockets
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
  * Additional Resources
     * [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
     * [Socket.IO - Get Started](https://socket.io/get-started/)
     * [Socket.IO - Emit cheatsheet](https://socket.io/docs/emit-cheatsheet/)
     * [Mozilla Developers Network](https://developer.mozilla.org/en-US/)
     * Install Sensor Kinetics:[iOS](https://itunes.apple.com/us/app/sensor-kinetics/id579040333?mt=8) | [Android](https://play.google.com/store/apps/details?id=com.innoventions.sensorkinetics&hl=en_US)
     * [Debugging iOS on your laptop](https://raygun.com/blog/debug-javascript-mobile-safari/)
     * [Debugging Android](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)

  * Videos
     * [p5.js and WebSockets Coding Train Videos](https://www.youtube.com/watch?v=bjULmG8fqc8&list=PLRqwX-V7Uu6b36TzJidYfIYwTFEq3K5qH)
     * Review JavaScript Objects | [Coding Train Video 2.3](https://www.youtube.com/watch?v=-e5h4IGKZRY)

#### Assignment: Identify Inputs
  * Pick an input and send it over sockets. | [See "Events"](http://p5js.org/reference/#group-Events) and keep track of who's sending it.
  * Diagram to the best of your ability 00_pollacky and 01_texteoke in 01_expression.
     * Include a server and at least 2 clients
     * Label events with event names and draw and arrow to specify the direction of data flow.
     * Specify the data being sent with each event.
     * Bonus is to also diagram the logic in the code.
  * Bring 5 things to draw with to the next class. Look through your garbage.
  * Wear clothes you can get dirty...forever.

***

# Design Strategy 1: Creative Collisions

## Week 3: Compete or Collaborate?

   * Wrap-up sockets topics.
      * Namespacing to separate inputs and outputs
      * Normalizing data across clients

#### Questions
   * How do we find meaning as a group?
   * How do we maximize creative collisions in collaboration?

#### In-Class
   * Exercise: Collective Drawing

#### Resources:
   * [Whose Line Is It Anyway?](https://www.youtube.com/watch?v=BhQXL3V2Lmk&feature=youtu.be&t=20)

#### Assignment: Create a Tableau
   * Create a collective creation experience that maximizes for inventive collisions with sockets.
   * [Questions to keep in mind.](https://github.com/mimiyin/collective-play-f19/wiki/Questions)
   * [Post a link to your project here](https://github.com/mimiyin/collective-play-f19/wiki/Assignments#assignment-1-create-an-experience-for-3-people)

***

## Week 4: Play-test Tableau Assignment

#### Preview Partnering
   * Standing up together
   * [Speaking in One Voice](https://youtu.be/hoTAziyhO7s?t=100)

#### Assignment:
   * [Steven Strogatz: Science of Sync](https://www.ted.com/talks/steven_strogatz_on_sync?language=en#t-1186563)

***

# Design Strategy 2: Partnering

## Week 5: Influence or Interference?

#### Question(s)
   * When does influence turn into interference?
   * Is it more fun to cooperate or undermine?

#### In-Class
   * Exercise: Human Ouija Board
   * Mashing up inputs into pairs.

#### Examples
   * Ouija
   * Twist and Shake | [glitch](https://glitch.com/edit/#!/tilt-and-shake) | [Translator Impaired](https://www.youtube.com/watch?v=uOG4FD2X5MQ&t=26s)

#### Assignment: Partnering
   * In groups of 2: You are responding to a call to create dating experiences. They want to create experiences where couples can test how well they can communicate without using words or word-like gestures. Is the other person a good listener? Do they give you room to lead? Or conversely, are they too timid and always waiting for you to take the lead? [Inspiration](https://www.newyorker.com/magazine/2019/10/07/are-you-on-the-apps)

***

## Week 6: Play-test Partnering Assignment

   * What aspect of partnering does your project explore?

### Preview Queueing
   * The Wave
   * Telephone

#### Assignment
   * Play [The Evolution of Trust](https://ncase.me/trust/)


***

# Design Strategy 3: Queuing

## Week 7: Waiting versus Anticipating

#### Question(s)
   * What's the difference between waiting and anticipating?
   * What's the difference between taking turns and dialogue?

#### In-Class
   * Zip Zap Zop
   * Different ways to form a line
   * Play-test Dear John

#### Assignment
   * Complete life-size paper diagram of 04_queueing/00_human-auto-complete

#### Assignment
   * Groups of 3 or 4: Make a queuing project. | [Post links here](https://github.com/mimiyin/collective-play-f19/wiki/Assignments#queues-create-an-experience-where-people-their-turn)
   * Be clear about which [dynamics of waiting for your turn](https://github.com/mimiyin/collective-play-f19/wiki/Parameters-of-Queues) you're exploring.

## Week 8: Play-test Queueing

### Preview Group Effort
   * Exercise: Tuning Meditation
   * Collective blindness.
   * [Dancing Guy](https://www.youtube.com/watch?v=fW8amMCVAJQ)
   * [Pauline Oliveros: Tuning Meditation](https://www.youtube.com/watch?v=g5bj8sO2-WY)

#### Assignment
   * (Due in 2 weeks) Design and run an analog group interaction that tries to get as many people on the floor participating. Document the event. Post your documentation to your blog and [link to it here](https://github.com/mimiyin/collective-play-f19/wiki/Assignments) Think of this as a way to explore final project ideas.
   * Take into consideration [what we discussed in class](https://github.com/mimiyin/collective-play-f19/wiki/Group-Dynamics)

***

# Design Strategy 4: Group Effort

## Week 9: Losing the Individual to the Group

#### Questions
   * What is the line between groupthink and groupsync?

#### In-Class
   * Collective clapping.
   * Play test "Jog Wheel": [Inputs](https://jog-wheel.glitch.me/input/) | [Output](https://jog-wheel.glitch.me/output/)
   * Present ideas on analog group interaction.

#### Resources
   * [How Easily Segregation Arises](https://www.citylab.com/design/2014/12/an-immersive-game-shows-how-easily-segregation-arisesand-how-we-might-fix-it/383586/)

#### Assignment for the week
   * Continue working on your analog group interaction. Consider what kind of group dynamics you want to address.
   * Prepare a short presentation of your findings. Include documentation wherever possible. (Video, sound, images, diagrams.)
   * Include some early thoughts on how you might apply your findings to a digital expression of the ideas you're exploring.

***

## Weeks 10-12: Final Project Development
  * Week 10 Present analog group effort results
  * Week 11 In-Class User Testing
  * Week 12 Final Presentations

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
