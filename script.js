function insert_Row() {
    // Get the table by its id
    const table = document.getElementById('sampleTable');
    
    // Create a new row element
    const newRow = document.createElement('tr');
    
    // Create two new cells
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    
    // Set the text content for the new cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
    
    // Append the cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    
    // Insert the new row at the top of the table (after the header, if present)
    table.insertBefore(newRow, table.firstChild);
}
