const container = document.getElementById('students');
const disributed = document.getElementById('distributed-students');

let arr = [];

function onclick(el) {
    arr[el.id] = arr[el.id] === 1 ? 0 : 1;
    const div = document.getElementById(el.id);
    div.style.backgroundColor = arr[el.id] === 1 ? '#4caf50' : 'aqua';
}

function updateStudentsArray(NoOfStudents) {
    arr = Array(NoOfStudents).fill(1);
}

document.getElementById('numberOfStudents').addEventListener('input', function () {
    const NoOfStudents = parseInt(this.value);
    
    // Clear existing content in the container
    container.innerHTML = '';


    // Update the students array
    updateStudentsArray(NoOfStudents);

    // Populate the container with new div elements
    for (let i = 0; i < NoOfStudents; i++) {
        const div = document.createElement("div");
        div.id = `${i}`;
        div.innerHTML = `<h3>${i + 1}</h3>`;
        div.addEventListener('click', function() { onclick(this); });
        container.append(div);
        console.log(div);
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById('numberOfTeachers').addEventListener('input', function () {
    const NoOfTeachers = parseInt(this.value);
    
    // Clear existing content in the container

    presentStudents = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            presentStudents.push(i + 1);
        }
    }

    let groups = Math.floor(presentStudents.length / NoOfTeachers);
    let rest = presentStudents.length % NoOfTeachers;

    let ans = [];

    for (let i = 0; i < NoOfTeachers; i++) {
        let group = [];
        for (let j = 0; j < groups; j++) {
            if (presentStudents.length > 0) {
                let index = getRandomInt(presentStudents.length);
                let student = presentStudents.splice(index, 1)[0];
                group.push(student);
        }
    }
        ans.push(group);
    }

    // Distribute remaining students to existing groups
    for (let i = 0; i < rest; i++) {
        ans[i].push(presentStudents.pop());
    }

    disributed.innerHTML = '';


    for (let i = 0; i < NoOfTeachers; i++) {
        const div = document.createElement("div");
        div.id = `Teacher${i+1}`;
        ans[i].sort();
        div.innerHTML = `<h3>Teacher ${i+1}: ${ans[i]}</h3>`;
        disributed.append(div);
        console.log(div);
    }


  
    
});

