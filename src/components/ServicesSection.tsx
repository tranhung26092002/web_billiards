import React from 'react';
import { Row, Col, Card, Button, Tag } from 'antd';
import { 
  TrophyOutlined, 
  TeamOutlined, 
  ShopOutlined, 
  CoffeeOutlined,
  GiftOutlined,
  StarOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <TrophyOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Chơi bi-a chuyên nghiệp',
      description: 'Trải nghiệm chơi bi-a trên các bàn cao cấp với không gian sang trọng, ánh sáng chuyên nghiệp.',
      price: '150.000đ/giờ',
      features: ['Bàn bi-a nhập khẩu', 'Ánh sáng chuyên nghiệp', 'Không gian thoáng mát'],
      popular: true
    },
    {
      icon: <TeamOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Đào tạo bi-a',
      description: 'Khóa học bi-a từ cơ bản đến nâng cao với huấn luyện viên chuyên nghiệp.',
      price: '500.000đ/buổi',
      features: ['Giáo viên chuyên nghiệp', 'Giáo trình chuẩn', 'Thực hành trực tiếp'],
      popular: false
    },
    {
      icon: <ShopOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Bán thiết bị bi-a',
      description: 'Cung cấp các loại cơ, bàn bi-a, phụ kiện chính hãng với giá tốt nhất.',
      price: 'Liên hệ',
      features: ['Sản phẩm chính hãng', 'Bảo hành dài hạn', 'Tư vấn miễn phí'],
      popular: false
    },
    {
      icon: <CoffeeOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Dịch vụ giải khát',
      description: 'Menu đa dạng với các loại đồ uống, snack phục vụ trong quá trình chơi.',
      price: 'Từ 30.000đ',
      features: ['Đồ uống đa dạng', 'Snack ngon', 'Phục vụ tận bàn'],
      popular: false
    },
    {
      icon: <GiftOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Tổ chức sự kiện',
      description: 'Dịch vụ tổ chức giải đấu, tiệc công ty, sinh nhật với không gian riêng biệt.',
      price: 'Liên hệ',
      features: ['Không gian riêng', 'Trang trí theo yêu cầu', 'Dịch vụ trọn gói'],
      popular: false
    },
    {
      icon: <StarOutlined className="text-primary" style={{ fontSize: 32 }} />,
      title: 'Thành viên VIP',
      description: 'Chương trình thành viên với nhiều ưu đãi đặc biệt và dịch vụ cao cấp.',
      price: '1.000.000đ/năm',
      features: ['Giảm giá 20%', 'Ưu tiên đặt bàn', 'Dịch vụ đặc biệt'],
      popular: false
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <Tag color="green" className="mb-2 px-3 py-1 fs-6">Dịch vụ của chúng tôi</Tag>
          <h2 className="display-5 fw-bold mb-3">
            Dịch vụ đa dạng, chất lượng cao
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 700 }}>
            Chúng tôi cung cấp đầy đủ các dịch vụ liên quan đến bi-a từ chơi giải trí, 
            đào tạo, bán thiết bị đến tổ chức sự kiện chuyên nghiệp.
          </p>
        </motion.div>

        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-100 border-2 ${service.popular ? 'border-primary shadow' : 'border-light'}`}
                  bodyStyle={{ padding: '24px' }}
                >
                  {service.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle-x" style={{zIndex:2}}>
                      <Tag color="danger" className="px-3 py-1 fw-semibold">
                        Phổ biến nhất
                      </Tag>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mx-auto mb-3" style={{width: 64, height: 64}}>
                      {service.icon}
                    </div>
                    <h3 className="h5 fw-bold mb-2 text-dark">
                      {service.title}
                    </h3>
                    <p className="text-secondary mb-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="text-center mb-3">
                    <div className="h4 fw-bold text-primary mb-1">
                      {service.price}
                    </div>
                  </div>

                  <ul className="list-unstyled mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="d-flex align-items-center mb-1">
                        <span className="badge bg-success me-2" style={{width: 8, height: 8, borderRadius: '50%'}}></span>
                        <span className="text-secondary small">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    type={service.popular ? 'primary' : 'default'}
                    className={`w-100 ${service.popular ? 'btn btn-primary' : 'btn btn-outline-primary'}`}
                  >
                    Tìm hiểu thêm
                  </Button>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <div className="bg-primary bg-opacity-10 rounded-4 p-4">
            <h3 className="h4 fw-bold mb-3 text-dark">
              Bạn cần tư vấn thêm?
            </h3>
            <p className="text-secondary mb-3 mx-auto" style={{maxWidth: 500}}>
              Đội ngũ nhân viên chuyên nghiệp của chúng tôi luôn sẵn sàng tư vấn 
              và hỗ trợ bạn chọn dịch vụ phù hợp nhất.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button size="large" className="btn btn-primary">
                Liên hệ tư vấn
              </Button>
              <Button size="large" className="btn btn-outline-primary">
                Xem bảng giá
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 