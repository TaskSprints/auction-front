const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>회사 소개</h2>
                    <p>우리는 뛰어난 서비스를 제공하는 선도적인 플랫폼입니다. 우리의 사명은 탁월함과 혁신을 전달하는 것입니다.</p>
                </div>
                <div className="footer-section links">
                    <h2>링크</h2>
                    <ul>
                        <li>
                            <a href="#services">서비스</a>
                        </li>
                        <li>
                            <a href="#products">제품</a>
                        </li>
                        <li>
                            <a href="#support">지원</a>
                        </li>
                        <li>
                            <a href="#terms">이용 약관</a>
                        </li>
                        <li>
                            <a href="#privacy">개인정보 보호정책</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>연락처</h2>
                    <p>이메일: support@example.com</p>
                    <p>전화: (123) 456-7890</p>
                </div>
                <div className="footer-section social">
                    <h2>팔로우</h2>
                    <a href="https://facebook.com" className="social-icon">
                        Facebook
                    </a>
                    <a href="https://twitter.com" className="social-icon">
                        Twitter
                    </a>
                    <a href="https://linkedin.com" className="social-icon">
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} 귀사의 이름. 모든 권리 보유.</p>
            </div>
        </footer>
    );
};

export default Footer;
