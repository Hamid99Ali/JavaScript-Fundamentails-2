// BMI = mass / (height * height);

const mark = {
    fullName: "Ali Raza",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.Bmi = this.mass / (this.height * this.height);
        return this.Bmi;
    }
}
const markBmi = console.log(mark["calcBMI"]());

const jhon = {
    fullName: "Jhon Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.Bmi2 = this.mass / (this.height * this.height);
        return this.Bmi2;
    }
}
const jhonBmi = console.log(jhon["calcBMI"]());

markBmi <= jhonBmi ? console.log(`Jhon's Bmi is heigher ${jhon.Bmi2} then mark's Bmi ${mark.Bmi}`) : console.log(` Mark's BMi is heigher ${mark.Bmi} then Jhon's Bmi ${jhon.Bmi2}`);

