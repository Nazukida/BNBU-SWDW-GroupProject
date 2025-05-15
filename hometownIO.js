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
        const commentFormHtml = `
            <form onsubmit="addNewComment(this, '${province}', '${city}')">
                <input type="text" placeholder="Username" required>
                <textarea placeholder="Write a comment..." required></textarea>
                <button type="submit">Add Comment</button>
            </form>
        `;
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
                        <button onclick="toggleComments('${province}', '${city}')">View Comments</button>
                        <div id="commentsCont_${province}_${city}" class="hidden">
                            ${commentFormHtml}
                        </div>
                    </td>
                </tr>
            </table>
        `;
        displayComments(hometown.comments, `commentsCont_${province}_${city}`);
    } else {
        document.getElementById('hometownInfo').innerHTML = '';
    }
}

function toggleComments(province, city) {
    const commentsCont = document.getElementById(`commentsCont_${province}_${city}`);
    const isHidden = commentsCont.className.includes('hidden');
    if (isHidden) {
        commentsCont.className = commentsCont.className.replace('hidden', '');
    } else {
        commentsCont.className += ' hidden';
    }
}

function addNewComment(form, province, city) {
    const hometown = hometowns.find(h => h.Province === province && h.City === city);
    const username = form[0].value;
    const commentText = form[1].value;
    const newComment = {
        username: username,
        comment: commentText,
        timestamp: new Date().toLocaleString()
    };
    hometown.comments.push(newComment);
    displayComments(hometown.comments, `commentsCont_${province}_${city}`);
    form[0].value = '';
    form[1].value = '';
    return false;
}

function displayComments(comments, containerId) {
    let commentsHtml = '';
    comments.forEach((comment) => {
        commentsHtml += `
            <div class="comment">
                <strong>${comment.username}</strong> - ${comment.comment} ( ${comment.timestamp} )
            </div>
        `;
    });
    const commentFormHtml = `
        <form onsubmit="addNewComment(this, '${containerId.split('_')[1]}', '${containerId.split('_')[2]}')">
            <input type="text" placeholder="Username" required>
            <textarea placeholder="Write a comment..." required></textarea>
            <button type="submit">Add Comment</button>
        </form>
    `;
    document.getElementById(containerId).innerHTML = commentsHtml + commentFormHtml;
}