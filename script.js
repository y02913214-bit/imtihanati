let currentDayId = null;

// وظيفة فتح قائمة المواد عند الضغط على +
function openSubjectInput(dayId) {
    currentDayId = dayId;
    const menu = document.getElementById('materials-menu');
    menu.classList.remove('hidden');
}

// وظيفة إغلاق القائمة
function closeMenu() {
    const menu = document.getElementById('materials-menu');
    menu.classList.add('hidden');
}

// وظيفة إضافة المادة المختارة للجدول
function selectMaterial(name, className) {
    const container = document.getElementById(`subjects-${currentDayId}`);
    const addButton = container.querySelector('.add-subject-btn');

    // إنشاء العنصر الجديد (التاج)
    const tag = document.createElement('span');
    tag.className = `subject-tag ${className}`;
    tag.innerHTML = `
        ${name} 
        <button class="delete-tag" onclick="this.parentElement.remove()">×</button>
    `;

    // إضافته قبل زر الزائد مباشرة
    container.insertBefore(tag, addButton);
    
    // إغلاق القائمة بعد الاختيار
    closeMenu();
}