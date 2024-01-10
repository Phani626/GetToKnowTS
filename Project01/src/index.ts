class College {
  private studentList: string[] = [];
  protected collegeEvents: string[] = [];
  static playGround: string = "Football Ground";

  constructor(
    private readonly id: string,
    public studentName: string,
    public branch: string
  ) {}

  printStudentName() {
    console.log(
      `Student name: ${this.studentName}, id: ${this.id} , Branch: ${this.branch}`
    );
  }

  addAStudent(student: string) {
    this.studentList.push(student);
  }

  showStudentsList() {
    console.log(this.studentList);
  }
}

class CSEBranch extends College {
  private cseSubjects: string[] = [];
  constructor(id: string, studentName: string) {
    super(id, studentName, "CSE");
  }

  get addCseSubjects() {
    if (this.cseSubjects) {
      return this.cseSubjects;
    }
    throw new Error("No Subjects Added");
  }

  set addCseSubjects(subject: string[]) {
    this.cseSubjects.push(...subject);
  }

  printStaticMember() {
    console.log(College.playGround);
  }
}

class ECEBranch extends College {
  constructor(id: string, studentName: string) {
    super(id, studentName, "ECE");
  }
  set addAnEvent(events: string[]) {
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

class School {}
