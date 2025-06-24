import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal, Tag } from 'antd';
import { 
  PictureOutlined, 
  EnvironmentOutlined, 
  EyeOutlined,
  HeartOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Không gian chính',
      category: 'Không gian',
      description: 'Không gian chơi bi-a rộng rãi, thoáng mát với ánh sáng chuyên nghiệp',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      likes: 156,
      views: 1234
    },
    {
      id: 2,
      title: 'Bàn bi-a cao cấp',
      category: 'Thiết bị',
      description: 'Các bàn bi-a nhập khẩu chính hãng với chất lượng cao',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      likes: 89,
      views: 856
    },
    {
      id: 3,
      title: 'Khu vực VIP',
      category: 'Không gian',
      description: 'Khu vực riêng biệt dành cho khách hàng VIP',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
      likes: 234,
      views: 1890
    },
    {
      id: 4,
      title: 'Quầy bar',
      category: 'Dịch vụ',
      description: 'Quầy bar phục vụ đồ uống và snack đa dạng',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      likes: 67,
      views: 543
    },
    {
      id: 5,
      title: 'Phòng đào tạo',
      category: 'Dịch vụ',
      description: 'Phòng đào tạo bi-a với huấn luyện viên chuyên nghiệp',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      likes: 123,
      views: 987
    },
    {
      id: 6,
      title: 'Khu vực giải trí',
      category: 'Không gian',
      description: 'Khu vực giải trí với các trò chơi bổ trợ',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      likes: 78,
      views: 654
    },
    {
      id: 7,
      title: 'Sảnh chờ',
      category: 'Không gian',
      description: 'Sảnh chờ sang trọng với ghế sofa thoải mái',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      likes: 45,
      views: 432
    },
    {
      id: 8,
      title: 'Khu vực thiết bị',
      category: 'Thiết bị',
      description: 'Trưng bày và bán các thiết bị bi-a chính hãng',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      likes: 112,
      views: 765
    }
  ];

  const categories = ['Tất cả', 'Không gian', 'Thiết bị', 'Dịch vụ'];

  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredImages = activeCategory === 'Tất cả' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <Tag color="purple" className="mb-2 px-3 py-1 fs-6">Thư viện ảnh</Tag>
          <h2 className="display-5 fw-bold mb-3">
            Khám phá không gian Billiards Pro
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 700 }}>
            Những hình ảnh thực tế về không gian, thiết bị và dịch vụ của chúng tôi 
            sẽ giúp bạn hiểu rõ hơn về chất lượng và sự chuyên nghiệp.
          </p>
        </motion.div>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="d-flex flex-wrap justify-content-center gap-3 mb-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              type={activeCategory === category ? 'primary' : 'default'}
              className={activeCategory === category ? 'btn btn-primary' : 'btn btn-outline-primary'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        {/* Grid Gallery */}
        <Row gutter={[24, 24]} className="gallery-equal-height-row">
          {filteredImages.map((item, index) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={item.id} className="gallery-equal-height-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  className="h-100 border-0 shadow-sm cursor-pointer d-flex flex-column gallery-equal-height-card"
                  bodyStyle={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }}
                  style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  cover={
                    <div 
                      className="position-relative overflow-hidden group"
                      style={{height: 180, minHeight: 180, maxHeight: 180, cursor: 'pointer'}}
                      onClick={() => setSelectedImage(item.title)}
                    >
                      <img src={item.image} alt={item.title} className="w-100 h-100 object-fit-cover" style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                      {/* Overlay */}
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 opacity-0 group-hover-opacity-100 d-flex align-items-center justify-content-center" style={{transition: 'opacity 0.3s'}}>
                        <div className="text-center text-white">
                          <EyeOutlined style={{ fontSize: 24 }} className="mb-2" />
                          <div className="small">Xem chi tiết</div>
                        </div>
                      </div>
                      {/* Category Tag */}
                      <div className="position-absolute top-0 start-0 m-2">
                        <Tag color="blue" className="small">
                          {item.category}
                        </Tag>
                      </div>
                      {/* Stats */}
                      <div className="position-absolute bottom-0 end-0 m-2 d-flex align-items-center gap-2 text-white small">
                        <div className="d-flex align-items-center gap-1">
                          <HeartOutlined />
                          <span>{item.likes}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <EyeOutlined />
                          <span>{item.views}</span>
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div className="p-3 d-flex flex-column justify-content-between flex-grow-1" style={{height: '180px'}}>
                    <div>
                      <h3 className="h6 fw-semibold text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="small text-secondary mb-2">
                        {item.description}
                      </p>
                    </div>
                    <Button 
                      type="primary" 
                      size="middle"
                      className="w-100 mt-auto rounded-pill fw-semibold fs-6"
                      style={{fontSize: 16, marginTop: 'auto'}}
                      onClick={() => setSelectedImage(item.title)}
                    >
                      Xem ảnh
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        {/* Modal for Image View */}
        <Modal
          title={selectedImage}
          open={!!selectedImage}
          onCancel={() => setSelectedImage(null)}
          footer={null}
          width={800}
          centered
        >
          {selectedImage && (
            <div className="text-center">
              <div className="w-100 d-flex align-items-center justify-content-center mb-3" style={{height: 300, background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)'}}>
                <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style={{width: 96, height: 96}}>
                  <PictureOutlined style={{ fontSize: 40 }} />
                </div>
              </div>
              <p className="text-secondary">
                {galleryImages.find(img => img.title === selectedImage)?.description}
              </p>
            </div>
          )}
        </Modal>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <div className="bg-primary bg-opacity-10 rounded-4 p-4">
            <h3 className="h4 fw-bold mb-3 text-dark">
              Bạn muốn trải nghiệm thực tế?
            </h3>
            <p className="text-secondary mb-3 mx-auto" style={{maxWidth: 500}}>
              Hãy đến thăm cửa hàng của chúng tôi để trải nghiệm không gian chơi bi-a 
              chuyên nghiệp và được tư vấn trực tiếp từ đội ngũ nhân viên.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button size="large" className="btn btn-primary">
                <EnvironmentOutlined className="me-2" />
                Xem chỉ đường
              </Button>
              <Button size="large" className="btn btn-outline-primary">
                Đặt lịch thăm quan
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection; 