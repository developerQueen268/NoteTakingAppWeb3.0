document.addEventListener('DOMContentLoaded', function() {
    const archivedNotesList = document.getElementById('archived-notes-list');

    // Sample archived notes data (you can replace this with your actual data)
    const archivedNotes = [
        "Archived Note 1",
        "Archived Note 2",
        "Archived Note 3",
    ];

    // Display archived notes
    for (const noteText of archivedNotes) {
        const noteElement = document.createElement('div');
        noteElement.className = 'archived-note';
        noteElement.textContent = noteText;
        archivedNotesList.appendChild(noteElement);
    }
});
