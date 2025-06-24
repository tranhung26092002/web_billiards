import { Row, Col, Tag } from 'antd';
import { TrophyOutlined, SafetyCertificateOutlined, TeamOutlined, HeartOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <TrophyOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Chất lượng hàng đầu',
      description: 'Trang thiết bị bi-a nhập khẩu chính hãng, đạt tiêu chuẩn quốc tế'
    },
    {
      icon: <SafetyCertificateOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'An toàn tuyệt đối',
      description: 'Không gian chơi an toàn, vệ sinh sạch sẽ, tuân thủ quy định'
    },
    {
      icon: <TeamOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Đội ngũ chuyên nghiệp',
      description: 'Nhân viên được đào tạo bài bản, phục vụ tận tâm, chu đáo'
    },
    {
      icon: <HeartOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Dịch vụ tận tâm',
      description: 'Cam kết mang đến trải nghiệm tốt nhất cho mọi khách hàng'
    }
  ];

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <Tag color="blue" className="mb-2 px-3 py-1 fs-6 rounded-pill fw-bold">Về chúng tôi</Tag>
          <h2 className="display-5 fw-bold mb-3">
            Dũng DT Billards - Nơi hội tụ đam mê
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 700 }}>
            Được thành lập từ năm 2010, Dũng DT Billards tự hào là một trong những cửa hàng bi-a hàng đầu tại Hà Nội với không gian hiện đại, dịch vụ chuyên nghiệp và đội ngũ tận tâm.
          </p>
        </motion.div>
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="position-relative">
                <div className="w-100 rounded-4 position-relative overflow-hidden shadow bg-primary bg-opacity-10" style={{ height: 350 }}>
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.2)' }}></div>
                  <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <div className="display-3 fw-bold mb-2">15+</div>
                    <div className="fs-4">Năm kinh nghiệm</div>
                  </div>
                </div>
                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="position-absolute bottom-0 end-0 bg-white rounded-3 shadow p-3"
                  style={{ minWidth: 120, transform: 'translate(30%, 50%)' }}
                >
                  <div className="text-center">
                    <div className="h4 fw-bold text-primary">5000+</div>
                    <div className="small text-secondary">Khách hàng</div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="position-absolute top-0 start-0 bg-white rounded-3 shadow p-3"
                  style={{ minWidth: 120, transform: 'translate(-30%, -50%)' }}
                >
                  <div className="text-center">
                    <div className="h4 fw-bold text-primary">15</div>
                    <div className="small text-secondary">Bàn bi-a</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="h3 fw-bold mb-4 text-dark">
                Tại sao chọn Dũng DT Billards?
              </h3>
              <div className="mb-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="d-flex align-items-start mb-3"
                  >
                    <div className="flex-shrink-0 bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center me-3" style={{ width: 48, height: 48 }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="fs-5 fw-semibold mb-1 text-dark">
                        {feature.title}
                      </h4>
                      <p className="text-secondary mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="p-4 bg-primary bg-opacity-10 rounded-3"
              >
                <h4 className="fs-5 fw-semibold mb-2 text-dark">
                  Cam kết của chúng tôi
                </h4>
                <p className="text-secondary mb-2">
                  Chúng tôi cam kết mang đến cho khách hàng những trải nghiệm chơi bi-a tốt nhất với chất lượng dịch vụ hàng đầu và môi trường chơi an toàn, văn minh.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Tag color="blue" className="rounded-pill">Chất lượng cao</Tag>
                  <Tag color="green" className="rounded-pill">An toàn</Tag>
                  <Tag color="orange" className="rounded-pill">Chuyên nghiệp</Tag>
                  <Tag color="purple" className="rounded-pill">Uy tín</Tag>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection; 