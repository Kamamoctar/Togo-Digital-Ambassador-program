/* This JavaScript code snippet is adding event listeners to three different forms (Employee Form,
Department Form, and Project Form) in an HTML document. The event listener is triggered when the DOM
content is fully loaded (`DOMContentLoaded` event). */
document.addEventListener('DOMContentLoaded', () => {
    // Employee Form Validation and Data Handling
    const employeeForm = document.getElementById('employeeForm');
    const employeeTableBody = document.getElementById('employeeTable').querySelector('tbody');
    
    employeeForm.addEventListener('submit', (event) => {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const departmentId = document.getElementById('departmentId').value.trim();
        
        if (firstName === '' || lastName === '' || departmentId === '') {
            event.preventDefault();  // Prevent form submission
            alert('Please fill out all mandatory fields in the Employee form.');
        } else {
            event.preventDefault();  // Prevent form submission for demonstration purposes
            
            // Add data to the employee table
            const newRow = employeeTableBody.insertRow();
            newRow.insertCell(0).textContent = firstName;
            newRow.insertCell(1).textContent = lastName;
            newRow.insertCell(2).textContent = departmentId;
            
            // Clear form fields
            employeeForm.reset();
        }
    });

    // Department Form Validation and Data Handling
    const departmentForm = document.getElementById('departmentForm');
    const departmentTableBody = document.getElementById('departmentTable').querySelector('tbody');
    
    departmentForm.addEventListener('submit', (event) => {
        const departmentName = document.getElementById('departmentName').value.trim();
        
        if (departmentName === '') {
            event.preventDefault();  // Prevent form submission
            alert('Please fill out all mandatory fields in the Department form.');
        } else {
            event.preventDefault();  // Prevent form submission for demonstration purposes
            
            // Add data to the department table
            const newRow = departmentTableBody.insertRow();
            newRow.insertCell(0).textContent = departmentName;
            
            // Clear form fields
            departmentForm.reset();
        }
    });

    // Project Form Validation and Data Handling
    const projectForm = document.getElementById('projectForm');
    const projectTableBody = document.getElementById('projectTable').querySelector('tbody');
    
  /* This part is handling form submission for the Project form. */
    projectForm.addEventListener('submit', (event) => {
        const projectName = document.getElementById('projectName').value.trim();
        const departmentId = document.getElementById('projectDepartmentId').value.trim();
        
        if (projectName === '' || departmentId === '') {
            event.preventDefault();  // Prevent form submission
            alert('Please fill out all mandatory fields in the Project form.');
        } else {
            event.preventDefault();  // Prevent form submission for demonstration purposes
            
            // Add data to the project table
            const newRow = projectTableBody.insertRow();
            newRow.insertCell(0).textContent = projectName;
            newRow.insertCell(1).textContent = departmentId;
            
            // Clear form fields
            projectForm.reset();
        }
    });
});
