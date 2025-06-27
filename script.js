// script.js (修正版・最終完全版)

document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // ページの表示に必須なアニメーション処理を先に初期化
    // ===================================================================
    const initAnimations = () => {
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
            onUpdate: function() {
                this.targets()[0].innerHTML = parseFloat(this.targets()[0].innerText).toFixed(1);
            }
        });
    };

    // ===================================================================
    // 追加機能であるパーソナライズ処理
    // ===================================================================
    const personalizeHeroSection = async () => {
        const heroTitle = document.getElementById('personalized-hero-title');
        if (!heroTitle) return;

        // 再訪問かどうかをチェック
        if (localStorage.getItem('visitedAgriHackathonLP')) {
            heroTitle.textContent = 'おかえりなさい。未来を変える準備は、もうすぐ整います。';
            return; // 再訪問時はここで処理を終了
        }
        
        // 初回訪問の場合
        try {
            const response = await fetch('https://ip-api.com/json/?fields=status,message,regionName,query');
            if (!response.ok) throw new Error('API request failed');
            
            const data = await response.json();
            if (data.status === 'success' && data.regionName) {
                heroTitle.textContent = `${data.regionName}の挑戦者へ。そのコードが、農業の未来を変える。`;
            } else {
                heroTitle.textContent = '挑戦者よ、集え。あなたのコードが、農業の未来を変える。';
            }
        } catch (error) {
            console.error("Could not fetch location data:", error);
            heroTitle.textContent = '挑戦者よ、集え。あなたのコードが、農業の未来を変える。';
        } finally {
            // 訪問記録を保存
            localStorage.setItem('visitedAgriHackathonLP', 'true');
        }
    };

    // ===================================================================
    // 処理の実行
    // ===================================================================
    initAnimations();          // まずアニメーションを初期化してページを表示
    personalizeHeroSection();  // 次にパーソナライズ処理を非同期で実行

});


// --- Modal Logic (Global Scope) ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}
