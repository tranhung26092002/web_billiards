import React from 'react';
import { Row, Col, Card, Button, Form, Input, message, Tag } from 'antd';
import {
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  FacebookOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { TextArea } = Input;

const ContactSection: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    message.success('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    form.resetFields();
  };

  const validatePhone = (_: any, value: string) => {
    if (!value) return Promise.reject('Vui lòng nhập số điện thoại!');
    if (!/^0\d{9,10}$/.test(value)) return Promise.reject('Số điện thoại không hợp lệ!');
    return Promise.resolve();
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined className="text-2xl text-primary-600" />,
      title: 'Điện thoại',
      content: '0866881091'
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-primary-600" />,
      title: 'Địa chỉ',
      content: 'Tầng 3 số nhà 21 đường Phương Canh, Xuân Phương, Nam Từ Liêm, Hà Nội'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Tag color="red" className="mb-2 px-3 py-1 text-sm">Liên hệ</Tag>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-3">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-base text-secondary-600 max-w-2xl mx-auto">
            Đội ngũ nhân viên luôn sẵn sàng hỗ trợ bạn!
          </p>
        </motion.div>
        <Row gutter={[32, 32]} align="stretch" justify="center">
          {/* Form liên hệ */}
          <Col xs={24} md={12} className="flex justify-center" style={{display: 'flex', flexDirection: 'column'}}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              <Card className="shadow-2xl border border-gray-200 rounded-2xl p-6 bg-white h-full flex flex-col justify-between" style={{ minWidth: 0, height: '100%' }}>
                <h3 className="text-xl font-bold text-secondary-800 mb-4 text-center">Gửi tin nhắn cho chúng tôi</h3>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  className="flex flex-col flex-1"
                  style={{height: '100%'}}
                >
                  <Form.Item
                    name="fullName"
                    label="Họ và tên"
                    rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                  >
                    <Input placeholder="Nhập họ và tên" size="large" />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[{ validator: validatePhone }]}
                  >
                    <Input placeholder="Nhập số điện thoại" size="large" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Vui lòng nhập email!' },
                      { type: 'email', message: 'Email không hợp lệ!' }
                    ]}
                  >
                    <Input placeholder="Nhập email" size="large" />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    label="Nội dung tin nhắn"
                    rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
                  >
                    <TextArea
                      rows={3}
                      placeholder="Nhập nội dung tin nhắn..."
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item className="mb-0 mt-auto">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={<SendOutlined />}
                      className="w-full btn-primary rounded-full shadow-lg font-semibold"
                    >
                      Gửi tin nhắn
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </motion.div>
          </Col>
          {/* Thông tin liên hệ + bản đồ */}
          <Col xs={24} md={12} className="flex flex-col gap-6 items-center" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <Card className="shadow-2xl border border-gray-200 rounded-2xl p-6 bg-white w-full mb-4 flex-1 flex flex-col justify-between" style={{ minWidth: 0, height: '100%' }}>
              <div className="flex flex-col gap-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary-50 rounded-full shadow text-2xl border border-primary-100">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-800 text-lg">{info.title}</div>
                      <div className="text-primary-600 text-base">{info.content}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full shadow text-2xl border border-blue-100">
                    <a href="https://www.facebook.com/kdim.2906" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <FacebookOutlined className="text-blue-600" />
                    </a>
                  </div>
                  <a href="https://www.facebook.com/kdim.2906" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Facebook</a>
                </div>
              </div>
            </Card>
            <Card className="shadow-2xl border border-gray-200 rounded-2xl overflow-hidden p-0 w-full flex-1" style={{ minWidth: 0, height: '100%' }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=21.036237,105.747474&z=16&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: 16 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection; 