import React from 'react';
import { Row, Col, Card, Button, Tag, List, Divider } from 'antd';
import { 
  TrophyOutlined, 
  TeamOutlined, 
  ShopOutlined, 
  CoffeeOutlined,
  GiftOutlined,
  StarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  DollarOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <TrophyOutlined className="text-4xl text-primary-600" />,
      title: 'Chơi bi-a chuyên nghiệp',
      description: 'Trải nghiệm chơi bi-a trên các bàn cao cấp với không gian sang trọng, ánh sáng chuyên nghiệp.',
      price: '150.000đ/giờ',
      features: [
        'Bàn bi-a nhập khẩu chính hãng',
        'Ánh sáng chuyên nghiệp',
        'Không gian thoáng mát, sạch sẽ',
        'Hệ thống âm thanh chất lượng',
        'Dịch vụ phục vụ tận bàn',
        'WiFi miễn phí'
      ],
      popular: true,
      duration: '1-4 giờ',
      capacity: '2-8 người'
    },
    {
      icon: <TeamOutlined className="text-4xl text-primary-600" />,
      title: 'Đào tạo bi-a',
      description: 'Khóa học bi-a từ cơ bản đến nâng cao với huấn luyện viên chuyên nghiệp.',
      price: '500.000đ/buổi',
      features: [
        'Giáo viên chuyên nghiệp',
        'Giáo trình chuẩn quốc tế',
        'Thực hành trực tiếp',
        'Lý thuyết chi tiết',
        'Chứng chỉ hoàn thành',
        'Hỗ trợ sau khóa học'
      ],
      popular: false,
      duration: '2 giờ/buổi',
      capacity: '1-4 học viên'
    },
    {
      icon: <ShopOutlined className="text-4xl text-primary-600" />,
      title: 'Bán thiết bị bi-a',
      description: 'Cung cấp các loại cơ, bàn bi-a, phụ kiện chính hãng với giá tốt nhất.',
      price: 'Liên hệ',
      features: [
        'Sản phẩm chính hãng',
        'Bảo hành dài hạn',
        'Tư vấn miễn phí',
        'Giao hàng tận nơi',
        'Lắp đặt chuyên nghiệp',
        'Hỗ trợ kỹ thuật'
      ],
      popular: false,
      duration: 'Tùy theo sản phẩm',
      capacity: 'Không giới hạn'
    },
    {
      icon: <CoffeeOutlined className="text-4xl text-primary-600" />,
      title: 'Dịch vụ giải khát',
      description: 'Menu đa dạng với các loại đồ uống, snack phục vụ trong quá trình chơi.',
      price: 'Từ 30.000đ',
      features: [
        'Đồ uống đa dạng',
        'Snack ngon, sạch sẽ',
        'Phục vụ tận bàn',
        'Giá cả hợp lý',
        'Thực phẩm tươi ngon',
        'Đặt hàng nhanh chóng'
      ],
      popular: false,
      duration: 'Suốt giờ mở cửa',
      capacity: 'Không giới hạn'
    },
    {
      icon: <GiftOutlined className="text-4xl text-primary-600" />,
      title: 'Tổ chức sự kiện',
      description: 'Dịch vụ tổ chức giải đấu, tiệc công ty, sinh nhật với không gian riêng biệt.',
      price: 'Liên hệ',
      features: [
        'Không gian riêng biệt',
        'Trang trí theo yêu cầu',
        'Dịch vụ trọn gói',
        'Nhân viên phục vụ',
        'Âm thanh, ánh sáng',
        'Catering tùy chọn'
      ],
      popular: false,
      duration: 'Tùy theo sự kiện',
      capacity: '20-100 người'
    },
    {
      icon: <StarOutlined className="text-4xl text-primary-600" />,
      title: 'Thành viên VIP',
      description: 'Chương trình thành viên với nhiều ưu đãi đặc biệt và dịch vụ cao cấp.',
      price: '1.000.000đ/năm',
      features: [
        'Giảm giá 20% tất cả dịch vụ',
        'Ưu tiên đặt bàn',
        'Dịch vụ đặc biệt',
        'Tích điểm thưởng',
        'Sinh nhật miễn phí',
        'Hỗ trợ 24/7'
      ],
      popular: false,
      duration: '1 năm',
      capacity: 'Không giới hạn'
    }
  ];

  const pricingPlans = [
    {
      name: 'Cơ bản',
      price: '150.000đ',
      period: '/giờ',
      features: [
        'Chơi bi-a cơ bản',
        'Không gian chung',
        'Dịch vụ cơ bản',
        'Giờ mở cửa thường'
      ],
      popular: false
    },
    {
      name: 'Cao cấp',
      price: '250.000đ',
      period: '/giờ',
      features: [
        'Chơi bi-a cao cấp',
        'Không gian VIP',
        'Dịch vụ đặc biệt',
        'Ưu tiên đặt bàn',
        'Đồ uống miễn phí'
      ],
      popular: true
    },
    {
      name: 'Gói tháng',
      price: '2.000.000đ',
      period: '/tháng',
      features: [
        'Chơi không giới hạn',
        'Không gian VIP',
        'Dịch vụ đặc biệt',
        'Đồ uống miễn phí',
        'Hỗ trợ 24/7'
      ],
      popular: false
    }
  ];

  return (
    <div className="ServicesPage">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
              Khám phá đầy đủ các dịch vụ chuyên nghiệp mà Billiards Pro cung cấp, 
              từ chơi giải trí đến đào tạo chuyên sâu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6">
              Dịch vụ đa dạng
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Chúng tôi cung cấp đầy đủ các dịch vụ liên quan đến bi-a với chất lượng cao nhất
            </p>
          </motion.div>

          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} lg={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`h-full border-2 hover:border-primary-300 transition-all duration-300 ${
                      service.popular ? 'border-primary-500 shadow-lg' : 'border-gray-200'
                    }`}
                    bodyStyle={{ padding: '32px' }}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Tag color="red" className="px-4 py-1 font-semibold">
                          Phổ biến nhất
                        </Tag>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-secondary-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-secondary-600 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex justify-center items-center space-x-6 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">
                            {service.price}
                          </div>
                          <div className="text-sm text-secondary-500">Giá</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-secondary-800">
                            {service.duration}
                          </div>
                          <div className="text-sm text-secondary-500">Thời gian</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-secondary-800">
                            {service.capacity}
                          </div>
                          <div className="text-sm text-secondary-500">Sức chứa</div>
                        </div>
                      </div>
                    </div>

                    <List
                      dataSource={service.features}
                      renderItem={(feature) => (
                        <List.Item className="border-0 px-0">
                          <div className="flex items-center space-x-3">
                            <CheckCircleOutlined className="text-green-500" />
                            <span className="text-secondary-600">{feature}</span>
                          </div>
                        </List.Item>
                      )}
                    />

                    <Button 
                      type={service.popular ? 'primary' : 'default'}
                      className={`w-full mt-6 ${
                        service.popular 
                          ? 'btn-primary' 
                          : 'btn-secondary'
                      }`}
                    >
                      Tìm hiểu thêm
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6">
              Bảng giá dịch vụ
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Lựa chọn gói dịch vụ phù hợp với nhu cầu của bạn
            </p>
          </motion.div>

          <Row gutter={[32, 32]} justify="center">
            {pricingPlans.map((plan, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`h-full text-center border-2 ${
                      plan.popular 
                        ? 'border-primary-500 shadow-lg' 
                        : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Tag color="red" className="px-4 py-1 font-semibold">
                          Khuyến nghị
                        </Tag>
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                      {plan.name}
                    </h3>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-primary-600">
                        {plan.price}
                      </div>
                      <div className="text-secondary-500">{plan.period}</div>
                    </div>

                    <List
                      dataSource={plan.features}
                      renderItem={(feature) => (
                        <List.Item className="border-0 px-0">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircleOutlined className="text-green-500" />
                            <span className="text-secondary-600">{feature}</span>
                          </div>
                        </List.Item>
                      )}
                    />

                    <Button 
                      type={plan.popular ? 'primary' : 'default'}
                      size="large"
                      className={`w-full mt-6 ${
                        plan.popular 
                          ? 'btn-primary' 
                          : 'btn-secondary'
                      }`}
                    >
                      Chọn gói
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-800 mb-6">
              Câu hỏi thường gặp
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Những thắc mắc phổ biến về dịch vụ của chúng tôi
            </p>
          </motion.div>

          <Row gutter={[48, 32]}>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="mb-4">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    Có cần đặt bàn trước không?
                  </h4>
                  <p className="text-secondary-600">
                    Chúng tôi khuyến nghị đặt bàn trước để đảm bảo có chỗ, đặc biệt vào cuối tuần và tối.
                  </p>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="mb-4">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    Có cung cấp thiết bị không?
                  </h4>
                  <p className="text-secondary-600">
                    Có, chúng tôi cung cấp đầy đủ cơ, bóng và phụ kiện. Bạn cũng có thể mang theo thiết bị riêng.
                  </p>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-4">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    Có dạy bi-a cho người mới không?
                  </h4>
                  <p className="text-secondary-600">
                    Có, chúng tôi có các khóa học từ cơ bản đến nâng cao với huấn luyện viên chuyên nghiệp.
                  </p>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-4">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    Có tổ chức sự kiện không?
                  </h4>
                  <p className="text-secondary-600">
                    Có, chúng tôi cung cấp dịch vụ tổ chức sự kiện như tiệc công ty, sinh nhật, giải đấu.
                  </p>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 