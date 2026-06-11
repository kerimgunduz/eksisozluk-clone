import { useState } from "react";
import SiteFooter from "./SiteFooter";

export default function AuthPage({ type, onSwitch }) {
  const isLogin = type === "login";
  const [remember, setRemember] = useState(false);

  return (
    <main className="main-content auth-page">
      <h1 className="auth-page-title">{isLogin ? "giriş" : "kayıt ol"}</h1>

      <form className="auth-page-form" onSubmit={(e) => e.preventDefault()}>
        {isLogin ? (
          <>
            <label className="auth-field">
              <span className="auth-label">e-mail adresi</span>
              <input type="email" className="auth-input" autoComplete="email" />
            </label>

            <label className="auth-field">
              <span className="auth-label">şifre</span>
              <input type="password" className="auth-input" autoComplete="current-password" />
            </label>

            <label className="auth-checkbox">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>unutma bunları sorucam sonra</span>
            </label>

            <div className="auth-captcha" aria-hidden="true">
              <div className="auth-captcha-box">
                <span className="auth-captcha-check">✓</span>
                <span className="auth-captcha-text">Başarılı!</span>
              </div>
              <div className="auth-captcha-brand">
                <span className="auth-captcha-logo">☁</span>
                <span>CLOUDFLARE</span>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn">
              giriş yapmaya çabala
            </button>
          </>
        ) : (
          <>
            <label className="auth-field">
              <span className="auth-label">kullanıcı adı</span>
              <input type="text" className="auth-input" autoComplete="username" />
            </label>

            <label className="auth-field">
              <span className="auth-label">e-mail adresi</span>
              <input type="email" className="auth-input" autoComplete="email" />
            </label>

            <label className="auth-field">
              <span className="auth-label">şifre</span>
              <input type="password" className="auth-input" autoComplete="new-password" />
            </label>

            <div className="auth-captcha" aria-hidden="true">
              <div className="auth-captcha-box">
                <span className="auth-captcha-check">✓</span>
                <span className="auth-captcha-text">Başarılı!</span>
              </div>
              <div className="auth-captcha-brand">
                <span className="auth-captcha-logo">☁</span>
                <span>CLOUDFLARE</span>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn">
              kayıt olmaya çabala
            </button>
          </>
        )}
      </form>

      {isLogin ? (
        <section className="auth-cant-login">
          <h2 className="auth-cant-login-title">giremeyiş</h2>
          <ul className="auth-cant-login-list">
            <li>
              <button type="button" className="auth-link">
                şifremi unuttum
              </button>
            </li>
            <li>
              <button type="button" className="auth-link" onClick={() => onSwitch("register")}>
                kayıtlı kullanıcı olunması
              </button>
            </li>
          </ul>
        </section>
      ) : (
        <p className="auth-switch">
          hesabın var mı?{" "}
          <button type="button" className="auth-link" onClick={() => onSwitch("login")}>
            giriş yap
          </button>
        </p>
      )}

      <SiteFooter />
    </main>
  );
}
