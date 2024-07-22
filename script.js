document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('parent');
    let draggedElement = null;

    // Add event listeners for drag events on each image
    container.addEventListener('dragstart', (e) => {
		console.log("drag start")
        draggedElement = e.target;
        e.target.classList.add('dragging');
    });

    container.addEventListener('dragend', (e) => {
		console.log("drag end")
        e.target.classList.remove('dragging');
        draggedElement = null;
    });

    // Add event listeners for dragover and drop events on the container
    container.addEventListener('dragover', (e) => {
		console.log("drag over")
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('image') && target !== draggedElement) {
            target.classList.add('dragover');
        }
    });

    container.addEventListener('dragleave', (e) => {
		console.log("drag leave")
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('image')) {
            target.classList.remove('dragover');
        }
    });

    container.addEventListener('drop', (e) => {
		console.log("drag drop")
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('image') && target !== draggedElement) {
            const tempSrc = target.style.backgroundImage;
            target.style.backgroundImage = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = tempSrc;

            target.classList.remove('dragover');
        }
    });
});