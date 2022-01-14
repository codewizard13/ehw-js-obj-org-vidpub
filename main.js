/*
Program Name:   EHW JavaScript ES6 Demo: JSON Video Publishing Config Object
File Name:      main.js
Date Created:   01/14/22
Date Modified:  --
Version:        1.00
Programmer:     Eric L. Hepperle

TAGS:           Eric Hepperle, JavaScript, ES6, DOM Manipulation, Demo, Eric L. Hepperle

Purpose: 
    This JavaScript file is a demo for configuring info and metadata
    necessary for publishing recorded videos. Such info includes:
    date recorded, date published, platforms published to, vid urls,
    description text, tags, keywords, title, short title, etc.
    
Usage:
    Use with controller.php

Sample results: 

--

Requires:
	* controller.php
    * Browser
    
Demonstrates:
    * Vanilla JavaScript
    * JavaScript ES6/ECMAScript2015

*/


/*
This is a demo by Eric L. Hepperle which demonstrates 
storing and retrieving data from JSON/JavaScript objects.
The main object stores info about Eric's websites and digital/online
properties and brands.
*/

console.log("HELLO!");

const conf = {
    vars: {
        sep_bar: "~~~~~~~~~~~~",
    },
    config_purpose: "This is a template/interface describing what each video should have",
    prj_dir: {
        name: "EHDVE_YYYYMMDD_CHANNEL-ABBREV_ShortVidName"
    },
    vid_file: {
        name: "EHDVR_YYYYMMDD_CHANNEL-ABBREV_ShortVidName_VERSIONNUM",
        ext: ".mp4",
    },
    vid_meta: {
        title: "",
        intro: {
            head: null,
            para_01: "",
            rest: "",
        },
        timestamps: {
            head: "Timestamps",
            "0:00": "Intro",
            "1:11": "What is OneTab",
            "nn:nn:nn": "Lorem ipsum ..."
        },
    },
    vid_descr: {
        demo_code: {
            para_01: "",
            site: "",
            url: "",
            info: ""
        },
        resources: {
            head: "Links & Resources",
            links: {
                link_01: {
                    name: "Something Website: Awesome Vid 01",
                    descr: "Balboa Press: Here's a list of currently offered publishing packages:",
                    url: "https://something/vid_name.mp4"
                },
                link_02: {
                    name: "Something Website: Awesome Vid 02",
                    descr: "Balboa Press: Here's a list of currently offered publishing packages:",
                    url: "https://something/vid_name.mp4",
                },
                link_03: {
                    name: "Something Website: Awesome Vid 03",
                    descr: "Balboa Press: Here's a list of currently offered publishing packages:",
                    url: "https://something/vid_name.mp4",
                },
            }
        },
            
    },
    pub_data: {
        effects: {
            transitions: Array("trans1","trans2","trans3"),
        },
        about: {
            head: "About Me",
            descr: "I am a multi-disciplined graphic designer based in Geneva, AL where I live in a little blue house with my wife and 9 cats. Yes, you heard that right -- and that's not even counting the two outside cats we care for! I know them each by name and love them all. That is my family that I live with on a tiny semi-rural deep south homestead we call Hepperle Manor.",
        },
        ctas: {
            leave_comment: {
                head: "Leave Comment",
                descr: "If you found this video tutorial helpful, please leave a comment below!",    
            },
            vid_ideas: {
                head: "Video Ideas",
                descr: "I love sharing my knowledge with others, and by sharing and communicating in a loving way, we all grow! If you have any ideas, suggestions, or questions, leave a comment below. If I make a video from one of your suggestions, you will get a shout out on the video.",    
            },
            like_sub: {
                head: "Like & Subscribe",
                descr: "Please LIKE, SUBCRIBE, and hit the BELL to be notified of new videos if you enjoyed this content!",
            },
        },
        services: {
            head: "Services",
            intro: "",
            list: Array(
                "Web design",
                "Graphic design",
                "WordPress design",
                "Website development",
                "Coding",
                "PC Troubleshooting & Repair",
                "Printer Repair",
            ),
        },
        connect: {
            head: "Connect",
            intro: "CONNECT with Eric Hepperle Designs:",
            links: {
                fb_pers: {
                    label: "Facebook",
                    url: "https://erichepperle.com",
                },
                fb_bus: {
                    label: "Facebook",
                    url: "https://www.facebook.com/erichepperledesigns/",
                },
                insta: {
                    label: "Instagram",
                    url: "https://erichepperle.com",
                },
                twit: {
                    label: "Twitter",
                    url: "https://erichepperle.com",
                },
                linkedin_pers: {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/erichepperle/",
                },
                linkedin_bus: {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/company/eric-hepperle-designs",
                },
                blog: {
                    label: "Blog",
                    url: "https://erichepperle.com/blog",
                },
                site_pers: {
                    label: "Website",
                    name: "EricHepperle.com",
                    url: "https://erichepperle.com",
                },
                site_bus:  {
                    label: "Website",
                    name: "Eric Hepperle Designs",
                    url: "https://erichepperledesigns.com",
                },
                site_other: "",
            }
        }
    }
}