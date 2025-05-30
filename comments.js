function addComment(comments, username, commentText) {
    const newComment = {
        username: username,
        comment: commentText,
        timestamp: new Date().toLocaleString()
    };
    comments.push(newComment);
}

function displayComments(comments, container) {
    container.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <strong>${comment.username}</strong> - ${comment.comment} ( ${comment.timestamp} )
        `;
        container.appendChild(commentElement);
    });
}
