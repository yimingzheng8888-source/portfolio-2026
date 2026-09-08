import React from 'react';
import { FadeIn } from '@components/animation/FadeIn';
import { SectionTitle } from '@components/ui/SectionTitle';
import { ContactForm } from '@components/contact/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: '邮箱',
    value: 'yiming.zheng.work@outlook.com',
    href: 'mailto:yiming.zheng.work@outlook.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: '电话',
    value: '193 9003 7479',
    href: 'tel:+8619390037479',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: '地址',
    value: '广东海洋大学',
    href: null,
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: '毕业时间',
    value: '2027 年 6 月',
    href: null,
  },
];

const socialLinks = [
  { icon: <Mail className="w-5 h-5" />, label: '电子邮箱', href: 'mailto:yiming.zheng.work@outlook.com' },
];

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 页面标题 */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="联系我"
            subtitle="如有船舶设计、技术、质量或验船相关机会，欢迎联系"
            align="center"
            showLine
          />
        </div>
      </section>

      {/* 主要内容区 */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* 左侧联系信息 */}
            <div className="lg:col-span-5">
              <FadeIn direction="up" delay={0}>
                <div className="space-y-8">
                  {/* 联系卡片 */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">联系方式</h3>
                    <div className="space-y-5">
                      {contactInfo.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm text-gray-500 mb-0.5">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-gray-900 font-medium hover:text-blue-600 transition-colors break-all"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-gray-900 font-medium">{item.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 社交媒体 */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">在线联系</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                        >
                          <span className="text-gray-500 group-hover:text-blue-600 transition-colors">
                            {link.icon}
                          </span>
                          <span className="font-medium text-sm">{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 快速回复承诺 */}
                  <div className="bg-blue-600 rounded-2xl p-6 md:p-8 text-white">
                    <h3 className="text-xl font-bold mb-3">求职方向</h3>
                    <p className="text-blue-100 leading-relaxed">
                      船舶设计、技术与质量、验船及船东技术相关岗位。
                      我会认真阅读每一条工作机会和项目交流信息。
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* 右侧表单 */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">发送消息</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地图占位 */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0}>
            <div className="w-full h-[300px] md:h-[400px] rounded-2xl bg-[#cccccc] flex items-center justify-center shadow-sm">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-600 font-medium">地图占位区域</p>
                <p className="text-gray-400 text-sm mt-1">可接入高德 / 百度 / Google Maps</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
