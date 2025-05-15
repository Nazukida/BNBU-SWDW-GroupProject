// 定义一个函数来初始化评论功能
function initComments() {
    // 获取评论容器元素
    var commentsContainer = document.getElementById('commentsContainer');
    // 获取查看评论按钮元素
    var showCommentsButton = document.getElementById('showCommentsButton');
    // 创建用户名输入框的 HTML 字符串
    var usernameInputHtml = '<input type="text" placeholder="Username" required>';
    // 创建评论输入文本域的 HTML 字符串
    var commentInputHtml = '<textarea placeholder="Write a comment..." required></textarea>';
    // 创建提交按钮的 HTML 字符串
    var submitButtonHtml = '<button type="button" onclick="addComment()">Add Comment</button>';
    // 初始化一个空的评论数组
    var comments = [];

    // 显示评论的函数
    function displayComments() {
        var commentHtml = '';
        for (var i = 0; i < comments.length; i++) {
            var comment = comments[i];
            // 构建单条评论的 HTML 字符串
            commentHtml += '<div class="comment">' +
                '<strong>' + comment.username + '</strong> - ' + comment.comment + ' ( ' + comment.timestamp + ' )' +
                '</div>';
        }
        // 将评论 HTML 字符串插入到评论容器中
        commentsContainer.innerHTML = commentHtml + usernameInputHtml + commentInputHtml + submitButtonHtml;
    }

    // 切换评论显示状态的函数
    function toggleComments() {
        var containerContent = commentsContainer.innerHTML;
        if (containerContent === '') {
            displayComments();
        } else {
            commentsContainer.innerHTML = '';
        }
    }

    // 添加评论的函数
    window.addComment = function () {
        var usernameInput = document.querySelector('#commentsContainer input');
        var commentInput = document.querySelector('#commentsContainer textarea');
        var username = usernameInput.value;
        var commentText = commentInput.value;
        if (username && commentText) {
            // 创建一个新的评论对象，包含用户名、评论内容和时间戳
            var newComment = {
                username: username,
                comment: commentText,
                timestamp: new Date().toLocaleString()
            };
            // 将新评论添加到评论数组中
            comments.push(newComment);
            // 调用 displayComments 函数显示更新后的评论列表
            displayComments();
            // 清空用户名输入框
            usernameInput.value = '';
            // 清空评论输入文本域
            commentInput.value = '';
        }
    };

    // 为查看评论按钮添加内联点击事件处理程序
    showCommentsButton.onclick = toggleComments;
}

// 在页面加载完成后调用 initComments 函数
document.addEventListener('DOMContentLoaded', initComments);