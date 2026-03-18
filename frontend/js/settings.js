class SettingsManager {
    constructor() {
        this.settings = {
            theme: {
                mode: 'light',
                auto: false
            },
            language: 'en',
            accessibility: {
                highContrast: false,
                largeText: false,
                reduceMotion: false,
                fontSize: 16
            },
            security: {
                twoFactor: false,
                loginAlerts: true
            },
            notifications: {
                email: true,
                appointments: true,
                news: false
            },
            privacy: {
                cookies: true,
                analytics: false,
                marketing: false
            }
        };

        this.init();
    }

    init() {
        this.loadSettings();
        this.setupEventListeners();
        this.applySettings();
        if (this.settings.theme.auto) {
            this.startAutoTheme();
        }
    }

    loadSettings() {
        const saved = localStorage.getItem('settings');
        if (saved) {
            this.settings = JSON.parse(saved);
        }
    }

    saveSettings() {
        localStorage.setItem('settings', JSON.stringify(this.settings));
        this.showSaveSuccess();
    }

    setupEventListeners() {
        // Theme Buttons
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                this.setTheme(theme);
            });
        });

        // Auto Theme Toggle
        const autoTheme = document.getElementById('autoTheme');
        if (autoTheme) {
            autoTheme.checked = this.settings.theme.auto;
            autoTheme.addEventListener('change', (e) => {
                this.settings.theme.auto = e.target.checked;
                if (e.target.checked) {
                    this.startAutoTheme();
                }
                this.saveSettings();
            });
        }

        // Language Select
        const language = document.getElementById('language');
        if (language) {
            language.value = this.settings.language;
            language.addEventListener('change', (e) => {
                this.settings.language = e.target.value;
                this.saveSettings();
            });
        }

        // Accessibility Settings
        const accessibilityToggles = ['highContrast', 'largeText', 'reduceMotion'];
        accessibilityToggles.forEach(setting => {
            const element = document.getElementById(setting);
            if (element) {
                element.checked = this.settings.accessibility[setting];
                element.addEventListener('change', (e) => {
                    this.settings.accessibility[setting] = e.target.checked;
                    this.applyAccessibilitySetting(setting);
                    this.saveSettings();
                });
            }
        });

        // Font Size Controls
        document.getElementById('decreaseText')?.addEventListener('click', () => {
            this.changeFontSize(-1);
        });

        document.getElementById('increaseText')?.addEventListener('click', () => {
            this.changeFontSize(1);
        });

        // Security Settings
        ['twoFactor', 'loginAlerts'].forEach(setting => {
            const element = document.getElementById(setting);
            if (element) {
                element.checked = this.settings.security[setting];
                element.addEventListener('change', (e) => {
                    this.settings.security[setting] = e.target.checked;
                    this.saveSettings();
                });
            }
        });

        // Notification Settings
        const notifMap = {
            'emailNotif': 'email',
            'appointmentReminder': 'appointments',
            'newsUpdates': 'news'
        };

        Object.entries(notifMap).forEach(([id, key]) => {
            const element = document.getElementById(id);
            if (element) {
                element.checked = this.settings.notifications[key];
                element.addEventListener('change', (e) => {
                    this.settings.notifications[key] = e.target.checked;
                    this.saveSettings();
                });
            }
        });

        // Privacy Settings
        ['cookies', 'analytics', 'marketing'].forEach(setting => {
            const element = document.getElementById(setting);
            if (element) {
                element.checked = this.settings.privacy[setting];
                element.addEventListener('change', (e) => {
                    this.settings.privacy[setting] = e.target.checked;
                    this.saveSettings();
                });
            }
        });

        // Change Password Button
        document.querySelector('.change-password-btn')?.addEventListener('click', () => {
            // Implement password change functionality
            alert('Password change functionality will be implemented soon!');
        });

        // Save Button
        document.getElementById('saveSettings')?.addEventListener('click', () => {
            this.saveSettings();
        });
    }

    setTheme(theme) {
        this.settings.theme.mode = theme;
        document.body.className = theme + '-theme';
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
        this.saveSettings();
    }

    startAutoTheme() {
        const checkTime = () => {
            const hour = new Date().getHours();
            const shouldBeDark = hour >= 18 || hour < 6;
            this.setTheme(shouldBeDark ? 'dark' : 'light');
        };

        checkTime();
        setInterval(checkTime, 60000); // Check every minute
    }

    changeFontSize(delta) {
        const newSize = this.settings.accessibility.fontSize + delta;
        if (newSize >= 12 && newSize <= 24) {
            this.settings.accessibility.fontSize = newSize;
            document.getElementById('textSize').textContent = newSize + 'px';
            document.documentElement.style.fontSize = newSize + 'px';
            this.saveSettings();
        }
    }

    applyAccessibilitySetting(setting) {
        const enabled = this.settings.accessibility[setting];
        document.body.classList.toggle(setting, enabled);
        
        if (setting === 'largeText') {
            document.body.style.fontSize = enabled ? '120%' : '';
        }
    }

    applySettings() {
        // Apply Theme
        this.setTheme(this.settings.theme.mode);

        // Apply Font Size
        document.documentElement.style.fontSize = this.settings.accessibility.fontSize + 'px';
        document.getElementById('textSize').textContent = 
            this.settings.accessibility.fontSize + 'px';

        // Apply Accessibility Settings
        Object.entries(this.settings.accessibility).forEach(([setting, enabled]) => {
            if (typeof enabled === 'boolean') {
                this.applyAccessibilitySetting(setting);
            }
        });
    }

    showSaveSuccess() {
        const btn = document.getElementById('saveSettings');
        if (!btn) return;

        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Saved!';
        btn.classList.add('success');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('success');
        }, 2000);
    }
}

// Initialize Settings
document.addEventListener('DOMContentLoaded', () => {
    window.settingsManager = new SettingsManager();
});
