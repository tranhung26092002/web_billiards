import React, { useState } from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { MenuOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.jpg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', label: 'Trang chủ', href: '#home' },
    { key: 'about', label: 'Giới thiệu', href: '#about' },
    { key: 'services', label: 'Dịch vụ', href: '#services' },
    { key: 'equipment', label: 'Thiết bị', href: '#equipment' },
    { key: 'gallery', label: 'Thư viện', href: '#gallery' },
    { key: 'contact', label: 'Liên hệ', href: '#contact' },
  ];

  const mobileMenu = (
    <Menu>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>
          <a href={item.href} className="text-dark">
            {item.label}
          </a>
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item disabled>
        <span className="d-flex align-items-center"><PhoneOutlined className="me-2" /> 0866881091</span>
      </Menu.Item>
      <Menu.Item disabled>
        <span className="d-flex align-items-center"><MailOutlined className="me-2" /> anhthathinh2310@gmail.com</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Button type="primary" className="w-100 rounded-pill fw-bold shadow-sm" style={{fontSize: 16}}>
          Đặt bàn ngay
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed-top bg-white ${isScrolled ? 'shadow' : 'shadow-sm'}`}
      style={{ transition: 'box-shadow 0.3s, background 0.3s', zIndex: 1050 }}
    >
      <div className="container-custom py-2">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          {/* Logo + Info */}
          <a className="d-flex align-items-center text-decoration-none me-3 flex-grow-1 flex-md-grow-0 justify-content-center justify-content-md-start" href="#home">
            <div className="position-relative me-3">
              <img
                src={logo}
                alt="logo"
                style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: '50%', border: '3px solid #0ea5e9', boxShadow: '0 0 0 4px #e0f2fe' }}
                className="d-block d-md-inline-block"
              />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info shadow" style={{fontSize: 10, padding: '2px 6px'}}>OPEN</span>
            </div>
            <div className="d-none d-md-block">
              <span className="fw-bold fs-2 text-dark" style={{letterSpacing: 1}}>Dũng DT Billards</span>
              <div className="small text-secondary fw-medium mt-1" style={{fontSize: 15}}>
                <EnvironmentOutlined className="me-1" />Tầng 3 số nhà 21 đường Phương Canh, Xuân Phương, Nam Từ Liêm, Hà Nội
              </div>
            </div>
          </a>
          {/* Navbar desktop */}
          <nav className="d-none d-lg-flex flex-grow-1 justify-content-center align-items-center">
            <ul className="navbar-nav flex-row gap-3 mb-0">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.key}>
                  <a className="nav-link px-4 py-2 rounded-pill fw-semibold text-dark" href={item.href} style={{transition: 'background 0.2s', fontSize: 17, letterSpacing: 0.5}}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Nút đặt bàn ngay desktop */}
          <div className="d-none d-lg-block ms-3">
            <Button type="primary" className="btn btn-primary px-5 py-3 rounded-pill fw-bold shadow w-auto d-flex align-items-center justify-content-center" style={{fontSize: 20, whiteSpace: 'nowrap', boxShadow: '0 4px 16px 0 #0ea5e955'}}>
              Đặt bàn ngay
            </Button>
          </div>
          {/* Mobile: logo giữa, nút phải */}
          <div className="d-lg-none ms-auto d-flex align-items-center gap-2">
            <Dropdown overlay={mobileMenu} trigger={['click']}>
              <Button type="text" icon={<MenuOutlined />} />
            </Dropdown>
            <Button type="primary" className="btn btn-primary rounded-pill fw-bold shadow px-4 w-auto d-flex align-items-center justify-content-center" style={{fontSize: 16, whiteSpace: 'nowrap', boxShadow: '0 4px 16px 0 #0ea5e955'}}>
              Đặt bàn
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 