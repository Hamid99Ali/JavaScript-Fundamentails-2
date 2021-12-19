const object = {
    firstName: "Ghulam Nabi",
    lastName: "Hamid Ali",
    brithyear: 1999,
    Job: "Student",
    Friends: ["Ali Raza", "Rehan", "Muzzammil"],
    DrivenLicences: false,

    // caluAge: function (brithyear) {
    //     return 2037 - brithyear;
    // }

    // caluAge: function () {
    //     return 2037 - this.brithyear;
    // }

    caluAge: function () {
        // this.Age create a property in the current object in my case is object.
        this.Age = 2037 - this.brithyear;
        return this.Age;
    },
    getSummary: function () {
        console.log(`${this.lastName} has a ${this.Age}-years old ${this.Job} and, he has ${this.DrivenLicences ? "a" : "no"} driver's licences `)

    }
};
console.log(object.caluAge());
// console.log(object["caluAge"](1999))
// console.log(object.caluAge());
// console.log(object.caluAge());
// console.log(object.caluAge());
console.log(object.Age);
console.log(object.Age);
console.log(object);
console.log(object.getSummary())