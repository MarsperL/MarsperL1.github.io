// 获取所有类别列表项
const categoryItems = document.querySelectorAll('.category-list-item');

// 为每个类别列表项生成随机颜色渐变背景和图标
categoryItems.forEach((item, index) => {
    // 为每个类别列表项创建随机颜色渐变背景
    function randomBgImg() {
        const deg = Math.floor(Math.random() * 360);
        const randomBg = `linear-gradient(${deg}deg, #${Math.floor(Math.random()*16777215).toString(16)} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%)`;
        item.style.backgroundImage = randomBg;
    }

    // 生成随机图标（这里使用了 Font Awesome 图标库）
    const icons = ['📑', '📚', '🦋', '💻', '💬', '✨']; // 可以根据需要添加更多图标
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    // 更新类别列表项的 HTML 内容，设置背景和图标
    item.innerHTML = `
    <div>${item.innerHTML}</div>
    <div class="category-list-icon">${randomIcon}</div>`;

    // 调用随机颜色渐变背景函数
    randomBgImg();
});
