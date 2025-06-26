// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- GSAP Animation ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from(".fade-in-down", { duration: 1, y: -50, opacity: 0, ease: "power2.out", delay: 0.2 });
    gsap.from(".fade-in", { duration: 1.5, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(".fade-in-up", { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 0.8 });

    // Scroll-triggered animations for .slide-up elements
    const slideUpElements = gsap.utils.toArray('.slide-up');
    slideUpElements.forEach(el => {
        gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    // Counter animation
    gsap.to("#age-counter", {
        innerText: 69.2,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 0.1 },
        scrollTrigger: {
            trigger: "#age-counter",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        // 小数点第一位まで表示するためのフォーマッタ
        onUpdate: function() {
            this.targets()[0].innerHTML = parseFloat(this.targets()[0].innerText).toFixed(1);
        }
    });

});

// --- Modal Logic (Global Scope) ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // 背景のスクロールを禁止
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // スクロール禁止を解除
    }
}

// --- FAQ Accordion Icon Logic ---
// This doesn't need DOMContentLoaded as it uses a simple CSS class toggle
// The styles are handled in style.css for the [open] attribute