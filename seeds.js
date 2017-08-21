var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Salmon Creek",
        image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    },
    {
        name: "Granite Hill",
        image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    },
    {
        name: "Cloud's Rest",
        image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    },
    {
        name: "Sky Hill",
        image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    },
    {
        name: "Lake Laky",
        image: "https://farm7.staticflickr.com/6085/6037590541_19248d41f0.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    },
    {
        name: "Hill Homeland",
        image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    },
    {
        name: "Grandmas Rest",
        image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    },
    {
        name: "Blue Moon",
        image: "https://farm4.staticflickr.com/3060/3021047498_eaab93a32b.jpg",
        description: "Bacon ipsum dolor amet short ribs meatball kielbasa strip steak, shank ham venison ball tip. Biltong pork chop pork beef. Frankfurter bacon jowl cow, pancetta tongue rump turducken biltong flank sirloin. Picanha landjaeger spare ribs, tail ground round kevin alcatra. Andouille tail short ribs, leberkas turducken biltong tenderloin pastrami shank short loin. Pig fatback strip steak hamburger. Beef ham landjaeger hamburger shankle pancetta, kielbasa tongue drumstick doner pork belly ground round."
    }
];

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        // if (err) {
        //     console.log(err);
        // } else {
        //     console.log("removed campgrounds from DB!");
        //      // add a few campgrounds
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground) {
        //             if(err) {
        //                 console.log(err);
        //             } else {
        //                 console.log("added " + campground.name);
        //                 // add a few comments
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Homer"        
        //                     }, function(err, comment) {
        //                         if(err) {
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created new comment on " + campground.name);
        //                         }
        //                     }
        //                 );
        //             }
        //         });
        //     });
        // }
    });
}

module.exports = seedDB;