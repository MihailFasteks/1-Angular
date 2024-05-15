var Student = /** @class */ (function () {
    function Student() {
        this.name = "";
        this.birthDate = "";
        this.phone = "";
        this.town = "";
        this.country = "";
        this.educBuilding = "";
        this.groupNumber = "";
    }
    Student.prototype.Print = function (student) {
        document.write(student.name);
        document.write(student.birthDate);
        document.write(student.phone);
        document.write(student.town);
        document.write(student.country);
        document.write(student.educBuilding);
        document.write(student.groupNumber);
    };
    Student.prototype.Input = function (n, bd, ph, t, c, eb, gn) {
        this.name = n;
        this.birthDate = bd;
        this.phone = ph;
        this.town = t;
        this.country = c;
        this.educBuilding = eb;
        this.groupNumber = gn;
    };
    Student.prototype.setName = function (n) {
        this.name = n;
    };
    Student.prototype.setBD = function (bd) {
        this.birthDate = bd;
    };
    Student.prototype.setPhone = function (ph) {
        this.phone = ph;
    };
    Student.prototype.setTown = function (t) {
        this.town = t;
    };
    Student.prototype.setCountry = function (c) {
        this.country = c;
    };
    Student.prototype.setEB = function (eb) {
        this.educBuilding = eb;
    };
    Student.prototype.setGN = function (gn) {
        this.groupNumber = gn;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getBD = function () {
        return this.birthDate;
    };
    Student.prototype.getPhone = function () {
        return this.phone;
    };
    Student.prototype.getTown = function () {
        return this.town;
    };
    Student.prototype.getCountry = function () {
        return this.country;
    };
    Student.prototype.getEB = function () {
        return this.educBuilding;
    };
    Student.prototype.getGN = function () {
        return this.groupNumber;
    };
    Student.prototype.printToTable = function () {
        var table = document.getElementById('studentTable');
        if (table) {
            var tbody = table.getElementsByTagName('tbody')[0];
            var row = tbody.insertRow();
            row.insertCell(0).textContent = this.name;
            row.insertCell(1).textContent = this.birthDate;
            row.insertCell(2).textContent = this.phone;
            row.insertCell(3).textContent = this.town;
            row.insertCell(4).textContent = this.country;
            row.insertCell(5).textContent = this.educBuilding;
            row.insertCell(6).textContent = this.groupNumber;
        }
        else {
            console.error("Элемент с id 'studentTable' не найден.");
        }
    };
    return Student;
}());
var students = [];
var stud1 = new Student();
stud1.Input('Ivanova Alisa', '10.11.2001', '+380507865434', 'Kiev', 'Ukraine', '2', 'KND-332');
var stud2 = new Student();
stud2.Input('Alexei Pozdniy', '12.11.2002', '+380998767887', 'Odessa', 'Ukraine', '3', 'KNP-121');
students.push(stud1);
students.push(stud2);
students.forEach(function (student) { return student.printToTable(); });
