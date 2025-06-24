import { Row, Col, Card, Button, Tag, Progress } from 'antd';
import { 
  StarOutlined, 
  CheckCircleOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const EquipmentSection: React.FC = () => {
  const equipment = [
    {
      name: 'Bàn bi-a Diamond Pro',
      type: 'Bàn bi-a cao cấp',
      price: '25.000.000đ',
      rating: 5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      features: ['Kích thước chuẩn 9ft', 'Mặt bàn Simonis', 'Khung gỗ sồi cao cấp'],
      inStock: true,
      discount: 10
    },
    {
      name: 'Cơ bi-a Predator',
      type: 'Cơ chơi chuyên nghiệp',
      price: '8.500.000đ',
      rating: 5,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      features: ['Gỗ maple cao cấp', 'Đầu cơ carbon fiber', 'Cân bằng hoàn hảo'],
      inStock: true,
      discount: 0
    },
    {
      name: 'Bóng bi-a Aramith',
      type: 'Bộ bóng chính hãng',
      price: '3.200.000đ',
      rating: 5,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      features: ['Chất liệu phenolic', 'Độ bền cao', 'Màu sắc chuẩn'],
      inStock: true,
      discount: 15
    },
    {
      name: 'Đèn chiếu sáng LED',
      type: 'Hệ thống ánh sáng',
      price: '2.800.000đ',
      rating: 4,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      features: ['Ánh sáng chuyên nghiệp', 'Tiết kiệm điện', 'Điều chỉnh độ sáng'],
      inStock: false,
      discount: 0
    },
    {
      name: 'Bàn phụ kiện',
      type: 'Phụ kiện đi kèm',
      price: '1.500.000đ',
      rating: 4,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      features: ['Giá cơ, phấn, vải lau', 'Chất liệu cao cấp', 'Thiết kế đẹp'],
      inStock: true,
      discount: 0
    },
    {
      name: 'Máy đo lực',
      type: 'Thiết bị hỗ trợ',
      price: '5.500.000đ',
      rating: 5,
      reviews: 23,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      features: ['Đo lực chính xác', 'Màn hình LCD', 'Pin sạc'],
      inStock: true,
      discount: 20
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarOutlined 
        key={i} 
        className={i < rating ? 'text-warning' : 'text-secondary'} 
      />
    ));
  };

  return (
    <section id="equipment" className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <Tag color="orange" className="mb-2 px-3 py-1 fs-6">Thiết bị cao cấp</Tag>
          <h2 className="display-5 fw-bold mb-3">
            Thiết bị bi-a chính hãng
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 700 }}>
            Chúng tôi cung cấp đầy đủ các thiết bị bi-a chính hãng từ các thương hiệu 
            uy tín trên thế giới với chất lượng cao và giá cả hợp lý.
          </p>
        </motion.div>
        <Row gutter={[32, 32]}>
          {equipment.map((item, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-100 border-0 shadow-sm"
                  bodyStyle={{ padding: '0' }}
                  cover={
                    <div className="position-relative overflow-hidden" style={{height: 180, minHeight: 180, maxHeight: 180}}>
                      <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-cover" style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                      {item.discount > 0 && (
                        <div className="position-absolute top-0 end-0 m-2">
                          <Tag color="danger" className="fw-bold">
                            -{item.discount}%
                          </Tag>
                        </div>
                      )}
                      {!item.inStock && (
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{background: 'rgba(0,0,0,0.5)'}}>
                          <Tag color="default" className="bg-dark text-white">
                            Hết hàng
                          </Tag>
                        </div>
                      )}
                    </div>
                  }
                >
                  <div className="p-4">
                    <div className="mb-3">
                      <Tag color="blue" className="mb-2">{item.type}</Tag>
                      <h3 className="h5 fw-bold mb-2 text-dark">
                        {item.name}
                      </h3>
                      <div className="d-flex align-items-center mb-2">
                        <div className="me-2">
                          {renderStars(item.rating)}
                        </div>
                        <span className="small text-secondary">
                          ({item.reviews} đánh giá)
                        </span>
                      </div>
                    </div>
                    <ul className="list-unstyled mb-3">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="d-flex align-items-center mb-1">
                          <CheckCircleOutlined className="text-success me-2" />
                          <span className="text-secondary small">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <div className="h4 fw-bold text-primary mb-1">
                          {item.price}
                        </div>
                        {item.discount > 0 && (
                          <div className="small text-secondary text-decoration-line-through">
                            {item.price}
                          </div>
                        )}
                      </div>
                      <div className="text-end">
                        <div className="small text-secondary">Tình trạng</div>
                        <div className={`small fw-semibold ${item.inStock ? 'text-success' : 'text-danger'}`}>
                          {item.inStock ? 'Còn hàng' : 'Hết hàng'}
                        </div>
                      </div>
                    </div>
                    <Button 
                      type="primary" 
                      icon={<ShoppingCartOutlined />}
                      className={`w-100 ${item.inStock ? 'btn btn-primary' : 'btn btn-outline-secondary'}`}
                      disabled={!item.inStock}
                    >
                      {item.inStock ? 'Thêm vào giỏ' : 'Liên hệ đặt hàng'}
                    </Button>
                  </div>
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
          className="mt-5"
        >
          <Row gutter={[48, 32]} className="align-items-center">
            <Col xs={24} lg={12}>
              <div className="bg-white rounded-4 p-4 shadow-sm">
                <h3 className="h5 fw-bold mb-3 text-dark">
                  Thông tin bảo hành
                </h3>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="text-secondary">Bàn bi-a</span>
                    <span className="fw-semibold text-primary">5 năm</span>
                  </div>
                  <Progress percent={100} strokeColor="#0ea5e9" showInfo={false} />
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="text-secondary">Cơ bi-a</span>
                    <span className="fw-semibold text-primary">2 năm</span>
                  </div>
                  <Progress percent={100} strokeColor="#0ea5e9" showInfo={false} />
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="text-secondary">Phụ kiện</span>
                    <span className="fw-semibold text-primary">1 năm</span>
                  </div>
                  <Progress percent={100} strokeColor="#0ea5e9" showInfo={false} />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="bg-primary text-white rounded-4 p-4">
                <h3 className="h5 fw-bold mb-3">
                  Dịch vụ hậu mãi
                </h3>
                <div className="mb-3 d-flex align-items-start">
                  <CheckCircleOutlined className="text-info me-2 mt-1" />
                  <div>
                    <h4 className="fw-semibold mb-1">Bảo hành toàn quốc</h4>
                    <p className="small mb-0">
                      Dịch vụ bảo hành tại nhà cho tất cả sản phẩm
                    </p>
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-start">
                  <CheckCircleOutlined className="text-info me-2 mt-1" />
                  <div>
                    <h4 className="fw-semibold mb-1">Hỗ trợ kỹ thuật 24/7</h4>
                    <p className="small mb-0">
                      Đội ngũ kỹ thuật viên chuyên nghiệp sẵn sàng hỗ trợ
                    </p>
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-start">
                  <CheckCircleOutlined className="text-info me-2 mt-1" />
                  <div>
                    <h4 className="fw-semibold mb-1">Thay thế linh kiện</h4>
                    <p className="small mb-0">
                      Cung cấp linh kiện chính hãng với giá tốt nhất
                    </p>
                  </div>
                </div>
                <Button 
                  type="primary" 
                  size="large"
                  className="w-100 mt-3 btn btn-light text-primary"
                >
                  Liên hệ hỗ trợ
                </Button>
              </div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentSection; 