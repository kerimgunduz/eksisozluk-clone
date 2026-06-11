export default function AuthModal({ type, onClose, onSwitch }) {
  const isLogin = type === "login";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{isLogin ? "giriş yap" : "kayıt ol"}</h2>
        <p className="modal-desc">
          {isLogin
            ? "ekşi sözlük kullanıcılarıyla mesajlaşmak ve yazdıkları entry'leri takip etmek, oylamak, mesaj yazmak için giriş yapmalısın."
            : "ekşi sözlük ailesine katılmak için kayıt ol."}
        </p>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="kullanıcı adı" />
          <input type="password" placeholder="şifre" />
          {!isLogin && <input type="email" placeholder="e-posta" />}
          <button type="submit" className="auth-submit">
            {isLogin ? "giriş yap" : "kayıt ol"}
          </button>
        </form>
        <p className="modal-switch">
          {isLogin ? (
            <>
              hesabın yok mu?{" "}
              <button type="button" onClick={() => onSwitch("register")}>
                kayıt ol
              </button>
            </>
          ) : (
            <>
              hesabın var mı?{" "}
              <button type="button" onClick={() => onSwitch("login")}>
                giriş yap
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
