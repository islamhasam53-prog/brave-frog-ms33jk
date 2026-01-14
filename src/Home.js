import React, { useEffect } from "react";

const Home = () => {
  // تفعيل إضافة فيسبوك البرمجية عند تحميل الصفحة
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. قسم الترحيب (Hero Section) */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            بوابتكم إلى خدمات بلدية الشيوخ الرقمية
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-10">
            نعمل من أجل مدينة أجمل، خدمات أسرع، وتواصل دائم مع المواطن.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {/* زر الاتصال السريع في الهيرو */}
            <a
              href="tel:022561002"
              className="bg-white text-green-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-lg flex items-center gap-2"
            >
              <span>📞</span> اتصل بنا الآن
            </a>
            <a
              href="mailto:Info@shyoukh.org"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition-all flex items-center gap-2"
            >
              <span>📧</span> مراسلة البلدية
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      </section>

      {/* 2. المحتوى الرئيسي (شبكة المحتوى) */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* القسم الأيمن: النبذة والمعلومات (2/3 المساحة) */}
        <div className="lg:col-span-2 space-y-12 text-right order-2 lg:order-1">
          {/* بطاقات التواصل التفاعلية */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir="rtl">
            {/* بطاقة الهاتف - قابلة للنقر */}
            <a
              href="tel:022561002"
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 transform hover:scale-105 transition-all hover:border-green-500 group"
            >
              <span className="text-5xl group-hover:animate-bounce">📞</span>
              <div>
                <h4 className="font-bold text-xl mb-1 text-gray-800">
                  اتصال مباشر
                </h4>
                <p className="font-mono text-2xl text-green-700">022561002</p>
                <span className="text-xs text-gray-400 font-bold">
                  انقر للاتصال فوراً
                </span>
              </div>
            </a>

            {/* بطاقة الإيميل - قابلة للنقر */}
            <a
              href="mailto:Info@shyoukh.org"
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 transform hover:scale-105 transition-all hover:border-blue-500 group"
            >
              <span className="text-5xl group-hover:animate-pulse">📧</span>
              <div>
                <h4 className="font-bold text-xl mb-1 text-gray-800">
                  البريد الإلكتروني
                </h4>
                <p className="text-lg text-blue-700 break-all font-bold">
                  Info@shyoukh.org
                </p>
                <span className="text-xs text-gray-400 font-bold">
                  انقر لإرسال رسالة
                </span>
              </div>
            </a>
          </div>

          {/* استبدل قسم الخريطة في ملف Home.js بهذا الكود */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-r-8 border-green-600 pr-4 italic font-black">
              موقعنا الجغرافي
            </h2>

            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-96 relative group">
              {/* الخريطة التفاعلية لبلدة الشيوخ */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13626.8374940656!2d35.139!3d31.574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e0e699844229%3A0x5ca8290a680a1610!2z2KfZhNi02YrZiNiu!5e0!3m2!1sar!2s!4v1715000000000!5m2!1sar!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="موقع بلدية الشيوخ"
              ></iframe>
            </div>

            {/* زر الملاحة المباشرة */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=31.574996,35.149421"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl transition-all flex items-center gap-3 transform hover:-translate-y-1"
              >
                <span className="text-2xl">🚗</span>
                فتح نظام الملاحة (GPS) للوصول للبلدية
              </a>
              <p className="text-gray-500 text-sm font-medium">
                📍 العنوان: وسط بلدة الشيوخ، محافظة الخليل
              </p>
            </div>
          </section>
        </div>

        {/* القسم الأيسر: الفيسبوك (1/3 المساحة) */}
        <div className="lg:col-span-1 order-1 lg:order-2">
          <div className="sticky top-28">
            <div className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-blue-600">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="text-2xl text-blue-600 italic font-black uppercase tracking-widest">
                  Facebook
                </span>
                <div className="bg-blue-600 p-2 rounded-full text-white">
                  🌐
                </div>
              </div>

              <div className="flex justify-center overflow-hidden rounded-xl border border-gray-100">
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/profile.php?id=100069324065050"
                  data-tabs="timeline"
                  data-width="500"
                  data-height="700"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/profile.php?id=100069324065050"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/profile.php?id=100069324065050">
                      بلدية الشيوخ
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. قسم التواصل السفلي (الفاكس والموقع) */}
      <section id="contact" className="bg-gray-800 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">التفاصيل الفنية للتواصل</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-700 rounded-3xl shadow-inner border border-gray-600">
              <div className="text-4xl mb-3">📠</div>
              <h4 className="font-bold mb-1 text-green-400">الفاكس الرسمي</h4>
              <p className="font-mono text-2xl tracking-widest">022561001</p>
            </div>
            <div className="p-8 bg-gray-700 rounded-3xl shadow-inner border border-gray-600">
              <div className="text-4xl mb-3 text-red-400">📍</div>
              <h4 className="font-bold mb-1 text-green-400">
                العنوان الجغرافي
              </h4>
              <p className="text-lg">دولة فلسطين - محافظة الخليل - الشيوخ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
