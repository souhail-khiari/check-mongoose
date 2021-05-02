const mongoose = require("mongoose");
const Person = require("./models/Person");

mongoose.connect("mongodb://localhost:27017/MongooseCheckpoint", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const person = new Person({
//     name: "john",
//     age: "20",
//     favoriteFoods: ["hamburger", "Pizza"],
// });

// person.save((error) => {
//     if (error) console.log(error);
// });

// Person.create(
//     [
//         {
//             name: "mark",
//             age: "30",
//             favoriteFoods: ["hamburger", "Pizza", "salade"],
//         },
//         {
//             name: "tony",
//             age: "45",
//             favoriteFoods: ["mlo5ia"],
//         },
//     ],
//     function (err) {
//         if (err) return console.log(err);
//         // saved!
//     }
// );

//Person.find({}, (err, data) => {
//    err
//        ? console.log("there is and error", err)
//        : console.log("this is the data: ", data);
//});
//Person.findOne({ favoriteFoods: "mlo5ia" }, (err, data) => {
//    err
//        ? console.log("there is and error", err)
//        : console.log("this is the data: ", data);
//});
//var personId :"";
//Person.findById(personId , (err, data) => {
//    err
//        ? console.log("there is and error", err)
//        : console.log("this is the data: ", data);
//});*
//Person.update(
//    { _id: personId },
//    { $push: { favoriteFoods: "hamburger" } },
//    done
//);
//Person.findOneAndUpdate({ name: "mark" },{age:20}, (err, data) => {
//    err
//        ? console.log("there is and error", err)
//        : console.log("this is the data: ", data);
//});
//Person.findByIdAndRemove(personId , (err, data) => {
//    err
//        ? console.log("there is and error", err)
//        : console.log("this is the data: ", data);
//});
//Person.remove({ name: "Mary" }, (err, data) => {
//    err
//        ? console.log("there is and error", err)
//        : console.log("this is the data: ", data);
//});
Person.find({ favoriteFoods: "burritos" })
    .sort({ name: 1 })
    .limit(2)
    .select({ age })
    .exec(),
    (err, data) => {
        err
            ? console.log("there is and error", err)
            : console.log("this is the data: ", data);
    };
