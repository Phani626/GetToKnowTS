"use strict";
class College {
    constructor(id, studentName, branch) {
        this.id = id;
        this.studentName = studentName;
        this.branch = branch;
        this.studentList = [];
        this.collegeEvents = [];
    }
    printStudentName() {
        console.log(`Student name: ${this.studentName}, id: ${this.id} , Branch: ${this.branch}`);
    }
    addAStudent(student) {
        this.studentList.push(student);
    }
    showStudentsList() {
        console.log(this.studentList);
    }
}
class CSEBranch extends College {
    constructor(id, studentName) {
        super(id, studentName, "CSE");
        this.cseSubjects = [];
    }
    get addCseSubjects() {
        if (this.cseSubjects) {
            return this.cseSubjects;
        }
        throw new Error("No Subjects Added");
    }
    set addCseSubjects(subject) {
        this.cseSubjects.push(...subject);
    }
}
class ECEBranch extends College {
    constructor(id, studentName) {
        super(id, studentName, "ECE");
    }
    set addAnEvent(events) {
        this.collegeEvents.push(...events);
    }
    get addAnEvent() {
        return this.collegeEvents;
    }
}
const cseBranchClass = new CSEBranch("C1", "Kalki");
cseBranchClass.printStudentName();
cseBranchClass.addAStudent("Ram");
cseBranchClass.showStudentsList();
cseBranchClass.addCseSubjects = ["Java", "C"];
console.log(cseBranchClass.addCseSubjects);
const eceBranchClass = new ECEBranch("E1", "Ravan");
eceBranchClass.addAnEvent = ["Cricket", "Football"];
console.log(eceBranchClass.addAnEvent);
