import React, { useState } from 'react';
import { CONTACT_CONTENT } from '../constants';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    console.log('문의 내용 제출:', formData);
    alert('문의 내용이 성공적으로 제출되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="bg-background py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary text-center mb-12 leading-tight">
          {CONTACT_CONTENT.title}
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          {CONTACT_CONTENT.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-secondary mb-6">수강 신청 & 문의 양식</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {CONTACT_CONTENT.formFields.map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.name} className="block text-lg font-medium text-secondary mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none"
                      required
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                      required
                    />
                  )}
                </div>
              ))}
              <Button type="submit" size="lg" className="w-full">
                문의 제출하기
              </Button>
            </form>
          </Card>

          {/* FAQ & Location */}
          <div>
            <Card className="p-8 mb-8 shadow-xl">
              <h2 className="text-3xl font-bold text-secondary mb-6">자주 묻는 질문 (FAQ)</h2>
              <div className="space-y-6">
                {CONTACT_CONTENT.faq.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-primary mb-2 flex items-center">
                      <span className="text-2xl mr-2">❓</span> {item.question}
                    </h3>
                    <p className="text-gray-700 text-lg ml-8">{item.answer}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 shadow-xl bg-secondary text-accent">
              <h2 className="text-3xl font-bold text-primary mb-6">오시는 길</h2>
              <p className="text-lg md:text-xl mb-4">
                <span className="font-semibold">주소:</span> {CONTACT_CONTENT.location.address}
              </p>
              <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg mb-6">
                <iframe
                  src={CONTACT_CONTENT.location.mapLink}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <a
                href={CONTACT_CONTENT.kakaoTalkLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 px-6 bg-[#FEE500] text-[#3C1E1E] rounded-md font-bold text-lg hover:opacity-90 transition-opacity duration-300 shadow-md"
              >
                <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png" alt="KakaoTalk Icon" className="w-6 h-6 mr-3" />
                카카오톡으로 상담하기
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
