function updateCityDisplay() {
    const selectElement = document.getElementById('hometown');
    const selectedValue = selectElement.value;
    document.getElementById('selectedCity').value = selectedValue;
}

var hometowns = [
    {
        Province: "HeNan",
        City: "ZhenZhou",
        Photo: "zhenzhou.jpg",
        information: "<li>Longmen Grottoes</li><li>Erqi Memorial Tower</li><li>Yellow River Scenic Area</li><li>Henan Museum</li>"
    },
    {
        Province: "HuNan",
        City: "XiangTan",
        Photo: "xiangtan.png",
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
                    </td>
                </tr>
            </table>
        `;
    } else {
        document.getElementById('hometownInfo').innerHTML = '';
    }
}
