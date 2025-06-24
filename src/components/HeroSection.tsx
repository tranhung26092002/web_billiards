import React from 'react';
import { Button, Row, Col, Card } from 'antd';
import { PlayCircleOutlined, StarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-primary text-white" style={{background: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)', paddingTop: '80px'}}>
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{background: 'rgba(0,0,0,0.4)', zIndex: 1}}></div>
      {/* Content */}
      <div className="container-custom position-relative" style={{zIndex: 2}}>
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 fw-bold mb-4">
                Chào mừng đến với
                <span className="d-block text-info">Dũng DT Billards</span>
              </h1>
              <p className="lead mb-4">
                Địa chỉ: Tầng 3 số nhà 21 đường Phương Canh, Xuân Phương, Nam Từ Liêm, Hà Nội<br/>
                Hotline: 0866881091
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button size="large" className="btn btn-primary px-4 py-2">
                    Đặt bàn ngay
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button 
                    size="large" 
                    icon={<PlayCircleOutlined />}
                    className="btn btn-outline-light px-4 py-2"
                  >
                    Xem video
                  </Button>
                </motion.div>
              </div>
              {/* Stats */}
              <div className="row text-center">
                <div className="col-4">
                  <div className="h2 fw-bold text-info">10+</div>
                  <div className="small">Bàn bi-a chất lượng</div>
                </div>
                <div className="col-4">
                  <div className="h2 fw-bold text-info">49.000đ/h</div>
                  <div className="small">Giá giờ chơi</div>
                </div>
                <div className="col-4">
                  <div className="h2 fw-bold text-info">0866881091</div>
                  <div className="small">Hotline</div>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-white bg-opacity-10 border-0 shadow-lg backdrop-blur position-relative">
                <div className="text-center text-dark">
                  <h3 className="h4 fw-bold mb-3">Thông tin nhanh</h3>
                  <div className="mb-3 d-flex align-items-center justify-content-between p-2 bg-light rounded">
                    <div className="d-flex align-items-center gap-2">
                      <ClockCircleOutlined className="text-info" />
                      <span>Giờ mở cửa</span>
                    </div>
                    <span className="fw-semibold">8:00 - 23:00</span>
                  </div>
                  <div className="mb-3 d-flex align-items-center justify-content-between p-2 bg-light rounded">
                    <div className="d-flex align-items-center gap-2">
                      <StarOutlined className="text-info" />
                      <span>Đánh giá</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <StarOutlined className="text-warning" />
                      <StarOutlined className="text-warning" />
                      <StarOutlined className="text-warning" />
                      <StarOutlined className="text-warning" />
                      <StarOutlined className="text-warning" />
                      <span className="ms-2 fw-semibold">5.0</span>
                    </div>
                  </div>
                  <div className="mb-3 d-flex align-items-center justify-content-between p-2 bg-light rounded">
                    <span>Giá bàn/giờ</span>
                    <span className="fw-semibold text-info">49.000đ/h</span>
                  </div>
                  <Button 
                    type="primary" 
                    size="large" 
                    className="w-100 mt-3 btn btn-primary"
                  >
                    Liên hệ đặt bàn
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{zIndex: 3}}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-25 h-50 border border-light rounded-pill d-flex justify-content-center mx-auto"
        >
          <div className="w-25 h-25 bg-light rounded-pill mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 