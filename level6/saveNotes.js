document.addEventListener('DOMContentLoaded', function() {
    const savedNotesList = document.getElementById('saved-notes-list');

    // Sample saved notes data (you can replace this with your actual data)
    const savedNotes = [
        "saved Note 1",
        "saved Note 2",
        "saved Note 3",
    ];

    // Display saved notes
    for (const noteText of savedNotes) {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.textContent = noteText;
        savedNotesList.appendChild(noteElement);
    }
});
