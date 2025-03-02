<template>
  <div class="container">
    <header>
      <div class="logo">
        <h1>X-Made</h1>
      </div>
      <nav>
        <a href="#" class="register-link">注册</a>
        <a href="#" class="forgot-password">忘记密码</a>
      </nav>
    </header>

    <main class="login-form">
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input v-model="username" type="text" id="username" placeholder="用户名/邮箱" required>
        </div>
        <div class="form-group password-group">
          <input v-model="password" :type="passwordType" id="password" placeholder="密码" required>
          <span class="toggle-password" @click="togglePasswordVisibility">{{ passwordToggleIcon }}</span>
        </div>
        <div class="form-group remember-me">
          <input type="checkbox" id="remember">
          <label for="remember">记住我</label>
        </div>
        <button type="submit" class="login-btn" :class="{ loading: isLoading }">
          <span v-if="!isLoading">登录</span>
          <i v-if="isSuccess" class="fas fa-check"></i>
        </button>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </form>
    </main>

    <footer>
      <div class="social-login">
        <button class="wechat" @mouseover="handleSocialButtonHover" @mouseout="handleSocialButtonOut">
          <i class="fab fa-weixin"></i>
          <span>微信登录</span>
        </button>
        <button class="qq" @mouseover="handleSocialButtonHover" @mouseout="handleSocialButtonOut">
          <i class="fab fa-qq"></i>
          <span>QQ登录</span>
        </button>
      </div>
      <p class="copyright">© 2024 X-Video. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 响应式数据
const username = ref('');
const password = ref('');
const passwordType = ref('password');
const passwordToggleIcon = ref('👁');
const isLoading = ref(false);
const isSuccess = ref(false);
const errorMessage = ref('');

// 模拟登录请求
const handleLogin = () => {
  isLoading.value = true;
  errorMessage.value = '';

  setTimeout(() => {
    if (username.value === 'admin' && password.value === '123456') {
      isSuccess.value = true;
      isLoading.value = false;
      // 登录成功动画序列
      setTimeout(() => {
        document.body.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.background = '#fff';

        const particles = document.createElement('div');
        particles.className = 'login-particles';
        document.body.appendChild(particles);

        setTimeout(() => {
          const overlay = document.createElement('div');
          overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #fe2c55, #ff6b81);
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          `;
          document.body.appendChild(overlay);

          requestAnimationFrame(() => {
            overlay.style.opacity = '1';
            setTimeout(() => {
              window.location.href = 'index.html';
            }, 600);
          });
        }, 400);
      }, 600);
    } else {
      isLoading.value = false;
      isSuccess.value = false;
      errorMessage.value = '用户名或密码错误';
      const loginForm = document.getElementById('loginForm');
      if (loginForm) {
        loginForm.style.animation = 'none';
        requestAnimationFrame(() => {
          loginForm.style.animation = 'shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
        });
      }
      setTimeout(() => {
        errorMessage.value = '';
      }, 3000);
    }
  }, 1500);
};

// 切换密码显示/隐藏
const togglePasswordVisibility = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
  passwordToggleIcon.value = passwordType.value === 'password' ? '👁' : '👁‍🗨';
};

// 社交登录按钮效果
const handleSocialButtonHover = (event: MouseEvent) => {
  const button = event.target as HTMLElement;
  button.style.transform = 'translateY(-2px)';
};

const handleSocialButtonOut = (event: MouseEvent) => {
  const button = event.target as HTMLElement;
  button.style.transform = 'translateY(0)';
};

// 输入框焦点效果
onMounted(() => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement?.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement?.classList.remove('focused');
      }
    });
  });
});
</script>

<style scoped>
/* 公共样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: gradientBG 6s ease infinite;
  background-size: 400% 400%;
}

@keyframes gradientBG {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

.container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  transform: translateY(30px);
  opacity: 0;
  animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.container:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo h1 {
  color: #333;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  transform: scale(0.9);
  opacity: 0;
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes popIn {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.logo h1::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 3px;
  background: #fe2c55;
  animation: lineWidth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.6s;
}

@keyframes lineWidth {
  to { width: 100%; }
}

nav {
  margin-top: 1rem;
}

nav a {
  color: #666;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 0.9rem;
  position: relative;
  transition: color 0.3s;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #fe2c55;
  transform: scaleX(0);
  transition: transform 0.3s;
}

nav a:hover {
  color: #fe2c55;
}

nav a:hover::after {
  transform: scaleX(1);
}

.form-group {
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.form-group:nth-child(1) { animation-delay: 0.3s; }
.form-group:nth-child(2) { animation-delay: 0.4s; }
.form-group:nth-child(3) { animation-delay: 0.5s; }

@keyframes slideRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 2px solid #eee;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #fe2c55;
  box-shadow: 0 0 0 4px rgba(254, 44, 85, 0.1);
  transform: translateY(-1px);
}

.password-group {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: transform 0.3s;
}

.toggle-password:hover {
  transform: translateY(-50%) scale(1.1);
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
}

.remember-me input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.login-btn {
  width: 100%;
  padding: 14px;
  background: #fe2c55;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 20px rgba(254, 44, 85, 0.3);
  background: #ff1745;
}

.login-btn:active {
  transform: translateY(1px);
  box-shadow: 0 5px 15px rgba(254, 44, 85, 0.2);
}

.login-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  transition: transform 0.6s;
}

.login-btn:active::after {
  transform: translate(-50%, -50%) scale(1);
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}

.social-login button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 2px solid #eee;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}

.social-login .wechat {
  color: #07C160;
}

.social-login .qq {
  color: #12B7F5;
}

.social-login button i {
  font-size: 1.5rem;
}

.social-login button span {
  font-size: 0.9rem;
  color: #666;
  transition: color 0.3s;
}

.social-login button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-login .wechat:hover {
  border-color: #07C160;
  background: rgba(7, 193, 96, 0.05);
}

.social-login .qq:hover {
  border-color: #12B7F5;
  background: rgba(18, 183, 245, 0.05);
}

.social-login button:hover span {
  color: inherit;
}

.social-login button:active {
  transform: translateY(0) scale(0.98);
}

.copyright {
  text-align: center;
  color: #666;
  font-size: 0.8rem;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards 1s;
}

@keyframes fadeInUp {
  to {
    opacity: 0.8;
    transform: translateY(0);
  }
}

/* 加载动画 */
.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

/* 错误抖动动画 */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}

.shake {
  animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

/* 登录按钮过渡动画 */
.login-btn i {
  font-size: 1.2rem;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-btn.success i {
  opacity: 1;
  transform: scale(1);
}

/* 粒子动画 */
.login-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

.login-particles::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fe2c55;
  border-radius: 50%;
  box-shadow: 0 0 60px 30px rgba(254, 44, 85, 0.3);
  animation: particleExpand 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes particleExpand {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(100);
    opacity: 0;
  }
}

/* 错误消息动画 */
.error-message {
  color: #ff4d4f;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(-10px);
  animation: errorSlideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes errorSlideDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
