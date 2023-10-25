document.addEventListener('DOMContentLoaded', function() {
    const deletedNotesList = document.getElementById('deleted-notes-list');

    // Sample deleted notes data (you can replace this with your actual data)
    const deletedNotes = [
        "Deleted Note 1",
        "Deleted Note 2",
        "Deleted Note 3",
    ];

    // Display deleted notes
    for (const noteText of deletedNotes) {
        const noteElement = document.createElement('div');
        noteElement.className = 'deleted-note';
        noteElement.textContent = noteText;
        deletedNotesList.appendChild(noteElement);
    }
});
