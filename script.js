// script.js

document.addEventListener('DOMContentLoaded', () => {

    // ★★★【ギミック2】パーソナライズヒーローセクション ★★★
    const personalizeHeroSection = async () => {
        const heroTitle = document.getElementById('personalized-hero-title');
        if (!heroTitle) return;

        // 1. 再訪問かどうかをチェック
        if (localStorage.getItem('visitedAgriHackathonLP')) {
            // 再訪問の場合のメッセージ
            heroTitle.textContent = 'おかえりなさい。未来を変える準備は、もうすぐ整います。';
        } else {
            // 初回訪問の場合
            try {
                // 2. IPアドレスから地域情報を取得
                const response = await fetch('https://ip-api.com/json/?fields=status,message,regionName,query');
                if (!response.ok) {
                    throw new Error('API request failed');
                }
                const data = await response.json();

                if (data.status === 'success' && data.regionName) {
                    // 3. 地域情報に基づいたメッセージに書き換え
                    heroTitle.textContent = `${data.regionName}の挑戦者へ。そのコードが、農業の未来を変える。`;
                } else {
                    // API失敗時や海外からの場合のデフォルトメッセージ
                    heroTitle.textContent = '挑戦者よ、集え。あなたのコードが、農業の未来を変える。';
                }
            } catch (error) {
                console.error("Could not fetch location data:", error);
                // エラー時のデフォルトメッセージ
                heroTitle.textContent = '挑戦者よ、集え。あなたのコードが、農業の未来を変える。';
            }
            
            // 初回訪問の記録をlocalStorageに保存
            localStorage.setItem('visitedAgriHackathonLP', 'true');
        }
    };

    // ページ読み込み時にパーソナライズ処理を実行
    personalizeHeroSection();


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
