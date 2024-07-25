function insert_Row() {
    const table = document.getElementById('sampleTable');
    if (table) {
        console.log('Table found');
        // Create a new row
        const newRow = document.createElement('tr');
        
        // Create two new cells
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        
        // Set text content for the new cells
        cell1.textContent = 'New Cell1';
        cell2.textContent = 'New Cell2';
        
        // Append the new cells to the new row
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        
        // Insert the new row at the beginning of the table
        table.insertBefore(newRow, table.firstChild);
        console.log('Row inserted');
    } else {
        console.error('Table not found');
    }
}
