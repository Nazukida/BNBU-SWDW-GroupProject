function updateSelectedCity() {
    const selectElement = document.getElementById('hometown_select');
    const selectedValue = selectElement.value;
    document.getElementById('selectedCity').value = selectedValue;
}

var hometowns;
hometowns = [
    {
        Province: "HeNan",
        City: "ZhenZhou",
        Photo: "zhenzhou.jpg",
        information: "<li>Longmen Grottoes</li><li>Erqi Memorial Tower</li><li>Yellow River Scenic Area</li><li>Henan Museum</li>"
    },
    {
        Province: "HuNan",
        City: "XiangTan",
        Photo: "xiangtan.jpg",
        information: "<li>Mao Zedong's Hometown</li><li>Qi Baishi Memorial Hall</li><li>Yuhuashan Forest Park</li><li>Xiangjiang River Scenic Belt</li>"
    },
    {
        Province: "Guangdong",
        City: "Guangzhou",
        Photo: "guangzhou.jpg",
        information: "<li>Canton Tower</li><li>Baiyun Mountain</li><li>Chen Clan Ancestral Hall</li><li>Shamian Island</li>"
    },
    {
        Province: "Guangdong",
        City: "ShenZhen",
        Photo: "shenzhen.jpg",
        information: '<li>Window of the World</li><li>Splendid China Folk Village</li><li>OCT Loft Creative Culture Park</li><li>Dameisha Beach</li>'
    },
    {
        Province: "Hunan",
        City: "Yiyang",
        Photo: "yiyang.jpg",
        information: "<li>Meishan Cultural Park</li><li>Yiyang Ancient Town</li><li>Xianshan Scenic Area</li><li>Zi River Scenic Area</li>"
    }
]

function showHometown() {//显示家乡
    const selectedCity = document.getElementById('hometown_select').value;//获取选择
    const [province, city] = selectedCity.split(' '); // 分割省份和城市
    const hometown = hometowns.find(h => h.Province === province && h.City === city); // 查找匹配的家乡信息
    //输出表格
    if (hometown) {
        document.getElementById('hometown').innerHTML = `
        <div class="hometown-output">
            <table>
                <tr>
                    <td>
                        <p>${hometown.Province} Attraction:</p>
                        <ul>
                            ${hometown.information}
                        </ul>
                    </td>
                    <td>
                        <p>Hometown: ${hometown.Province} ${hometown.City}</p>
                        <img src="${hometown.Photo}" alt="${hometown.City}" style="width: 200px; height: 200px;">
                    </td>
                </tr>
            </table>
        </div>`;
    } else {
        document.getElementById('hometown').innerHTML = ''; // 清空内容
    }
}

// function showHometown() {
//     const template = `
//         <div class="hometown-card">
//             <h3>${hometown.Province} ${hometown.City}</h3>
//             <img src="${hometown.Photo}">
//             <ul>${hometown.information}</ul>
//         </div>
//     `;

//     document.getElementById('outputContainer').innerHTML = template;
// }
