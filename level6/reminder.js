document.addEventListener('DOMContentLoaded', function() {
    const reminderNotesList = document.getElementById('reminder-notes-list');

    // Sample reminder notes data (you can replace this with your actual data)
    const reminderNotes = [
        "Reminder Note 1",
        "Reminder Note 2",
        "Reminder Note 3",
    ];

    // Display reminder notes
    for (const noteText of reminderNotes) {
        const noteElement = document.createElement('div');
        noteElement.className = 'reminder-note';
        noteElement.textContent = noteText;
        reminderNotesList.appendChild(noteElement);
    }
});
