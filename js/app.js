const products = [
    {
        id: 1,
        name: "آيفون 15 برو ماكس 256GB",
        category: "electronics",
        price: 4999,
        oldPrice: 5499,
        icon: "fas fa-mobile-alt",
        description: "هاتف آيفون 15 برو ماكس بمعالج A17 Pro"
    },
    {
        id: 2,
        name: "سماعات AirPods Pro 2",
        category: "electronics",
        price: 899,
        oldPrice: 1099,
        icon: "fas fa-headphones",
        description: "سماعات لاسلكية مع إلغاء الضوضاء"
    },
    {
        id: 3,
        name: "قميص رجالي قطن ممتاز",
        category: "fashion",
        price: 149,
        oldPrice: 199,
        icon: "fas fa-tshirt",
        description: "قميص رجالي من القطن الممتاز"
    },
    {
        id: 4,
        name: "حذاء رياضي نايك اير ماكس",
        category: "fashion",
        price: 499,
        oldPrice: 699,
        icon: "fas fa-shoe-prints",
        description: "حذاء رياضي مريح للتوسيد المثالي"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = products.map(p => `
        <div style="background: white; padding: 15px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
            <i class="${p.icon}" style="font-size: 50px; color: #4f46e5; margin: 15px 0;"></i>
            <h3 style="font-size: 16px; margin-bottom: 10px;">${p.name}</h3>
            <div style="color: #4f46e5; font-weight: bold; font-size: 18px; margin-bottom: 10px;">${p.price} ر.س</div>
            <button onclick="alert('تمت الإضافة بنجاح! 🛒')" style="background: #4f46e5; color: white; border: none; padding: 10px; width: 100%; border-radius: 8px; cursor: pointer;">
                أضف للسلة
            </button>
        </div>
    `).join('');
});
