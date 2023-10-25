document.addEventListener('DOMContentLoaded', function() {
    const noteTextarea = document.getElementById('note');
    const saveButton = document.getElementById('save');
    const notesList = document.getElementById('notes-list');
    const menuIcon = document.getElementById('menu-icon');
    const menuBox = document.getElementById('menu-box');

    saveButton.addEventListener('click', function() {
        const noteText = noteTextarea.value;

        if (noteText.trim() !== '') {
            const noteElement = document.createElement('div');
            noteElement.className = 'note';
            noteElement.textContent = noteText;
            notesList.appendChild(noteElement);

            // Clear the textarea
            noteTextarea.value = '';
        }
    });

    menuIcon.addEventListener('click', function() {
        menuBox.style.display = (menuBox.style.display === 'block') ? 'none' : 'block';
    });
});
