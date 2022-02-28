var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}


function readFormData() {
    var formData = {};
    formData["StudentCode"] = document.getElementById("StudentCode").value;
    formData["Student"] = document.getElementById("Student").value;
    formData["mark"] = document.getElementById("mark").value;
    formData["rank"] = document.getElementById("rank").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.StudentCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Student;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.mark;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.rank;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("StudentCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Student").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mark").value = selectedRow.cells[2].innerHTML;
    document.getElementById("rank").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.StudentCode;
    selectedRow.cells[1].innerHTML = formData.Student;
    selectedRow.cells[2].innerHTML = formData.mark;
    selectedRow.cells[3].innerHTML = formData.rank;
}


function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("StudentCode").value = '';
    document.getElementById("Student").value = '';
    document.getElementById("mark").value = '';
    document.getElementById("rank").value = '';
    selectedRow = null;
}