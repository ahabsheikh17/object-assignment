const students = {
    student1: {
      name: "Donald Jack",
      semester: 1,
      father_name: "Jack Jayson",
      isFeePaid: true,
      courses: ["Mathematics", " Physics", " Zoology"],
        },
    student2: {
      name: "Jackson Jack",
      father_name: "Jhony",
      semester: 3,
      isFeePaid: false,
      courses: ["Biology", " Chemistry", " English"],
    
    },
    student3: {
      name: "Surya Kumar",
      father_name: "Kumar",
      semester: 4,
      isFeePaid: true,
      courses: ["Economics", " Statistics", " Academy"],
    
    },
    student4: {
      name: "Elon Dusk",
      father_name: "Dusken",
      semester: 2,
      isFeePaid: false,
      courses: ["Frontend", " Backend", " Marketing"],
        },
    
  };
  
  var main = document.getElementById("main");
  for (var key in students) {
    main.innerHTML += `
                      
                  <div class="card-body">
                    <h3 class="card-title"><span>Name :</span> ${students[
                      key
                    ].name.toUpperCase()}</h3>
                    <p class="card-text"><span>Father Name :</span> ${students[
                      key
                    ].father_name.toUpperCase()}</p>
                    <p class="card-text"><span>Semester :</span> ${
                      students[key].semester
                    }</p>
                    <p class="card-text"><span>IS Fee Paid :</span> ${
                      students[key].isFeePaid
                    }</p>
                    <p class="card-text"><span>Courses :</span> ${
                      students[key].courses
                    }</p>
                    <div class = "d-flex gap-2"></div>
                  </div>
                </div>
      </div>
  `;
  }