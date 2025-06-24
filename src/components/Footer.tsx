import React from 'react';
import { Row, Col, Button, Divider } from 'antd';
import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.jpg';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Chơi bi-a', href: '#services' },
      { name: 'Đào tạo bi-a', href: '#services' },
      { name: 'Bán thiết bị', href: '#equipment' },
      { name: 'Tổ chức sự kiện', href: '#services' }
    ],
    company: [
      { name: 'Về chúng tôi', href: '#about' },
      { name: 'Thư viện ảnh', href: '#gallery' },
      { name: 'Liên hệ', href: '#contact' },
      { name: 'Tuyển dụng', href: '#' }
    ],
    support: [
      { name: 'Hướng dẫn sử dụng', href: '#' },
      { name: 'Bảo hành', href: '#equipment' },
      { name: 'FAQ', href: '#' },
      { name: 'Hỗ trợ khách hàng', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: <FacebookOutlined />, name: 'Facebook', url: 'https://www.facebook.com/kdim.2906', color: '#1877f3' },
    { icon: <InstagramOutlined />, name: 'Instagram', url: '#', color: '#e1306c' },
    { icon: <YoutubeOutlined />, name: 'YouTube', url: '#', color: '#ff0000' }
  ];

  return (
    <footer className="bg-dark text-light pt-5 pb-0 mt-5 border-top shadow-lg">
      <div className="container-custom">
        <Row gutter={[32, 32]} className="pb-4">
          {/* Logo + Info */}
          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center mb-3">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: '50%', border: '3px solid #0ea5e9', boxShadow: '0 0 0 4px #e0f2fe' }}
                  className="me-3"
                />
                <div>
                  <h3 className="fw-bold mb-0 text-light">Dũng DT Billards</h3>
                  <div className="small text-info">Không gian giải trí - Đẳng cấp chuyên nghiệp</div>
                </div>
              </div>
              <div className="mb-3 text-light-50">
                <EnvironmentOutlined className="me-2 text-info" />
                Tầng 3 số nhà 21 đường Phương Canh, Xuân Phương, Nam Từ Liêm, Hà Nội
              </div>
              <div className="mb-2">
                <PhoneOutlined className="me-2 text-info" />
                0866881091
              </div>
              <div className="mb-2">
                <MailOutlined className="me-2 text-info" />
                anhthathinh2310@gmail.com
              </div>
              <div className="mt-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-2 d-inline-block"
                    style={{ color: social.color, fontSize: 22 }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </Col>
          {/* Dịch vụ */}
          <Col xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="fw-bold text-info mb-3">Dịch vụ</h5>
              <ul className="list-unstyled">
                {footerLinks.services.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={link.href} className="text-light text-decoration-none opacity-75 hover-opacity-100">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>
          {/* Về chúng tôi */}
          <Col xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="fw-bold text-info mb-3">Về chúng tôi</h5>
              <ul className="list-unstyled">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={link.href} className="text-light text-decoration-none opacity-75 hover-opacity-100">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>
          {/* Hỗ trợ */}
          <Col xs={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5 className="fw-bold text-info mb-3">Hỗ trợ</h5>
              <ul className="list-unstyled row row-cols-2">
                {footerLinks.support.map((link, idx) => (
                  <li key={idx} className="mb-2 col">
                    <a href={link.href} className="text-light text-decoration-none opacity-75 hover-opacity-100">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
        <Divider className="bg-secondary my-0" />
        <Row className="py-3 align-items-center">
          <Col xs={24} md={12} className="text-center text-md-start mb-2 mb-md-0">
            <span className="text-light-50 small">© 2024 Dũng DT Billards. Tất cả quyền được bảo lưu.</span>
          </Col>
          <Col xs={24} md={12} className="text-center text-md-end">
            <motion.div whileHover={{ scale: 1.1 }} style={{ display: 'inline-block' }}>
              <Button
                type="primary"
                shape="circle"
                icon={<ArrowUpOutlined />}
                onClick={scrollToTop}
                className="shadow-sm"
                style={{ background: '#0ea5e9', border: 'none' }}
                aria-label="Lên đầu trang"
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer; 