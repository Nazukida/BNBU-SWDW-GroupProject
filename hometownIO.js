function updateCityDisplay() {
    const selectElement = document.getElementById('hometown');
    const selectedValue = selectElement.value;
    document.getElementById('selectedCity').value = selectedValue;
    showHometownInfo();
}

var hometowns = [
    {
        Province: "HeNan",
        City: "ZhenZhou",
        Photo: "zhenzhou.jpg",
        information: "<li>Longmen Grottoes</li><li>Erqi Memorial Tower</li><li>Yellow River Scenic Area</li><li>Henan Museum</li>",
        comments: [
            { username: "Alice", comment: "Great project!", timestamp: new Date().toLocaleString() },
            { username: "Bob", comment: "I love the design!", timestamp: new Date().toLocaleString() }
        ]
    },
    {
        Province: "HuNan",
        City: "XiangTan",
        Photo: "xiangtan.png",
        information: "<li>Mao Zedong's Hometown</li><li>Qi Baishi Memorial Hall</li><li>Yuhuashan Forest Park</li><li>Xiangjiang River Scenic Belt</li>",
        comments: [
            { username: "Charlie", comment: "This is a great place!", timestamp: new Date().toLocaleString() },
            { username: "David", comment: "I will return!", timestamp: new Date().toLocaleString() }
        ]
    },
    {
        Province: "Guangdong",
        City: "Guangzhou",
        Photo: "guangzhou.jpg",
        information: "<li>Canton Tower</li><li>Baiyun Mountain</li><li>Chen Clan Ancestral Hall</li><li>Shamian Island</li>",
        comments: [
            { username: "Eve", comment: "I love this city!", timestamp: new Date().toLocaleString() },
            { username: "Frank", comment: "Great food!", timestamp: new Date().toLocaleString() }
        ]
    },
    {
        Province: "Guangdong",
        City: "ShenZhen",
        Photo: "shenzhen.jpg",
        information: '<li>Window of the World</li><li>Splendid China Folk Village</li><li>OCT Loft Creative Culture Park</li><li>Dameisha Beach</li>',
        comments: [
            { username: "Grace", comment: "This is a beautiful city!", timestamp: new Date().toLocaleString() },
            { username: "Hank", comment: "I will visit again!", timestamp: new Date().toLocaleString() }
        ]
    },
    {
        Province: "Hunan",
        City: "Yiyang",
        Photo: "yiyang.jpg",
        information: "<li>Meishan Cultural Park</li><li>Yiyang Ancient Town</li><li>Xianshan Scenic Area</li><li>Zi River Scenic Area</li>",
        comments: [
            { username: "Ivy", comment: "I love the nature here!", timestamp: new Date().toLocaleString() },
            { username: "Jack", comment: "Great place to relax!", timestamp: new Date().toLocaleString() }
        ]
    }
];

function showHometownInfo() {
    const selectedCity = document.getElementById('hometown').value;
    const [province, city] = selectedCity.split(' ');
    const hometown = hometowns.find(h => h.Province === province && h.City === city);
    if (hometown) {
        document.getElementById('hometownInfo').innerHTML = `
            <table style="border-collapse: collapse; width: 100%;">
                <tr>
                    <td style="border: 1px solid black; padding: 10px;">
                        <p>${hometown.Province} Attraction:</p>
                        <ul style="margin: 0; padding-left: 20px;">
                            ${hometown.information}
                        </ul>
                    </td>
                    <td style="border: 1px solid black; padding: 10px;">
                        <p>Hometown: ${hometown.Province} ${hometown.City}</p>
                        <img src="${hometown.Photo}" alt="${hometown.City}" style="width: 200px; height: 200px;">
                        <button id="showCommentsButton" style="display: block;">View Comments</button>
                        <div id="commentsContainer" style="display: none; margin-top: 20px;"></div>
                    </td>
                </tr>
            </table>
        `;
        const showCommentsButton = document.getElementById('showCommentsButton');
        showCommentsButton.addEventListener('click', () => toggleComments(hometown.comments));
        initializeComments(hometown.comments);
    } else {
        document.getElementById('hometownInfo').innerHTML = '';
    }
}

function initializeComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer');
    const showCommentsButton = document.getElementById('showCommentsButton');

    // 创建评论输入表单
    const commentForm = document.createElement('form');
    const usernameInput = document.createElement('input');
    const commentInput = document.createElement('textarea');
    const submitButton = document.createElement('button');

    // 设置用户名输入框
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.required = true;

    // 设置评论输入框
    commentInput.placeholder = 'Write a comment...';
    commentInput.required = true;

    // 设置提交按钮
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Comment';

    // 将输入框和按钮添加到表单中
    commentForm.appendChild(usernameInput);
    commentForm.appendChild(commentInput);
    commentForm.appendChild(submitButton);

    // 将表单添加到评论容器中
    commentsContainer.appendChild(commentForm);

    // 显示评论的函数
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
        commentsContainer.appendChild(commentForm); // 确保表单在评论下方
    }

    // 切换评论显示状态的函数
    function toggleComments() {
        if (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') {
            commentsContainer.style.display = 'block';
            displayComments();
        } else {
            commentsContainer.style.display = 'none';
        }
    }

    // 为查看评论按钮添加点击事件
    showCommentsButton.addEventListener('click', toggleComments);

    // 为表单添加提交事件
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

    // 初始隐藏评论容器
    commentsContainer.style.display = 'none';
}
