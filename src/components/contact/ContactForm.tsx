import React, { useState, useCallback } from 'react';
import { Button } from '@components/ui/Button';
import { FadeIn } from '@components/animation/FadeIn';

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

const subjectOptions = [
  { value: '', label: '请选择主题' },
  { value: 'project', label: '项目合作' },
  { value: 'job', label: '工作机会' },
  { value: 'consult', label: '设计咨询' },
  { value: 'other', label: '其他' },
];

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return '请输入您的姓名';
        if (value.trim().length < 2) return '姓名至少需要 2 个字符';
        return undefined;
      case 'email':
        if (!value.trim()) return '请输入邮箱地址';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return '请输入有效的邮箱格式';
        return undefined;
      case 'subject':
        if (!value) return '请选择联系主题';
        return undefined;
      case 'message':
        if (!value.trim()) return '请输入消息内容';
        if (value.trim().length < 10) return '消息内容至少需要 10 个字符';
        return undefined;
      default:
        return undefined;
    }
  }, []);

  const validateAll = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  }, [touched, validateField, submitStatus]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // 标记所有字段为已触碰
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (!validateAll()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    // 打开邮件客户端
    try {
      const subject = subjectOptions.find(option => option.value === formData.subject)?.label || '作品集联系';
      const body = `${formData.message}\n\n联系人：${formData.name}\n回复邮箱：${formData.email}`;
      window.location.href = `mailto:yiming.zheng.work@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // 保留输入，便于未配置邮件客户端时复制。


      setSubmitStatus('success');

      setTouched({});
      setErrors({});

      if (onSubmit) {
        onSubmit(formData);
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateAll, onSubmit]);

  const inputClasses = (fieldName: keyof FormData) => {
    const base = 'w-full px-4 py-3 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none';
    const focus = 'focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10';
    const error = errors[fieldName] && touched[fieldName] ? 'border-red-400 bg-red-50/50' : 'border-transparent';
    return `${base} ${focus} ${error}`;
  };

  return (
    <FadeIn direction="up" delay={0.2}>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* 姓名 */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            姓名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="请输入您的姓名"
            className={inputClasses('name')}
            disabled={isSubmitting}
          />
          {errors.name && touched.name && (
            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* 邮箱 */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            邮箱 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="your@email.com"
            className={inputClasses('email')}
            disabled={isSubmitting}
          />
          {errors.email && touched.email && (
            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        {/* 主题 */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            主题 <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClasses('subject')}
            disabled={isSubmitting}
          >
            {subjectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.subject && touched.subject && (
            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.subject}
            </p>
          )}
        </div>

        {/* 消息 */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            消息内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="请详细描述您的需求或想法..."
            rows={5}
            className={`${inputClasses('message')} resize-y min-h-[120px]`}
            disabled={isSubmitting}
          />
          {errors.message && touched.message && (
            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>

        {/* 提交状态提示 */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold text-green-800">请在邮件应用中确认发送</p>
              <p className="text-sm text-green-700 mt-1">已尝试打开邮件草稿；若未弹出邮件应用，请直接联系 yiming.zheng.work@outlook.com。</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && Object.keys(errors).length > 0 && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold text-red-800">表单填写有误</p>
              <p className="text-sm text-red-700 mt-1">请检查并修正上方标红的字段后再提交。</p>
            </div>
          </div>
        )}

        {/* 提交按钮 */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              发送中...
            </span>
          ) : (
            '打开邮件草稿'
          )}
        </Button>
      </form>
    </FadeIn>
  );
};
