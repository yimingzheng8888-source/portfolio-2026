import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  path: string;
}

interface MobileMenuProps {
  /** 是否打开 */
  isOpen: boolean;
  /** 关闭回调 */
  onClose: () => void;
  /** 导航项列表 */
  navItems: NavItem[];
  /** 当前激活路径 */
  activePath: string;
}

/**
 * 移动端侧滑抽屉菜单
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activePath,
}) => {
  const isActive = (path: string) => {
    if (path === '/') {
      return activePath === '/';
    }
    return activePath.startsWith(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* 抽屉 */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex-1">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Link
                        to={item.path}
                        className={`block py-4 text-lg font-medium border-b border-gray-100 transition-colors ${
                          isActive(item.path)
                            ? 'text-accent'
                            : 'text-text-primary hover:text-accent'
                        }`}
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* 底部信息 */}
              <div className="py-6 border-t border-gray-100">
                <p className="text-sm text-text-muted">
                  © 2026 郑一鸣 · PORTFOLIO
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
