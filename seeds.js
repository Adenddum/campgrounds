var mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    data = [
    {
        name: "vir",
        image: "http://visitnin.com/comasy/assets/island-vir-1-croatia.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet non incididunt ullamco ribeye aliqua aute cow. Flank picanha tongue incididunt non jowl nisi ham hock ullamco andouille doner. Pork loin t-bone andouille duis, rump sirloin eiusmod esse ham hock pork belly quis leberkas shank. Tenderloin andouille minim dolore frankfurter shankle. Lorem dolor shank filet mignon capicola drumstick sed dolore velit non jowl. Jowl eiusmod pig, ham hock commodo dolore short ribs consectetur exercitation mollit venison cow ipsum cupidatat."
    },
    {
        name: "cres",
        image: "http://static.uniline-cdn.eu/images/destinations/islands/cres/cres2.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet non incididunt ullamco ribeye aliqua aute cow. Flank picanha tongue incididunt non jowl nisi ham hock ullamco andouille doner. Pork loin t-bone andouille duis, rump sirloin eiusmod esse ham hock pork belly quis leberkas shank. Tenderloin andouille minim dolore frankfurter shankle. Lorem dolor shank filet mignon capicola drumstick sed dolore velit non jowl. Jowl eiusmod pig, ham hock commodo dolore short ribs consectetur exercitation mollit venison cow ipsum cupidatat."
    },
    {
        name: "korčula",
        image: "http://www.a-transfers-croatia.com/wp-content/uploads/2016/01/Kor%C4%8Dula-7.jpg",
        description: "Spicy jalapeno bacon ipsum dolor amet non incididunt ullamco ribeye aliqua aute cow. Flank picanha tongue incididunt non jowl nisi ham hock ullamco andouille doner. Pork loin t-bone andouille duis, rump sirloin eiusmod esse ham hock pork belly quis leberkas shank. Tenderloin andouille minim dolore frankfurter shankle. Lorem dolor shank filet mignon capicola drumstick sed dolore velit non jowl. Jowl eiusmod pig, ham hock commodo dolore short ribs consectetur exercitation mollit venison cow ipsum cupidatat."
    }
];

function seedDB(){
    // Remove campgrounds
    Campground.remove ({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed cgs");
        // add campground
        data.forEach(function (seed) {
          Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("added a new cg");
                // adding comments
                Comment.create(
                    {
                        text: "fgeirhngfiurahegpeurhgreg",
                        author: "tutleksajdhfnisdhufi"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment");
                        }
                    });
            }
        });
    });
    });
    
}

module.exports = seedDB;
