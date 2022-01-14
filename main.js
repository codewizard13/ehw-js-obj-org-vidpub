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
        }
    }
}