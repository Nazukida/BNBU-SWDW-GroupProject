document.addEventListener('DOMContentLoaded', function() {
    const commentsContainer = document.getElementById('commentsContainer');
    const showCommentsButton = document.getElementById('showCommentsButton');
    const commentForm = document.createElement('form');
    const usernameInput = document.createElement('input');
    const commentInput = document.createElement('textarea');
    const submitButton = document.createElement('button');
    let comments = [];

    function displayComments() {
        commentsContainer.innerHTML = '';
        comments.forEach((comment, index) => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <strong>${comment.username}</strong> - ${comment.comment} ( ${comment.timestamp} )
            `;
            commentsContainer.appendChild(commentElement);
        });
    }

    function toggleComments() {
        if (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') {
            commentsContainer.style.display = 'block';
            commentForm.style.display = 'block';
        } else {
            commentsContainer.style.display = 'none';
            commentForm.style.display = 'none';
        }
    }

    showCommentsButton.addEventListener('click', toggleComments);

    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.required = true;

    commentInput.placeholder = 'Write a comment...';
    commentInput.required = true;

    submitButton.type = 'submit';
    submitButton.textContent = 'Add Comment';

    commentForm.appendChild(usernameInput);
    commentForm.appendChild(commentInput);
    commentForm.appendChild(submitButton);
    commentsContainer.appendChild(commentForm);

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newComment = {
            username: usernameInput.value,
            comment: commentInput.value,
            timestamp: new Date().toLocaleString()
        };
        comments.push(newComment);
        displayComments();
        usernameInput.value = '';
        commentInput.value = '';
    });
});
