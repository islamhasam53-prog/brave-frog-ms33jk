import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import UserList from "./UserList";

export default function App() {
  return (
    <Router>
      <div
        className="font-sans text-right bg-gray-50 min-h-screen flex flex-col"
        dir="rtl"
      >
        {/* Navbar - القائمة العلوية الاحترافية */}
        <nav className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              {/* جهة الشعار والاسم الرسمي */}
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="flex items-center gap-4 hover:opacity-90 transition-opacity"
                >
                  <img
                    src="/logo.png"
                    alt="شعار بلدية الشيوخ"
                    className="h-20 w-auto object-contain py-2"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/80?text=Logo";
                    }}
                  />
                  <div className="flex flex-col border-r-2 border-gray-200 pr-4">
                    <span className="text-2xl font-black text-gray-800 tracking-tighter">
                      بلدية الشيوخ
                    </span>
                    <span className="text-sm font-bold text-green-700 underline decoration-red-500 decoration-2 underline-offset-4">
                      دولة فلسطين
                    </span>
                  </div>
                </Link>
              </div>

              {/* روابط التنقل للشاشات الكبيرة */}
              <div className="hidden md:flex items-center gap-10 font-bold text-gray-700 text-lg">
                <Link
                  to="/"
                  className="hover:text-green-600 transition-colors relative group"
                >
                  الرئيسية
                  <span className="absolute bottom-[-4px] right-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  to="/users"
                  className="hover:text-green-600 transition-colors relative group"
                >
                  كادر البلدية
                  <span className="absolute bottom-[-4px] right-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </Link>
                <a
                  href="#contact"
                  className="bg-green-600 text-white px-6 py-2.5 rounded-xl hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  اتصل بنا
                </a>
              </div>

              {/* أيقونة القائمة للموبايل */}
              <div className="md:hidden text-green-600 text-3xl cursor-pointer">
                ☰
              </div>
            </div>
          </div>
        </nav>

        {/* المحتوى الرئيسي للموقع */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </main>

        {/* Footer - تذييل الصفحة المطور بالروابط التفاعلية */}
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-8 border-green-600 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* القسم الأول: عن البلدية */}
            <div className="text-center md:text-right space-y-4">
              <h4 className="text-xl font-bold border-b-2 border-green-600 pb-2 inline-block">
                عن بلدية الشيوخ
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                مؤسسة وطنية خدماتية تسعى للنهوض بمدينة الشيوخ وتطوير مرافقها
                العامة بما يضمن تقديم أفضل الخدمات للمواطنين الكرام بجودة
                وشفافية.
              </p>
            </div>

            {/* القسم الثاني: روابط سريعة */}
            <div className="text-center space-y-4">
              <h4 className="text-xl font-bold border-b-2 border-green-600 pb-2 inline-block">
                وصول سريع
              </h4>
              <ul className="text-gray-400 space-y-3 text-sm font-medium">
                <li>
                  <Link
                    to="/"
                    className="hover:text-green-500 transition-colors"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users"
                    className="hover:text-green-500 transition-colors"
                  >
                    سجل الموظفين
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-green-500 transition-colors"
                  >
                    الموقع الجغرافي
                  </a>
                </li>
              </ul>
            </div>

            {/* القسم الثالث: التواصل التفاعلي (انقر للاتصال) */}
            <div className="text-center md:text-left space-y-4" dir="ltr">
              <h4 className="text-xl font-bold border-b-2 border-green-600 pb-2 inline-block font-sans">
                Official Contact
              </h4>
              <div className="space-y-2 text-gray-400 font-medium">
                <p className="hover:text-green-500 transition-colors">
                  <span className="mr-2">📞</span>
                  <a href="tel:022561002" className="hover:underline">
                    Tel: 022561002
                  </a>
                </p>
                <p className="hover:text-blue-400 transition-colors">
                  <span className="mr-2">📠</span>
                  <span>Fax: 022561001</span>
                </p>
                <p className="hover:text-red-400 transition-colors">
                  <span className="mr-2">📧</span>
                  <a href="mailto:Info@shyoukh.org" className="hover:underline">
                    Info@shyoukh.org
                  </a>
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-4 italic font-sans">
                Hebron - Palestine
              </p>
            </div>
          </div>

          {/* حقوق النشر */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              جميع الحقوق محفوظة © 2026 |
              <span className="text-green-600 font-bold mx-1">
                بلدية الشيوخ
              </span>
              - قسم تكنولوجيا المعلومات
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
