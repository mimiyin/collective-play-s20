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
   * How do we make decisions in groups?
   * What are web sockets? Why do we need them?

#### In-Class
   * Improv Exercise: Silent Caucus
   * Tech Tutorials
      * Hello sockets
      * Identifying Inputs
         * Keeping track of inputs by id
  * Additional Resources
     * [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
     * [Socket.IO - Get Started](https://socket.io/get-started/)
     * [Socket.IO - Emit cheatsheet](https://socket.io/docs/emit-cheatsheet/)
     * [Mozilla Developers Network](https://developer.mozilla.org/en-US/)

  * Videos
     * [p5.js and WebSockets Coding Train Videos](https://www.youtube.com/watch?v=bjULmG8fqc8&list=PLRqwX-V7Uu6b36TzJidYfIYwTFEq3K5qH)
     * Review JavaScript Objects | [Coding Train Video 2.3](https://www.youtube.com/watch?v=-e5h4IGKZRY)

   * Data you could send     
      * Mouse and keyboard [events](http://p5js.org/reference/#group-Events)
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
   * More on Iowa
      * [Inside Iowa Caucus: 2008](https://www.youtube.com/watch?v=Cnh-136QqO8)
      * [A Very Long Night in Iowa: 2020](https://www.nytimes.com/2020/02/04/podcasts/the-daily/iowa-caucus-results.html)
      * [Live Reporting of Iowa: 2020](https://www.nytimes.com/interactive/2020/02/03/us/elections/results-iowa-caucus-live-updates.html)

#### Assignment: Identify Inputs
  * Pick an input and send it over sockets. You can use _03_sockets-with-ids_ in _00_helloworld_ as a starting point. Put it on glitch.com and [post a link here](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-2-hello-sockets)
  * Diagram to the best of your ability _04_sockets-with-namespaces_ in _00_helloworld_. If that's easy, try _00_pollacky_ and _01_texteoke_ in _01_expression_. [See example here.](https://drive.google.com/file/d/1ch2KA9oANGOVkKgkRRWCb9FRMb71RS_0/view?usp=sharing)
     * Include a server and some clients.
     * Label events with event names and draw and arrow to specify the direction of data flow.
     * Specify the data being sent with each event. (e.g. What would it look like if you console logged it?)
     * Bonus is to also diagram the logic in the code.
     * Bring your diagrams to class and we will unpack it together.
  * Bring 5 things to draw with to the next class. Look through your garbage.
  * Wear clothes you can get dirty...forever.

***

# Design Strategy 1: Creative Collaborations

## Week 3: Compromise or Collide?

#### Questions
   * How do we find meaning as a group?
   * How do we maximize creative collisions in collaboration?

#### In-Class
   * Improv Exercise: Collective Drawing

#### Technical Topics
   * Wrap-up sockets topics.
      * Namespacing to separate inputs and outputs
   * Phone sensors
   * Real-time typing

#### Resources:
   * [p5 rotationXY, deviceShaken() example](https://editor.p5js.org/mimiyin/sketches/-wm-luG0)
   * [p5 keyTyped() example](https://editor.p5js.org/mimiyin/sketches/s93FslWg)
   * Install Sensor Kinetics: [iOS](https://itunes.apple.com/us/app/sensor-kinetics/id579040333?mt=8) | [Android](https://play.google.com/store/apps/details?id=com.innoventions.sensorkinetics&hl=en_US)
   * [Debugging iOS on your laptop](https://raygun.com/blog/debug-javascript-mobile-safari/)
   * [Debugging Android](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)


#### Assignment: Creative Collaborations
   * Inspiration: [Whose Line Is It Anyway?](https://www.youtube.com/watch?v=BhQXL3V2Lmk&feature=youtu.be&t=20)
   * Create a 5 minute creative collision for a group of 4+ people with sockets. [More details here...](https://github.com/mimiyin/collective-play-s20/wiki/Study-No.-1:-Creative-Collistions)
   * [Post a link to your project here](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-3-creative-collisions)

***

## Week 4: Play-test Creative Collaborations Assignment

#### Preview Partnering
   * Standing up together

#### Assignment:
   * Before you start, watch these:
      * [Steven Strogatz: Science of Sync](https://www.ted.com/talks/steven_strogatz_on_sync?language=en#t-1186563)
      * [Speaking in One Voice](https://youtu.be/hoTAziyhO7s?t=100)
   * Design a way to walk around with your partner without talking or gesturing that keeps you in sync. Your design should discourage leading / following. Practice it together!

***

# Design Strategy 2: Partnering

## Week 5: Influence or Instruction?

#### Question(s)
   * Is it possible to lead without leading? Follow without following?
   * Is complete equality possible in a relationship?


#### In-Class
   * Exercise: Human Ouija Board
   * Exercise: Speaking in One Voice

#### Examples
   * Human Ouija

#### Assignment: Partnering
   * In groups of 2: You are responding to a call to create dating experiences where couples can test how well they can communicate without using words or symbolic gestures. Is the other person a good "listener"? Do they give you room to lead? Or conversely, are they too timid and always waiting for you to take the lead? [Inspiration](https://www.newyorker.com/magazine/2019/10/07/are-you-on-the-apps)
   * Pay special attention to the physical set-up of your interaction. How will people communicate if not through words and gestures? (e.g. Direct contact? Contact through a 3rd object? Eyes? Sound? Extra-Sensory-Perception?)
   * [Questions to consider.](https://github.com/mimiyin/collective-play-s20/wiki/Pairs-Assignment-Guidelines)
   * Include a diagram of your code and instructions for the experience. [Post a link to your project here](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-5-pairs)


***

## Week 6: Play-test Partnering Assignment

   * What aspect of partnering does your project explore?

### Preview Queueing
   * The Wave

#### Assignment
   * Come up with at least 5 examples of situations where you have to wait in line. Come up with at least 1 variable of "waiting in line" situations. Don't repeat what's already on the list. [Throw them in this spreadsheet](https://docs.google.com/spreadsheets/d/115OVqXi_P8AKTPoDP0J5fjFofD37XJb8xgzBxlBiGAA/edit?usp=sharing). Be as specific as possible.
   * Play [The Evolution of Trust](https://ncase.me/trust/)


***

# Design Strategy 3: Queuing

## Week 7: Waiting versus Anticipating

#### Question(s)
   * What's the difference between waiting and anticipating?
   * What's the difference between taking turns and dialogue?

#### In-Class
* Telephone | [Spreadsheet](https://docs.google.com/spreadsheets/d/18d3u--NrGkKuZ8SG7UTcxAfxahTzu1atDkByWZZhSJo/edit?usp=sharing)
   * Zip Zap Zop
   * Different ways to form a line
   * Play-test Dear Jordan

#### Assignment
   * Groups 4: Make a queuing project for at least 5 people. Prepare your instructions for the play-test. | [Post links here](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-6-queues)
   * Be clear about which [dynamics of waiting for your turn](https://github.com/mimiyin/collective-play-s20/wiki/Parameters-of-Queues) you're exploring.

## Week 8: Play-test Queueing

### Preview Group Effort
   * Aggregates and Statistics: Can you see the trees in the forest?

#### Assignment
   * Listen / Read [Who Am I?](https://www.wnycstudios.org/podcasts/radiolab/episodes/91496-who-am-i)
   * Read [How Easily Segregation Arises](https://www.citylab.com/design/2014/12/an-immersive-game-shows-how-easily-segregation-arisesand-how-we-might-fix-it/383586/)
   * Fill out (in)visible worksheet. (I will send out link after class.)

***

# Design Strategy 4: Group Effort

## Week 9: Losing the Individual to the Group

#### Questions
   * When are you seen?

#### In-Class
   * [Notes](https://docs.google.com/document/d/1gfthpudUPTh9TjkY_MM3aVSJndSSPf91zB7BUIymIMc/edit?usp=sharing)
   * [Essay on Kant's Anschauungen](https://philosophynow.org/issues/31/Kant_and_the_Thing_in_Itself)
   * Discuss (in)visible.
   * Discuss readings.
   * Compare portraits by Diane Arbus and Martin Schoeller's "Honest" portraits.

#### Assignment for next week
   * How Do You Feel Right Now? Take a self-portrait and a portrait of your partner that reflects how you're feeling right now.
      * First Read:
         * [The Art of Diane Arbus](https://drive.google.com/file/d/1PAaq7VEzP89apmlesnhthOCPqPru7vfQ/view?usp=sharing) | [Photographs](https://drive.google.com/drive/folders/1lwYFpjJpCSCjAXvZD8jb06gy_VGCHLrL?usp=sharing)
         * [The Technique Behind Martin Schoeller's Photography](https://www.smithsonianmag.com/smithsonian-institution/the-technique-behind-martin-schoellers-photography-17906064/)
      * Then take your portraits. Take at least 10 of each to get it right. In a single blog post, show all 40 images, the final 4 you selected and write a sentence for each of the other 36 to explain why you discarded them. [Post it here](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-9-portraits)
   * Partner up for the final. (Link to spreadsheet coming.)
   * Prepare a short activity to try in class. [Post instructions by Monday evening here.](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-9-presentation-and-play-test)

***

## Weeks 10-12: Final Project Development
   * Week 10 In-Class Play Tests
      * [Sending Still Frames](https://glitch.com/~stream-video-frames)
      * [Class Notes](https://docs.google.com/document/d/1yrdKFFMqyVaF1jwL5A1Bpl9Y1ViKJ02TgqWajJOxrf8/edit?usp=sharing)
      * Assignment: Create a draft of your final project to play-test next week. [Please post a description of what you are planning to do here by Sunday evening.](https://github.com/mimiyin/collective-play-s20/wiki/Assignments#week-10-play-test) Include:
          * How many people you need for your play-test.
          * How much time you think it will take to a) explain what people need to do and b) run it through once.
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
