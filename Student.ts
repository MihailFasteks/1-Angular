class Student{
    private name:string;
    private birthDate:string;
    private phone:string;
    private town:string;
    private country:string;
    private educBuilding:string;
    private groupNumber:string;
    
    constructor (){ //возможен только 1 конструктор, печально! :(
    this.name="";
    this.birthDate="";
    this.phone="";
    this.town="";
    this.country="";
    this.educBuilding="";
    this.groupNumber="";
    }
    public Print(student: Student){
        document.write(student.name);
        document.write(student.birthDate);
        document.write(student.phone);
        document.write(student.town);
        document.write(student.country);
        document.write(student.educBuilding);
        document.write(student.groupNumber);
    }
    public Input(n:string, bd:string, ph:string, t:string, c:string, eb:string, gn:string){
        this.name=n;
    this.birthDate=bd;
    this.phone=ph;
    this.town=t;
    this.country=c;
    this.educBuilding=eb;
    this.groupNumber=gn;
    }
    public setName(n:string){
        this.name=n;
    }
    public setBD(bd:string){
        this.birthDate=bd;
    }
    public setPhone(ph:string){
        this.phone=ph;
    }
    public setTown(t:string){
        this.town=t;
    }
    public setCountry(c:string){
        this.country=c;
    }
    public setEB(eb:string){
        this.educBuilding=eb;
    }
    public setGN(gn:string){
        this.groupNumber=gn;
    }

    public getName(){
        return this.name;
    }
    public getBD(){
        return this.birthDate;
    }
    public getPhone(){
        return this.phone;
    }
    public getTown(){
        return this.town;
    }
    public getCountry(){
        return this.country;
    }
    public getEB(){
        return this.educBuilding;
    }
    public getGN(){
        return this.groupNumber;
    }
    public printToTable() {
        const table = document.getElementById('studentTable');
        if (table) {
            const tbody = table.getElementsByTagName('tbody')[0];
            const row = tbody.insertRow();
            row.insertCell(0).textContent = this.name;
            row.insertCell(1).textContent = this.birthDate;
            row.insertCell(2).textContent = this.phone;
            row.insertCell(3).textContent = this.town;
            row.insertCell(4).textContent = this.country;
            row.insertCell(5).textContent = this.educBuilding;
            row.insertCell(6).textContent = this.groupNumber;
        } else {
            console.error("Элемент с id 'studentTable' не найден.");
        }
    }
}

let students:Student[]=[];
let stud1=new Student();
stud1.Input('Ivanova Alisa', '10.11.2001', '+380507865434', 'Kiev', 'Ukraine', '2', 'KND-332');
let stud2=new Student();
stud2.Input('Alexei Pozdniy', '12.11.2002', '+380998767887', 'Odessa', 'Ukraine', '3', 'KNP-121');
students.push(stud1);
students.push(stud2);


students.forEach(student => student.printToTable());