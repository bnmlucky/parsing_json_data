var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var employees = JSON.parse(xhr.responseText);
        console.log(employees);
    }
};
xhr.open('GET', 'data/employees.json');
// in real life it will be a backend script
xhr.send();