import React from 'react';
import { Row, Col, Card, Timeline, Statistic, Button } from 'antd';
import { 
  TrophyOutlined, 
  TeamOutlined, 
  HeartOutlined,
  StarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Thành lập',
      description: 'Billiards Pro được thành lập với mục tiêu mang đến trải nghiệm chơi bi-a chuyên nghiệp'
    },
    {
      year: '2015',
      title: 'Mở rộng',
      description: 'Mở thêm 3 chi nhánh mới và đầu tư trang thiết bị hiện đại'
    },
    {
      year: '2018',
      title: 'Đào tạo',
      description: 'Bắt đầu cung cấp dịch vụ đào tạo bi-a chuyên nghiệp'
    },
    {
      year: '2020',
      title: 'Online',
      description: 'Phát triển hệ thống đặt bàn online và quản lý thành viên'
    },
    {
      year: '2024',
      title: 'Hiện tại',
      description: 'Trở thành một trong những cửa hàng bi-a hàng đầu Việt Nam'
    }
  ];

  const values = [
    {
      icon: <TrophyOutlined className="text-4xl text-primary-600" />,
      title: 'Chất lượng',
      description: 'Cam kết mang đến chất lượng dịch vụ tốt nhất cho khách hàng'
    },
    {
      icon: <HeartOutlined className="text-4xl text-primary-600" />,
      title: 'Tận tâm',
      description: 'Phục vụ khách hàng với sự tận tâm và chu đáo nhất'
    },
    {
      icon: <TeamOutlined className="text-4xl text-primary-600" />,
      title: 'Đoàn kết',
      description: 'Xây dựng môi trường làm việc đoàn kết, chuyên nghiệp'
    },
    {
      icon: <StarOutlined className="text-4xl text-primary-600" />,
      title: 'Sáng tạo',
      description: 'Không ngừng sáng tạo và cải tiến dịch vụ'
    }
  ];

  return (
    <div className="AboutPage">
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
              Về Billiards Pro
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
              Hơn 15 năm kinh nghiệm trong lĩnh vực giải trí thể thao, 
              chúng tôi tự hào là đối tác tin cậy của hàng nghìn khách hàng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Row gutter={[32, 32]}>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Statistic
                  title="Năm kinh nghiệm"
                  value={15}
                  suffix="+"
                  valueStyle={{ color: '#0ea5e9' }}
                />
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Statistic
                  title="Khách hàng hài lòng"
                  value={5000}
                  suffix="+"
                  valueStyle={{ color: '#0ea5e9' }}
                />
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Statistic
                  title="Bàn bi-a cao cấp"
                  value={15}
                  suffix="+"
                  valueStyle={{ color: '#0ea5e9' }}
                />
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Statistic
                  title="Giải thưởng"
                  value={25}
                  suffix="+"
                  valueStyle={{ color: '#0ea5e9' }}
                />
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <Row gutter={[48, 32]} align="middle">
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-secondary-800 mb-6">
                  Câu chuyện của chúng tôi
                </h2>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  Billiards Pro được thành lập từ năm 2010 với tình yêu và đam mê dành cho môn thể thao bi-a. 
                  Từ một cửa hàng nhỏ, chúng tôi đã phát triển thành một trong những địa điểm chơi bi-a 
                  hàng đầu tại Việt Nam.
                </p>
                <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                  Với đội ngũ nhân viên chuyên nghiệp và trang thiết bị hiện đại, 
                  chúng tôi cam kết mang đến cho khách hàng những trải nghiệm chơi bi-a tốt nhất.
                </p>
                <Button size="large" className="btn-primary">
                  Tìm hiểu thêm
                </Button>
              </motion.div>
            </Col>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg">
                  <Timeline
                    items={milestones.map((milestone, index) => ({
                      children: (
                        <div>
                          <h4 className="font-semibold text-secondary-800">
                            {milestone.year} - {milestone.title}
                          </h4>
                          <p className="text-secondary-600">{milestone.description}</p>
                        </div>
                      ),
                    }))}
                  />
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Values Section */}
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
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Những giá trị định hướng cho mọi hoạt động của chúng tôi
            </p>
          </motion.div>

          <Row gutter={[32, 32]}>
            {values.map((value, index) => (
              <Col xs={24} md={12} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-secondary-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Team Section */}
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
              Đội ngũ của chúng tôi
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Những con người tài năng và tận tâm đằng sau sự thành công của Billiards Pro
            </p>
          </motion.div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TeamOutlined className="text-3xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Đội ngũ quản lý
                  </h3>
                  <p className="text-secondary-600">
                    Những nhà quản lý giàu kinh nghiệm với tầm nhìn chiến lược
                  </p>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrophyOutlined className="text-3xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Huấn luyện viên
                  </h3>
                  <p className="text-secondary-600">
                    Các huấn luyện viên chuyên nghiệp với nhiều năm kinh nghiệm
                  </p>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HeartOutlined className="text-3xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    Nhân viên phục vụ
                  </h3>
                  <p className="text-secondary-600">
                    Đội ngũ nhân viên tận tâm, phục vụ khách hàng 24/7
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

export default AboutPage; 